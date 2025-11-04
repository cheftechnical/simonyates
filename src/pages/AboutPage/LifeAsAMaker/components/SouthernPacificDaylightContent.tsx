import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import SouthernPacificDaylightImgWrapper from "./SouthernPacificDaylightImgWrapper";

export default function SouthernPacificDaylightContent() {
  return (
    <MyGridContainer className="pb-[109px] sm:pb-[258px]">
      {/* Show for desktop */}
      <div className="hidden md:block md:w-1/4" />
      <div className="w-full md:w-3/4">
        <SouthernPacificDaylightImgWrapper>
          <Image
            alt="An HO scale model of the Southern Pacific Daylight steam locomotive."
            src="/images/about/life-as-a-maker/southern-pacific-daylight.png"
          />
        </SouthernPacificDaylightImgWrapper>
      </div>
    </MyGridContainer>
  );
}

