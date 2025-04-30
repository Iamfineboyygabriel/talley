import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame10.png";

const Emotional = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto">
      <Typography className="font-extrabold mb-6 playfair text-4xl">
        Emotional & Social Development
      </Typography>
      <div className="flex gap-8">
        <img src={frame} alt="frame" />
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Resilience & Self
              </Typography>
              <Typography className="font-extrabold text-xl">
                Confidence
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Coping strategies, positive affirmations, therapy options.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Conflict Resolution and
              </Typography>
              <Typography className="font-extrabold text-xl">
                Communication
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              How to express needs, resolve disagreements, and build healthy
              relationships.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Goal-Setting
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              How to set SMART goals, and track progress in life, work, or
              education.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Decision-Making & Critical
              </Typography>
              <Typography className="font-extrabold text-xl">
                Thinking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
            Enhance ability to think critically, make decisions, and weigh risks effectively.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Emotional;
