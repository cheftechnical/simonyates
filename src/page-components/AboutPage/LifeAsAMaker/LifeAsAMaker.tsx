import ComputerCityContent from "./components/ComputerCityContent";
import Container from "../../../components/Container/Container";
import GwBasicContent from "./components/GwBasicContent";
import MacintoshContent from "./components/MacintoshContent";
import HelloWorldContent from "./components/HelloWorldContent";
import ModelRailroaderMagazineContent from "./components/ModelRailroaderMagazineContent";
import SouthernPacificDaylightContent from "./components/SouthernPacificDaylightContent";

export default function LifeAsAMaker() {
  return (
    <Container>
      <MacintoshContent />

      <HelloWorldContent />

      <GwBasicContent />

      <ModelRailroaderMagazineContent />

      <SouthernPacificDaylightContent />

      <ComputerCityContent />
    </Container>
  );
}
