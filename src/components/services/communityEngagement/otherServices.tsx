import { Button, Typography } from "@material-tailwind/react";
import frame1 from "../../../assets/images/frame19.png";
import frame2 from "../../../assets/images/frame14.png";
import { Arrow } from "../../../assets/svg";

const OtherServices = () => {
  return (
    <main className="bg-[#EFFBFA] pt-13 mt-22 pb-19">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <Typography className="text-4xl text-center font-extrabold playfair">
            Other Services
          </Typography>
        </header>
        <section>
          <div className="flex gap-10 justify-between">
            <img src={frame1} alt="frame" />
            <div className="flex flex-col">
              <Typography className="font-extrabold text-xl mb-8">
                Life Skills Development
              </Typography>
              <article>
                <Typography className="text-[#626A6A] font-medium">
                  At Talley, we beleive that independence is more than just
                  having a place to stay , its abou having confidence and skills
                  to build a successful future. Our Life Skills Development
                  program is designed to equip young adults with the practical
                  knowledge and experience they nee dto navigate with life with
                  ease.
                </Typography>
              </article>
              <Button className="bg-[#48D1CC] mt-auto w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-white rounded-full py-3 font-bold text-xl">
                Read More
                <Arrow color="white" />
              </Button>
            </div>
          </div>
        </section>

        <section className="mt-33">
          <div className="flex gap-10 justify-between">
            <div className="flex flex-col">
              <Typography className="font-extrabold text-xl mb-8">
                Accomodation and Facilities
              </Typography>
              <article>
                <Typography className="text-[#626A6A] font-medium">
                  At Talley, we provide safe, comfortable, and fully equipped
                  living spaces designed to support young adults (18+) on their
                  journey to independence. Our accomodation offer a welcoming
                  enviroment where you can feel secure, build confidence, and
                  develop essential life skills.
                </Typography>
              </article>
              <Button className="bg-[#48D1CC] mt-auto w-fit items-center cursor-pointer gap-4 flex fap-3 px-8 text-white rounded-full py-3 font-bold text-xl">
                Read More
                <Arrow color="white" />
              </Button>
            </div>
            <img src={frame2} alt="frame" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default OtherServices;
