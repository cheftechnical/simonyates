import Image from "../../../../components/Image/Image";

export default function SouthernPacificDaylightContent() {
  return (
    <div className="mt-[22px] flex flex-wrap sm:mt-0 sm:pt-[5.0396rem]">
      {/* Show for desktop */}
      <div className="hidden md:block md:w-1/4" />
      <div className="w-full md:w-3/4">
        <div className="pl-[30px]">
          <Image
            alt="An HO scale model of the Southern Pacific Daylight steam locomotive."
            src="/images/about/life-as-a-maker/southern-pacific-daylight.png"
          />
        </div>
      </div>
    </div>
  );
}

