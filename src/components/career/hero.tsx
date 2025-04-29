import { Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame25.png";
import { Bulb, Career, Hand, Team } from "../../assets/svg";

const Hero = () => {
  return (
    <div className="w-full mb-18">
      <div className="relative">
        <img src={frame} alt="Volunteer with Talley" className="w-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-start pt-27">
          <div className="text-center">
            <Typography className="text-white font-bold text-xl mb-10">
              Careers
            </Typography>

            <div className="mb-6">
              <Typography className="text-white playfair text-6xl font-extrabold">
                Make a Difference -
              </Typography>
              <Typography className="text-white playfair text-6xl font-extrabold">
                Volunteer with Talley
              </Typography>
            </div>

            <Typography className="text-white mx-auto max-w-2xl font-medium text-lg">
              At Talley, we believe in the power of community and the impact of
              giving back. Our volunteers play a vital role in creating a safe,
              supportive, and inspiring environment for young adults
              transitioning to independent living. Whether you're mentoring,
              leading workshops, or lending a helping hand, your time and skills
              can make a real difference.
            </Typography>

            <Typography className="text-white mt-17 text-2xl font-bold mb-8">
              Why Volunteer with Us?
            </Typography>

            <div className="mt-17 grid grid-cols-4 max-w-2xl">
              <div className="flex items-center flex-col">
                <Hand />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-xl">
                    Change
                  </Typography>
                  <Typography className="text-white font-semibold text-xl">
                    Lives
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Team />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-xl">
                    Supportive
                  </Typography>
                  <Typography className="text-white font-semibold text-xl">
                    Community
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Career />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-xl">
                    Gain Valuable
                  </Typography>
                  <Typography className="text-white font-semibold text-xl">
                    Experince
                  </Typography>
                </div>
              </div>
              <div className="flex items-center flex-col">
                <Bulb />
                <div className="mt-3">
                  <Typography className="text-white font-semibold text-xl">
                    Flexible
                  </Typography>
                  <Typography className="text-white font-semibold text-xl">
                    Opportunities
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
