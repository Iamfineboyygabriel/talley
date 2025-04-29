import { Typography } from "@material-tailwind/react";
import { Book, HandLove, HandShake, House, Light } from "../../assets/svg";

const GetInvolved = () => {
  return (
    <main className="w-full bg-[#EFFBFA]">
      <div className="max-w-7xl mx-auto pt-10">
        <Typography className="text-black text-2xl text-center font-extrabold">
          Ways to Get Involved
        </Typography>

        <section className="grid grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl px-5 pb-10 py-4">
            <div className="flex justify-between">
              <div>
                <Typography className="font-extrabold text-xl">
                  Mentorship &
                </Typography>
                <Typography className="font-extrabold text-xl">
                  Guidance
                </Typography>
              </div>
              <HandShake />
            </div>
            <Typography className="mt-4 text-[#626A6A] font-medium">
              Provide one-on-one support and encouragement to young adults.
            </Typography>
          </div>

          <div className="bg-white rounded-2xl px-5 pb-10 py-4">
            <div className="flex justify-between">
              <div>
                <Typography className="font-extrabold text-xl">
                  Life Skills
                </Typography>
                <Typography className="font-extrabold text-xl">
                  Workshops
                </Typography>
              </div>
              <Light />
            </div>
            <Typography className="mt-4 text-[#626A6A] font-medium">
              Share your expertise in budgeting, cooking, career development, or
              well-being.
            </Typography>
          </div>

          <div className="bg-white rounded-2xl px-5 pb-10 py-4">
            <div className="flex justify-between">
              <div>
                <Typography className="font-extrabold text-xl">
                  Community
                </Typography>
                <Typography className="font-extrabold text-xl">
                  Engagement
                </Typography>
              </div>
              <House />
            </div>
            <Typography className="mt-4 text-[#626A6A] font-medium">
              Help organize social activities, events, and volunteering
              programs.
            </Typography>
          </div>

          <div className="col-span-3 flex justify-center gap-6">
            <div className="bg-white rounded-2xl px-5 pb-10 py-4 w-1/3">
              <div className="flex justify-between">
                <div>
                  <Typography className="font-extrabold text-xl">
                    Tutoring &
                  </Typography>
                  <Typography className="font-extrabold text-xl">
                    Education Support
                  </Typography>
                </div>
                <Book />
              </div>
              <Typography className="mt-4 text-[#626A6A] font-medium">
                Assist residents with studies, job applications, and career
                preparation.
              </Typography>
            </div>

            <div className="bg-white rounded-2xl px-5 pb-10 py-4 w-1/3">
              <div className="flex justify-between">
                <div>
                  <Typography className="font-extrabold text-xl">
                    General
                  </Typography>
                  <Typography className="font-extrabold text-xl">
                    Volunteering
                  </Typography>
                </div>
                <HandLove />
              </div>
              <Typography className="mt-4 text-[#626A6A] font-medium">
                Support daily operations, facility upkeep, and resident
                well-being.
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default GetInvolved;
