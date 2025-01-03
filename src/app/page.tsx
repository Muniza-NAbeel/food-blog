import ProductsCard from "@/components/ProductCard";
import { client } from "@/sanity/lib/client";

interface HomeData {
  title: string;
  description: string;
  imageUrl: string;
}

async function getData(): Promise<HomeData[]> {
  try {
    const fetchData = await client.fetch(
      `*[_type == 'home']{
        title,
        description,
        "imageUrl": image.asset->url
      }`
    );
    return fetchData;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return []; // Return an empty array in case of error
  }
}

export default async function Home() {
  const data = await getData();

  if (data.length === 0) {
    return <div>Failed to load data</div>; // Handle loading/error state
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {data.map((val, i) => (
        <div
          key={i}
          className="relative h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: val.imageUrl ? `url(${val.imageUrl})` : 'none', // Conditional background
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 text-white p-6">
            <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-center mb-4 mt-16 shadow-lg">
              {val.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-xl text-center max-w-2xl mt-4 shadow-lg">
              {val.description}
            </p>
          </div>
        </div>
      ))}
      <ProductsCard />
    </div>
  );
}

