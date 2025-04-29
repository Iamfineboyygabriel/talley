import { Typography } from "@material-tailwind/react";
import {
  Bag,
  BlueLocation,
  Bulb,
  Career,
  Direction,
  Team,
  Time,
} from "../../assets/svg";

const JobOpenings = () => {
  return (
    <main className="bg-[#48D1CC] py-22">
      <div className="max-w-7xl m-auto">
        <Typography className="font-bold mb-4 text-white text-xl text-center">
          Careers
        </Typography>
        <Typography className="font-extrabold mb-3 text-white playfair text-5xl text-center">
          Join The Talley Team
        </Typography>
        <Typography className="font-medium text-md mb-16 max-w-xl mx-auto text-center text-white">
          Make a difference in the lives of young adults by joining Talley. We
          are dedicated to providing safe, supportive, and empowering
          accomodation for individuals transitioning to independent living. if
          you're passionate about making a positive impact, we'd love to hear
          from you!
        </Typography>
        <Typography className="font-bold mb-10 text-white text-3xl text-center">
          Why Work With us
        </Typography>
        <div className="mb-12 text-white flex justify-center items-center gap-8">
          <div className="flex items-center flex-col">
            <Bag />
            <Typography className="font-semibold mt-3 text-lg">
              Meaningful
            </Typography>
            <Typography className="font-semibold text-lg">Work</Typography>
          </div>

          <div className="flex items-center flex-col">
            <Team />
            <Typography className="font-semibold text-lg mt-3">
              Supportive
            </Typography>
            <Typography className="font-semibold text-lg">Work</Typography>
          </div>

          <div className="flex items-center flex-col">
            <Career />
            <Typography className="font-semibold text-lg mt-3">
              Career
            </Typography>
            <Typography className="font-semibold text-lg">
              Development
            </Typography>
          </div>

          <div className="flex items-center flex-col">
            <Bulb />
            <Typography className="font-semibold text-lg mt-3">
              Career
            </Typography>
            <Typography className="font-semibold text-lg">
              Opportunities
            </Typography>
          </div>
        </div>

        <section className="w-full px-6 pt-20 pb-10 flex flex-col gap-8 justify-center bg-white rounded-xl">
          <div className="flex justify-center">
            <div className="bg-[#EFFBFA] text-center w-fit px-5 py-1 rounded-full">
              <Typography className="font-semibold text-[#48D1CC]">
                Current Job Openings:
              </Typography>
            </div>
          </div>

          <div className="flex justify-between items-center py-7 border-b border-gray-200">
            <div className="flex flex-col gap-1">
              <Typography className="font-bold text-lg">
                Support Worker
              </Typography>
              <Typography className="text-[#626A6A] font-medium">
                Work directly with young adults, offering guidance and
                encouragement.
              </Typography>
              <div className="flex gap-4 rounded-full bg-[#EFFBFA] w-fit px-3 py-2 mt-2">
                <div className="flex items-center gap-1">
                  <Time />
                  <Typography className="text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-lg">
              Apply <Direction />
            </button>
          </div>

          <div className="flex justify-between items-center py-7 border-b border-gray-200">
            <div className="flex flex-col gap-1">
              <Typography className="font-bold text-lg">
                Housing Coordinator
              </Typography>
              <Typography className="text-[#626A6A] font-medium">
                Ensure a safe and welcoming environment for all residents.
              </Typography>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-3 py-2 gap-1">
                  <BlueLocation />
                  <Typography className="text-sm font-bold text-[#48D1CC]">
                    100% Remote
                  </Typography>
                </div>
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-3 py-2 gap-1">
                  <Time />
                  <Typography className="text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-lg">
              Apply <Direction />
            </button>
          </div>

          <div className="flex justify-between items-center py-7">
            <div className="flex flex-col gap-1">
              <Typography className="font-bold text-lg">
                Life Skills Mentor
              </Typography>
              <Typography className="text-[#626A6A] font-medium">
                Lead workshops and provide one-on-one coaching in essential life
                skills.
              </Typography>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-3 py-2 gap-1">
                  <BlueLocation />
                  <Typography className="text-sm font-bold text-[#48D1CC]">
                    100% Remote
                  </Typography>
                </div>
                <div className="flex items-center w-fit rounded-full bg-[#EFFBFA] px-3 py-2 gap-1">
                  <Time />
                  <Typography className="text-sm font-bold text-[#48D1CC]">
                    Full-Time
                  </Typography>
                </div>
              </div>
            </div>
            <button className="flex items-center gap-1 font-bold text-lg">
              Apply <Direction />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default JobOpenings;
