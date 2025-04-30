import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/frame30.png";

const Hero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="w-full mb-18" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <Typography className="font-bold mb-4 text-white text-xl text-center">
          Our Services
        </Typography>
        <Typography className="text-6xl playfair font-bold my-8">
          Accomodation Facilities
        </Typography>
        <Typography className="max-w-3xl font-medium px-4">
          At Talley, we provide safe, comfortable, and fully equiped living
          spaces designed to support young adults (18+) on their journey to
          independence. Our accomodations offer a welcoming enviroment where you
          can feel secure, build confidence, and develop essential life skills.
        </Typography>
      </div>
    </div>
  );
};

export default Hero;
