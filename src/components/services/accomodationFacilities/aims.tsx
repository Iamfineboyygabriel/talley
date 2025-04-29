import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame21.png";

const Aims = () => {
  return (
    <main className="max-w-7xl mt-8 mx-auto">
      <div className="flex gap-8">
        <img src={frame} alt="frame" />
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                24/7 On-Site
              </Typography>
              <Typography className="font-extrabold text-xl">
                Support
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Round-theclock assistance to ensure safety and well-being
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Personalisd
              </Typography>
              <Typography className="font-extrabold text-xl">
                Mentoring
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Tailored mentoring to help residents set and achiveve personal
              goals.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Goal Setting &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Progress Tracking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Regular Check-ins to monitor progress and support
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aims;
