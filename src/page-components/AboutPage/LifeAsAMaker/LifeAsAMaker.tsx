import ComputerCityContent from "./components/ComputerCityContent";
import GwBasicContent from "./components/GwBasicContent";
import LifeAsAMakerContainer from "./components/LifeAsAMakerContainer";
import LifeAsAMakerContent from "./components/LifeAsAMakerContent";
import ModelRailroaderMagazineContent from "./components/ModelRailroaderMagazineContent";
import SouthernPacificDaylightContent from "./components/SouthernPacificDaylightContent";
import TlcContent from "./components/TlcContent";

export default function LifeAsAMaker() {
  return (
    <LifeAsAMakerContainer>
      <LifeAsAMakerContent />

      {/* ---------------------------------------------------------------------------------------------------- */}

      <TlcContent />

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* GW Basic */}
      <GwBasicContent />

      {/* ---------------------------------------------------------------------------------------------------- */}

      <ModelRailroaderMagazineContent />

      {/* ---------------------------------------------------------------------------------------------------- */}

      <SouthernPacificDaylightContent />

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* Computer City */}
      <ComputerCityContent />
    </LifeAsAMakerContainer>
  );
}
