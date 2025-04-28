import CommunityEngagements from "../components/services/lifeDevelopmentSkills/communityEngagement";
import Emotional from "../components/services/lifeDevelopmentSkills/emotional";
import Employment from "../components/services/lifeDevelopmentSkills/employment";
import FinancialIndependence from "../components/services/lifeDevelopmentSkills/financialIndependence";
import Housing from "../components/services/lifeDevelopmentSkills/housing";
import Independent from "../components/services/lifeDevelopmentSkills/independent";

const LifeDevTools = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <div className="my-8">
        <Independent />
        <Employment />
        <Emotional />
        <FinancialIndependence />
        <Housing />
        <CommunityEngagements />
      </div>
    </main>
  );
};

export default LifeDevTools;
