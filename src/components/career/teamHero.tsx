import { Facebook, Instaram, Mail, Phone, X } from "../../assets/svg";
import { Typography } from "@material-tailwind/react";
import whatsapp from "../../assets/svg/logos_whatsapp-icon.svg";

const TeamHero = () => {
  return (
    <main className="bg-[#EFFBFA] py-10">
      <div className="max-w-7xl m-auto">
        <header>
          <Typography className="text-5xl text-center font-extrabold playfair">
            Get in Touch with{" "}
            <span className="italic text-[#48D1CC]">Talley</span>{" "}
          </Typography>
          <Typography className="max-w-lg font-medium text-center mt-11 mx-auto text-[#626A6A]">
            we're here to help! whether you have questions about our
            accomodation, support services, volunteering, or career
            opportunities, our team is ready to assist you.
          </Typography>
        </header>
      </div>

      <section className="max-w-6xl flex flex-col gap-12 mx-auto">
        <div className="flex flex-col gap-3">
          <Typography className="font-extrabold text-xl">Call Us</Typography>
          <Typography className="text-[#626A6A] font-medium">
            Call our team Mon-Fri from 8am 5am
          </Typography>
          <div className="flex gap-2">
            <Phone />
            <Typography className="text-[#626A6A] font-medium">
              +44 777 7506569
            </Typography>
          </div>
          <div className="flex gap-2">
            <Mail />
            <Typography className="text-[#626A6A] font-medium">
              talleycares@gmail.com
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Typography className="font-extrabold text-xl">
            Chat with us
          </Typography>
          <Typography className="text-[#626A6A] font-medium">
            Speak to our team
          </Typography>
          <div className="flex gap-2">
            <img src={whatsapp} alt="whatsapp" />
            <Typography className="text-[#626A6A] font-medium">
              +44 777 7506569
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Typography className="font-extrabold text-xl">Visit us</Typography>
          <Typography className="text-[#626A6A] font-medium">
            Address here, UK
          </Typography>
          <div className="flex gap-2">
            <img src={whatsapp} alt="whatsapp" />
            <Typography className="text-[#626A6A] font-medium">
              +44 777 7506569
            </Typography>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Typography className="font-extrabold text-xl">
            Stay Connected
          </Typography>
          <Typography className="text-[#626A6A] font-medium">
            Follow us on social media for updates,
          </Typography>
          <div className="flex items-center gap-2">
            <div>
              <Facebook />
            </div>
            <div>
              <X />
            </div>
            <div>
              <Instaram />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamHero;
