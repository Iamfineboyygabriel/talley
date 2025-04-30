import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame9.png";

const Employment = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto">
      <Typography className="font-extrabold mb-6 playfair text-4xl">
        Employment & Career Skills
      </Typography>
      <div className="flex gap-8">
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                CV Writing & Job
              </Typography>
              <Typography className="font-extrabold text-xl">
                Applications
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Templates, personal statement, and cover leters.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Interview
              </Typography>
              <Typography className="font-extrabold text-xl">
                Preparation
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Mock interviews, how to dress, and communicate effectively.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Workplace Skills
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Time management, professional boundaries, and communication at
              work.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Digital Literacy
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Using email, microsoft Office, and safe internet practices.
            </Typography>
          </div>
        </div>
        <img src={frame} alt="frame" />
      </div>
    </main>
  );
};

export default Employment;
