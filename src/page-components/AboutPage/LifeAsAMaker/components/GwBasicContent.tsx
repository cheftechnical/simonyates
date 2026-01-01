import Image from "../../../../components/Image/Image";
import GwBasicImgWrapper from "./GwBasicImgWrapper";

export default function GwBasicContent() {
  return (
    <div className="flex flex-wrap pt-[4.0rem]">
      {/* Show for desktop */}
      <div className="hidden md:block md:w-1/2">
        <div className="h-full flex items-center">
          <GwBasicImgWrapper>
            <Image
              alt="A screenshot of the GW Basic editor from DOS 4.01"
              src="/images/about/life-as-a-maker/gw-basic.png"
            />
          </GwBasicImgWrapper>
        </div>
      </div>

      {/* Show for mobile*/}
      <div className="md:hidden w-full mb-[22px]">
        <Image
          alt="A screenshot of the GW Basic editor from DOS 4.01"
          src="/images/about/life-as-a-maker/gw-basic.png"
        />
      </div>

      <div className="w-full md:w-1/2">
        <p className="font-normal text-base leading-normal text-justify">
          I started coding sheet music into the computer and playing it back.
          My mom was very confused as to why I kept playing{" "}
          <em>When The Saint&rsquo;s Go Marching In</em>, and other Christmas
          tunes in the middle of August, but it was the only sheet music
          I&nbsp;had.
        </p>
        <p className="font-normal text-base leading-normal text-justify pt-6">
          Months later I eventually tracked down the actual program that I was
          looking for, but by this point, I was too hooked on this programming
          thing to care anymore.{" "}
          <strong>
            Writing software allowed me to make things and do things that
            someone hadn&rsquo;t done&nbsp;before.
          </strong>
        </p>
      </div>
    </div>
  );
}

