import Image from "../../../../components/Image/Image";

export default function GwBasicContent() {
  return (
    <div className="flex flex-wrap pt-[4.0rem]">
      {/* Show for desktop */}
      <div className="hidden md:flex md:w-1/2 items-center">
        <div className="pr-[131px]">
          <Image
            alt="A screenshot of the GW Basic editor from DOS 4.01"
            src="/images/about/life-as-a-maker/gw-basic.png"
          />
        </div>
      </div>

      {/* Show for mobile*/}
      <div className="md:hidden w-full mb-[22px]">
        <Image
          alt="A screenshot of the GW Basic editor from DOS 4.01"
          src="/images/about/life-as-a-maker/gw-basic.png"
        />
      </div>

      <div className="w-full md:w-1/2 md:flex md:items-center">
        <div>
          <p className="font-normal text-base leading-relaxed text-justify">
            I started coding sheet music into the computer and playing it back.
            My mom was very confused as to why I kept playing{" "}
            <em>When The Saint&rsquo;s Go Marching In</em>, and other Christmas
            tunes in the middle of August, but it was the only sheet music
            I&nbsp;had.
          </p>
          <p className="font-normal text-base leading-relaxed text-justify mt-6">
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
    </div>
  );
}

