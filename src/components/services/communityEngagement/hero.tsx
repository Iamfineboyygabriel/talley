import { Typography } from "@material-tailwind/react";
import hero from "../../../assets/images/frame31.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="w-full mb-18" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <Typography className="font-bold mb-4 text-white text-xl text-center">
          Our Services
        </Typography>
        <Typography className="text-6xl playfair font-bold my-8">
          Community Engagement
        </Typography>
        <Typography className="max-w-3xl font-medium px-4">
          At Talley, we believe that a strong community is teh foundation for
          personal growth and independence. We foster a supportive and inculsive
          enviroment where young adults can build meaningful connections,
          develop social skills, and engage in positive expereiences that enrich
          their lives.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
