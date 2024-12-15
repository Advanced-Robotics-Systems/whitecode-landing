import { AllBlogs, BlogsHero, CareerChat } from "@/sections";
import { client } from "@/utils/contentful";

// const fetchBlogs = async () => {
//   const result = await client.getEntries({
//     content_type: "blogs", // Replace with your actual content type ID
//   });
//   return result.items || []; // Ensure an array is returned
// };

const Blogs = async () => {
  // const blogs = await fetchBlogs();
  return (
    <div>
      <BlogsHero />
      {/* <AllBlogs blogs={blogs} /> */}
      <AllBlogs />
      <CareerChat />
    </div>
  );
};

export default Blogs;
