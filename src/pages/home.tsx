import JoinTalley from "../components/constants/joinTalley";
import Hero from "../components/home/hero";
import OurServices from "../components/home/ourServices";
import Testimonials from "../components/home/testimonials";
import WhyChooseTalley from "../components/home/whyChooseTalley";

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyChooseTalley />
      <OurServices />
      <Testimonials />
      <JoinTalley />
    </main>
  );
};

export default Home;
