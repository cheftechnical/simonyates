import LifeAsAMakerContainer from "./components/LifeAsAMakerContainer";
import LifeAsAMakerContent from "./components/LifeAsAMakerContent";
import TlcContent from "./components/TlcContent";
import GwBasicContent from "./components/GwBasicContent";
import ModelRailroaderMagazineContent from "./components/ModelRailroaderMagazineContent";
import SouthernPacificDaylightContent from "./components/SouthernPacificDaylightContent";

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
    </LifeAsAMakerContainer>
  );
}
