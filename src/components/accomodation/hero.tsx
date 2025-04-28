import { Typography } from "@material-tailwind/react";

const Hero = () => {
  return (
    <main className="py-16 bg-[#0A2928]">
      <div className="container text-center max-w-7xl mx-auto">
        <Typography className="text-white mb-7 text-lg font-bold">
          Testimonials
        </Typography>
        <Typography className="playfair mb-4 text-white text-6xl font-extrabold">
          What Our <span className="italic text-[#48D1CC]">Residents</span> Say
        </Typography>
        <Typography className="max-w-2xl leading-snug tracking-wider font-semibold text-md mx-auto text-white text-center">
          At Taley, we're proud to have helped young adults build confidence,
          independence, and a sense of belonging. Here's what some of our
          residents have to say abouttheir experience with us:
        </Typography>
      </div>
    </main>
  );
};

export default Hero;
