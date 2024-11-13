"use client";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { FutureAwaits, ReviewCarousel } from "@/components";

const ReviewFutureAwaits = () => {
  return (
    <section
      className="px-5 md:px-10 lg:px-32 xl:px-40 py-8 lg:py-12 xl:py-16"
      style={{
        background: `url(${GradientBackground.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <ReviewCarousel />
      <FutureAwaits />
    </section>
  );
};

export default ReviewFutureAwaits;
