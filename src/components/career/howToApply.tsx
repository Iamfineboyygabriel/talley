import { Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame26.png";

const HowToApply = () => {
  return (
    <main className="w-full py-18">
      <div className="max-w-7xl bg-white rounded-xl p-6 items-center flex justify-between mx-auto">
        <div>
          <Typography className="playfair text-5xl font-bold">
            How to Apply
          </Typography>
          <Typography className="mt-10 leading-relaxed max-w-xl font-medium text-[#606C6C]">
            Intreseted in becoming a voluneer? We'd love to hear from you!
            Simplify fill out our volunteer application from or email us at{" "}
            <span className="text-[#48D1CC] font-bold">
              talleycares@gmail.com
            </span>{" "}
            to learn more.
          </Typography>
          <Typography className="text-[#606C6C] font-medium mt-5">
            Join us today and be a part of something truly life- <br />{" "}
            changing!
          </Typography>
        </div>
        <img src={frame} alt="image" />
      </div>
    </main>
  );
};

export default HowToApply;
