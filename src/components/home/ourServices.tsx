import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../assets/images/frame4.png";
import frame2 from "../../assets/images/frame5.png";
import frame3 from "../../assets/images/frame6.png";
import { Arrow } from "../../assets/svg";

const OurServices = () => {
  return (
    <main className="pb-12 bg-[#0A2928]">
      <div className="max-w-7xl mx-auto">
        <div className="grid text-white gap-6 grid-cols-3">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <img src={frame1} alt="frame" />
            </div>
            <Typography className="font-bold text-2xl">
              Life Skills Development
            </Typography>
            <Typography>
              At Talley, we beleive that independence is more ham just having a
              place to stay -it's about having the confidence and skills to
              build a successfu future. Our Life Skills Development program is
              esigned to equip young adults with the practical knowledge and
              expereince they need t navigate everyday life with ease.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-lg text-white px-8 py-3">
              Read More
              <Arrow />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <img src={frame2} alt="frame" />
            </div>
            <Typography className="font-bold text-2xl">
              Accomodation and <br /> Facilities
            </Typography>
            <Typography>
              At Talley we provide safe comfortable and fully equiped living
              spaces designed to support young adults (18+) on their journey to
              independence. Our accomodations offer a welcoming enviroment where
              you can feel secure build confidence, and develop essential life
              skills.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-lg text-white px-8 py-3">
              Read More
              <Arrow />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div>
              <img src={frame3} alt="frame" />
            </div>
            <Typography className="font-bold text-2xl">
              Community Engagement
            </Typography>
            <Typography>
              At Talley, we beleive that a strong community is teh foundation
              for personal growth and independence. We foster a supportive and
              inclusive enviroment where young adults can build meaningful
              connections, develop social skills, and engage in positive
              experiences that enrich their lives.
            </Typography>
            <Button className="bg-[#48D1CC] w-fit cursor-pointer items-center flex gap-2 rounded-full font-bold text-lg text-white px-8 py-3">
              Read More
              <Arrow />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OurServices;
