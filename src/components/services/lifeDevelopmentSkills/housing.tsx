import { Typography } from "@material-tailwind/react";
import frame from "../../../assets/images/frame12.png";

const Housing = () => {
  return (
    <main className="mt-20 max-w-7xl mx-auto">
      <Typography className="font-extrabold mb-6 playfair text-4xl">
        Housing & Tenancy Skills
      </Typography>
      <div className="flex gap-8">
        <img src={frame} alt="frame" />
        <div className="grid gap-6 grid-cols-2">
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Understanding Tenancy
              </Typography>
              <Typography className="font-extrabold text-xl">
                Agreements
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Rights and responsibilities of tenants.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-8 pb-14 px-10 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Finding & Maintaining
              </Typography>
              <Typography className="font-extrabold text-xl">
                Accomodation
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Viewing properties, managing lanlord relationships.
            </Typography>
          </div>
          <div className="bg-inherit rounded-xl flex flex-col gap-3 pt-6 pb-14 px-8 border border-[#606C6C33]">
            <div>
              <Typography className="font-extrabold text-xl">
                Avoiding Homelessness
              </Typography>
            </div>
            <Typography className="font-medium text-[#626A6A]">
              Knowing where to seek help if things go wrong.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Housing;
