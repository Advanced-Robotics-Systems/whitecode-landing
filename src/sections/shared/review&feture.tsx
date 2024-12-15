"use client";
import GradientBackground from "@/assets/images/purple-gradient.png";
import { FutureAwaits, ReviewCarousel } from "@/components";

const ReviewFutureAwaits = () => {
  return (
    <section
      className="padding-responsive"
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
