import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface ProductsCard {
  title: string;
  description: string;
  slug: { current: string }; // Assuming slug is an object with a 'current' field
  excerpt: string;
  imageUrl: string;
}

async function getData(): Promise<ProductsCard[]> {
  const fetchData = await client.fetch(
    `*[_type == 'products']{
      title,
      slug,
      excerpt,
      description,
      "imageUrl": image.asset->url
    }`
  );
  return fetchData;
}

export default async function ProductsCard() {
  const data = await getData();
  console.log(data);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {data.map((val, i) => (
        <div
          key={i}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all"
        >
          <Link href={`/products/${val.slug.current}`} className="block">
            {/* Post Image */}
            <Image
              src={val.imageUrl}  // Use the imageUrl directly
              alt={val.title}
              width={500}
              height={350}
              className="w-full h-56 object-cover"
            />
            {/* Post Content */}
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {val.title}
              </h3>
              <p className="text-gray-600 mt-2">
                {val.description.substring(0, 100)}...
              </p>
              <button className="mt-4 bg-yellow-600 text-white px-6 py-2 rounded-full hover:bg-yellow-700 active:scale-95 transition-transform duration-150">
                Read More
              </button>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
