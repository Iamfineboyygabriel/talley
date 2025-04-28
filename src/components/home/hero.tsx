import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame1.png";

const Hero = () => {
  return (
    <main className="bg-[#EFFBFA] h-auto w-full pt-[50px]">
      <section className="max-w-7xl container m-auto">
        <div>
          <Typography className="text-6xl playfair font-bold text-center">
            Building Independence
          </Typography>
          <Typography className="playfair text-[#48D1CC] text-center mt-2 font-bold italic text-6xl">
            Empowering <span className="text-black">Lives</span>
          </Typography>
          <Typography className="font-medium text-[#626A6A] mt-8 text-lg text-center ">
            Safe and supportive semi-independent accommodation for 18+
          </Typography>
        </div>
        <section className="flex gap-3 justify-center mt-12">
          <Button className="bg-[#48D1CC] rounded-full font-bold text-lg text-white px-8 py-3">
            Find Your New Home Now
          </Button>
          <Button className="bg-white px-8 text-[#48D1CC] rounded-full py-3 font-bold text-lg">
            Learn More
          </Button>
        </section>
        <div className="mx-auto mt-6 w-[650px]">
          <img src={frame} alt="frame" className="w-[100px" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
