import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define the ProductData interface correctly, ensuring the slug is an object
interface ProductData {
  title: string;
  description: string;
  slug: {
    current: string; // Slug should be an object with a `current` property
  };
  excerpt: string;
  imageUrl: string;
}

// Fetch the data from Sanity
async function getData(): Promise<ProductData[]> {
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
export default async function Products() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg mt-28">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Products</h1>
        <ul className="space-y-4">
          {data.map((val, i) => ( // Using i here
            <li key={i} className="bg-white p-4 shadow rounded-lg flex gap-4 items-center">
              {/* Product Thumbnail Image */}
              <Image
                src={val.imageUrl} // Accessing val.imageUrl
                alt={val.title} // Accessing val.title
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-2">{val.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{val.excerpt}</p> 
                
                <Link
                  href={`/products/${val.slug.current}`}  
                  className="text-blue-500 hover:underline"
                >
                  Read more
                </Link>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </>
  );
}

