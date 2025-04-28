import { Button, Typography } from "@material-tailwind/react";
import frame from "../../assets/images/frame3.png";
import { Arrow, Bag, Bulb, Career, Team } from "../../assets/svg";

const JoinTalley = () => {
  return (
    <main className="bg-[#48D1CC] p-15">
      <div className="container max-w-7xl grid grid-cols-2 mx-auto">
        <div>
          <img src={frame} alt="team" />
        </div>
        <div className="flex text-white justify-center flex-col">
          <Typography className="font-semibold mb-4 text-2xl">
            Careers
          </Typography>
          <div className="mb-8">
            <Typography className="playfair mb-3 font-extrabold text-5xl">
              Join the Talley Team
            </Typography>
            <Typography className="font-medium max-w-2xl">
              Make a diffrence in the lives of young adults by joining Talley.
              We are dedicated to providing safe, supportive, and empowering
              accomodation for individuals transitioning to be independent
              living. if you're passionate about making a positive impact, we'd
              love to hear from you!
            </Typography>
          </div>

          <div className="grid mb-8 grid-cols-4 items-center gap-5">
            <div className="flex flex-col">
              <Bag />
              <Typography className="font-semibold mt-3 text-lg">
                Meaningful
              </Typography>
              <Typography className="font-semibold text-lg">Work</Typography>
            </div>

            <div className="flex flex-col">
              <Team />
              <Typography className="font-semibold text-lg mt-3">
                Supportive
              </Typography>
              <Typography className="font-semibold text-lg">Work</Typography>
            </div>

            <div className="flex flex-col">
              <Career />
              <Typography className="font-semibold text-lg mt-3">
                Career
              </Typography>
              <Typography className="font-semibold text-lg">
                Development
              </Typography>
            </div>

            <div className="flex flex-col">
              <Bulb />
              <Typography className="font-semibold text-lg mt-3">
                Career
              </Typography>
              <Typography className="font-semibold text-lg">
                Opportunities
              </Typography>
            </div>
          </div>
          <Button className="bg-white w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-[#48D1CC] rounded-full py-3 font-bold text-xl">
            Join Our Team
            <Arrow color="#48D1CC" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default JoinTalley;
