import ComputerCityContent from "./components/ComputerCityContent";
import GwBasicContent from "./components/GwBasicContent";
import LifeAsAMakerContainer from "./components/LifeAsAMakerContainer";
import LifeAsAMakerContent from "./components/LifeAsAMakerContent";
import HelloWorldContent from "./components/HelloWorldContent";
import ModelRailroaderMagazineContent from "./components/ModelRailroaderMagazineContent";
import SouthernPacificDaylightContent from "./components/SouthernPacificDaylightContent";

export default function LifeAsAMaker() {
  return (
    <LifeAsAMakerContainer>
      <LifeAsAMakerContent />

      <HelloWorldContent />

      <GwBasicContent />

      <ModelRailroaderMagazineContent />

      <SouthernPacificDaylightContent />

      <ComputerCityContent />
    </LifeAsAMakerContainer>
  );
}
