import {
  BlogDetails,
  BlogHero,
  BlogIntro,
  OtherBlogs,
  ReviewFutureAwaits,
} from "@/sections";

const Blog = () => {
  return (
    <div className="bg-ice-blue">
      <BlogHero />
      <BlogIntro />
      <BlogDetails />
      <OtherBlogs />
      <ReviewFutureAwaits />
    </div>
  );
};

export default Blog;
