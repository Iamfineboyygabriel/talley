import { useParams } from "react-router-dom";
import LifeDevTools from "./lifeDevTools";
import JoinTalley from "../components/constants/joinTalley";

const Services = () => {
  const { serviceType } = useParams();

  const renderServiceContent = () => {
    switch (serviceType) {
      case "life-development-skills":
        return <LifeDevTools />;
    }
  };

  return (
    <main>
      {renderServiceContent()}
      <JoinTalley />
    </main>
  );
};

export default Services;
