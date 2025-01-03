// app/products/[slug]/page.tsx
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import CommentSection from "@/components/CommentSection";

// Define the ProductData interface correctly
interface ProductData {
  title: string;
  description: string;
  slug: { current: string };
  excerpt: string;
  imageUrl: string;
  content: string;
}

// Fetch the data from Sanity
async function getProductData(slug: string): Promise<ProductData | null> {
  const fetchData = await client.fetch(
    `*[_type == 'products' && slug.current == $slug][0]{
      title,
      slug,
      excerpt,
      description,
      "imageUrl": image.asset->url,
      content
    }`,
    { slug }  // Passing the slug to Sanity's query
  );
  return fetchData || null;
}

export default async function Product({ params }: { params: { slug: string } }) {
  const slug = params.slug;  // Directly access the slug from URL params

  const post = await getProductData(slug);

  if (!post) {
    return <p className="text-center text-red-500 font-semibold mt-10 bg-slate-50">Product not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-100 shadow-lg rounded-lg mt-8 pt-20">
      {/* Product Image */}
      {post.imageUrl && (
        <div className="mb-6">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      {/* Product Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>

      {/* Product Excerpt */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">{post.excerpt}</p>

      {/* Product Content */}
      <p className="text-gray-600 text-lg leading-relaxed mb-8">{post.description}</p>

      {/* Comment Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Comments</h2>
        <CommentSection />
      </div>
    </div>
  );
}


