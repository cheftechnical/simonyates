import Image from "../../../../components/Image/Image";

export default function ComputerCityContent() {
  return (
    <div className="flex flex-wrap pt-[6.3496rem]">
      {/* Show for desktop */}
      <div className="hidden md:block md:w-1/2">
        <div className="h-full flex items-center">
          <div className="pr-[131px]">
            <Image
              alt="Computer City store"
              src="/images/about/life-as-a-maker/computer-city.png"
            />
          </div>
        </div>
      </div>

      {/* Show for mobile*/}
      <div className="md:hidden w-full mb-6">
        <Image
          alt="Computer City store"
          src="/images/about/life-as-a-maker/computer-city.png"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h3 className="font-medium text-xl leading-8">Computer City (1997)</h3>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          When I was 16, I worked evenings at a Computer City retail store. After closing, one person would spend nearly two hours rebuilding printed product specification sheets for the computers, monitors, and printers on display.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          The process was universally disliked. Specs were often retyped from scratch, layouts varied by printer and display location, and alignment was manual. Errors were common. Time was wasted.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          I built a small internal system that stored product specifications in a database and paired them with scanned examples of the store&rsquo;s approved print templates. Staff could look up a product by SKU, select the appropriate template, and print a correctly aligned spec sheet immediately.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          The task dropped from roughly two hours to about twenty minutes.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          After that system proved reliable, I extended it to the store&rsquo;s demo machines. I built a screensaver that displayed the exact specifications of the computer being viewed, alternating with brand-approved slides and store messaging. The screens synchronized across the floor, switching in unison on a timed interval.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          This was my first experience building software that people depended on — and my first exposure to real-world constraints: branding rules, consistency requirements, and the responsibility that comes with being trusted to automate someone else&rsquo;s work.
        </p>
        <p className="font-normal text-base leading-relaxed text-justify mt-6">
          I&rsquo;m still in touch with the manager who trusted me with that system.
        </p>
      </div>
    </div>
  );
}
