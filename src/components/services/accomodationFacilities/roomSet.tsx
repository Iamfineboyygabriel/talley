import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../../assets/images/frame16.png";
import frame2 from "../../../assets/images/frame17.png";
import frame3 from "../../../assets/images/frame18.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const RoomSet = () => {
  return (
    <main className="w-full py-12">
      <section className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-8">
          <div className="flex justify-center mb-4">
            <img src={frame1} alt="image" className="w-full object-cover" />
          </div>
          <div className="flex flex-col space-y-4">
            <Typography className="font-extrabold text-xl">
              Private Rooms
            </Typography>
            <Typography className="text-[#626A6A] font-medium">
              Comfortable living options tailored to individual preferences.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-8 w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-white rounded-full py-3 font-bold text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-8">
          <div className="flex justify-center mb-4">
            <img src={frame2} alt="image" className="w-full object-cover" />
          </div>
          <div className="flex flex-col space-y-4">
            <Typography className="font-extrabold text-xl">
              Modern Shared Spaces
            </Typography>
            <Typography className="text-[#626A6A] font-medium">
              Kitchens, lounges, and recreational areas equipped for residents'
              needs.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-8 w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-white rounded-full py-3 font-bold text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-[#EFFBFA] rounded-xl flex flex-col p-8">
          <div className="flex justify-center mb-4">
            <img src={frame3} alt="image" className="w-full object-cover" />
          </div>
          <div className="flex flex-col space-y-4">
            <Typography className="font-extrabold text-xl">
              Counselling & Emotional Support
            </Typography>
            <Typography className="text-[#626A6A] font-medium">
              Access to professional counselling services.
            </Typography>
            <Link to={ROUTES.PRIVATE_ROOM}>
              <Button className="bg-[#48D1CC] mt-8 w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-white rounded-full py-3 font-bold text-xl">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoomSet;
