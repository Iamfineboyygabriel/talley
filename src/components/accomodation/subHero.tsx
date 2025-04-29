import { Typography } from "@material-tailwind/react";
import hero from "../../assets/images/frame30.png";

const SubHero = () => {
  return (
    <div className="relative">
      <img src={hero} alt="hero" className="w-full mb-18" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <Typography className="font-bold mb-4 text-white text-xl text-center">
          Our Services / Accomodation Services /{" "}
          <span className="text-[#48D1CC]">Private Rooms</span>
        </Typography>
        <Typography className="text-6xl playfair font-bold my-8">
          Private Rooms
        </Typography>
        <Typography className="max-w-3xl font-medium text-xl px-4">
          Comfortable living options tailored to individual prefrences
        </Typography>
      </div>
    </div>
  );
};

export default SubHero;
