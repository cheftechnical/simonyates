import Image from "../../../../components/Image/Image";
import LifeAsAMakerImgWrapper from "./LifeAsAMakerImgWrapper";

export default function LifeAsAMakerContent() {
  return (
    <>
      {/* Life as a maker*/}
      <div className="flex flex-wrap pt-[4.0rem]">
        <div className="hidden md:block md:w-1/2" />
        <div className="w-full md:w-1/2">
          <h2 className="font-normal text-2xl">
            Life as a Maker
          </h2>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* Show for desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full flex items-center">
            <LifeAsAMakerImgWrapper>
              <Image
                alt="A collage of Apple nostalgia, including an original Apple Macintosh from 1984 and a screenshot of the running girl from their famous 1984 television commercial."
                src="/images/about/life-as-a-maker/apple-macintosh.png"
              />
            </LifeAsAMakerImgWrapper>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <p className="font-normal text-base leading-normal text-justify pt-6">
            I was 3 when I first used a computer. The year was 1984 and my dad
            was doing some interior design work for the Canadian headquarters of
            a computer company out of Silicon Valley. As a courtesy, they let
            him borrow their newly launched flagship product for a few weeks. It
            was an Apple&nbsp;Macintosh.
          </p>
          <p className="font-normal text-base leading-normal text-justify pt-6">
            I vividly remember sitting on my dad&rsquo;s lap and playing with
            MacPaint, but can&rsquo;t recall what exactly I drew, it was
            probably a house&nbsp;&ndash;&nbsp;either way, I was&nbsp;hooked!
          </p>
          <p className="font-normal text-base leading-normal text-justify pt-6">
            For the next few years of my childhood, I had dreams of my dad
            bringing one home, until one day, he&nbsp;did.
          </p>
          <p className="font-normal text-base leading-normal text-justify pt-6">
            It was an 80386SX with a 40 MB HDD, and (I think) 4 MB of RAM.
            Pre-installed with DOS 4.01, it came equipped with a SoundBlaster
            sound card&nbsp;&ndash;&nbsp;which was state of the art at the time, and a bunch
            of educational games from The Learning Company&nbsp;(TLC).
          </p>
        </div>

        {/* Show for mobile */}
        <div className="md:hidden w-full mt-[22px]">
          <Image
            alt="A collage of Apple nostalgia, including an original Apple Macintosh from 1984 and a screenshot of the running girl from their famous 1984 television commercial."
            src="/images/about/life-as-a-maker/apple-macintosh.png"
          />
        </div>
      </div>
    </>
  );
}

