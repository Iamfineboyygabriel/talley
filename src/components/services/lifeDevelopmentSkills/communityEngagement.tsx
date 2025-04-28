import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame13.png";

const CommunityEngagements = () => {
  return (
    <main className="mt-20">
      <Typography className="font-extrabold mb-6 playfair text-4xl">
        Comunity Engagements
      </Typography>
      <div className="flex gap-8">
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Accessing Local Services
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              How to find support groups, youth centres, food banks.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Volunteering & Mentoring
              </Typography>
              <Typography className="font-extrabold text-xl">
                Preparation
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Mock interviews, how to dress, and communicate effectivly.
            </Typography>
          </div>

          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Navigating Public
              </Typography>
              <Typography className="font-extrabold text-xl">
                Transport
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Planning routes, using Oyster/contactless cards, safety
            </Typography>
          </div>
        </div>
        <img src={frame} alt="frame" />
      </div>
    </main>
  );
};

export default CommunityEngagements;
