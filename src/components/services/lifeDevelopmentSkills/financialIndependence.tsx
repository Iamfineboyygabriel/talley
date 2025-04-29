import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame11.png";

const FinancialIndependence = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto">
      <Typography className="font-extrabold mb-6 playfair text-4xl">
        Financial Independence
      </Typography>
      <div className="flex gap-8">
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Banking & Credit
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Opening accounts, understanding interest rates, avoiding payday
              loand.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Benefits &
              </Typography>
              <Typography className="font-extrabold text-xl">
                Entitlements
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              What support is available (e.g. Universal Credit, Council Tax
              relief)
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Saving & Planning
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Emergency funds, long-term-saving, pension introduction.
            </Typography>
          </div>
        </div>
        <img src={frame} alt="frame" />
      </div>
    </main>
  );
};

export default FinancialIndependence;
