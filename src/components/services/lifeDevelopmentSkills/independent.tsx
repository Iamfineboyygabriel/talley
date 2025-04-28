import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame8.png";

const Independent = () => {
  return (
    <main>
      <Typography className="font-bold mb-6 playfair text-4xl">
        Independent Living Skills
      </Typography>
      <div className="flex gap-8">
        <img src={frame} alt="frame" />
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Budgeting & Money
              </Typography>
              <Typography className="font-extrabold text-xl">
                Management
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              How to create a budget, manage bills, avoid debt and save.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Meal Planning &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Cooking
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Affordable, healthy meal, grocery shopping, and kitchen safety.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                House Keeping &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Maintenance
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Cleaning routines, basic DIY, laundry, managing utilities
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Health & Wellbeing
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Booking GP appointments, understanding NHS services, hygiene and
              sleep routies.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Independent;
