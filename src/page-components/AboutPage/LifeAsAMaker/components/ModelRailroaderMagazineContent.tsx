import Image from "../../../../components/Image/Image";

export default function ModelRailroaderMagazineContent() {
  return (
    <>
      {/* Model Railroader Magazine */}
      <div className="flex flex-wrap pt-[6.3496rem]">
        <div className="w-full md:w-1/2">
          <h3 className="font-medium text-xl leading-normal">Model trains</h3>
        </div>

        <div className="hidden md:block md:w-1/2" />
      </div>

      <div className="flex flex-wrap pb-0">
        <div className="w-full md:w-1/2">
          <p className="font-normal text-base leading-relaxed text-justify mt-6">
            It was around this time that I also started getting into model trains. <em>Model Railroader Magazine</em> would often include snippets of BASIC code that allowed you to control the COM port on your computer, or simulate waybills for imaginary companies that your trains had to make deliveries for. These snippets introduced me to new programming concepts through practical&nbsp;constraints.
          </p>
          <p className="font-normal text-base leading-relaxed text-justify mt-6">
            As I grew older, making things and solving problems through code became the norm for me. In an unexpected twist, model trains also taught me a great deal about logistical efficiency. A model railroad&rsquo;s &ldquo;layout&rdquo; — the organization of track — is essentially a flowchart built in the physical&nbsp;world.
          </p>
        </div>

        {/* Show for desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full flex items-center">
            <div className="pl-[135px] pr-[88px]">
              <Image
                alt="A copy of Model Railroader Magazine from 1992, featuring a picture of two steam locomotives passing through a tunnel.Model Railroader Magazine"
                src="/images/about/life-as-a-maker/model-railroader-magazine.png"
              />
            </div>
          </div>
        </div>

        {/* Show for mobile */}
        <div className="md:hidden w-full mt-[22px]">
          <Image
            alt="A copy of Model Railroader Magazine from 1992, featuring a picture of two steam locomotives passing through a tunnel."
            src="/images/about/life-as-a-maker/model-railroader-magazine.png"
          />
        </div>
      </div>
    </>
  );
}

