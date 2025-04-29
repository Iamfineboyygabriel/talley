import { Typography } from "@material-tailwind/react";
import hero from "../../../assets/images/frame27.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="w-full mb-18" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <Typography className="font-bold mb-4 text-white text-xl text-center">
          Our Services
        </Typography>
        <Typography className="text-6xl playfair font-bold my-8">
          Life Skills Development
        </Typography>
        <Typography className="max-w-3xl font-medium px-4">
          At Talley, we believe that independence is more than just having a
          place to stay—it's about having the confidence and skills to build a
          successful future. Our Life Skills Development program is designed to
          equip young adults with the practical knowledge and experience they
          need to navigate everyday life with ease.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
