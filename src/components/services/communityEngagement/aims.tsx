import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame22.png";

const Aims = () => {
  return (
    <main className="max-w-7xl mt-8 mx-auto">
      <div className="flex gap-8">
        <img src={frame} alt="frame" />
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Social Events &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Activities
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Organised events to build relationships and foster a sense of
              community.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Volunteering
              </Typography>
              <Typography className="font-extrabold text-xl">
                Opportunities
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Support for residents to engage in meaningful volunteer work.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Peer Support
              </Typography>
              <Typography className="font-extrabold text-xl">
                Networks
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Group sessions to connect with others and share experiences.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Aims;
