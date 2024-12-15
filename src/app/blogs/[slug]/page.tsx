import {
  BlogDetails,
  BlogHero,
  BlogIntro,
  OtherBlogs,
  ReviewFutureAwaits,
} from "@/sections";
import { client } from "@/utils/contentful";

// Fetch blog details based on the slug
const fetchBlogBySlug = async (slug: string) => {
  const result = await client.getEntries({
    content_type: "blogs", // Replace with your content type ID
    "fields.slug": slug, // Filter by slug field
  });

  if (result.items.length === 0) {
    throw new Error(`No blog found for slug: ${slug}`);
  }

  return result.items[0]; // Return the first matching blog entry
};

const BlogDetail = async ({ params }) => {
  console.log(params.slug);
  const blog = await fetchBlogBySlug(params.slug);
  return (
    <div className="bg-ice-blue">
      <BlogHero />
      <BlogIntro />
      <BlogDetails />
      <OtherBlogs />

      {/* <p>{blog.fields.title}</p> */}
      <ReviewFutureAwaits />
    </div>
  );
};

export default BlogDetail;
