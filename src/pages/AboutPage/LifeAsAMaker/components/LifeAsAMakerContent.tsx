import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import LifeAsAMakerImgWrapper from "./LifeAsAMakerImgWrapper";
import Body from "./Body";
import BodyNext from "./BodyNext";

export default function LifeAsAMakerContent() {
  return (
    <>
      {/* Life as a maker*/}
      <MyGridContainer>
        <div className="hidden md:block md:w-1/2" />
        <div className="w-full md:w-1/2">
          <h2 className="font-normal text-[54px] leading-[88px] tracking-[0.5px]">
            Life as a Maker
          </h2>
        </div>
      </MyGridContainer>

      <MyGridContainer className="pb-[139px]">
        {/* Show for desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full flex items-center">
            <LifeAsAMakerImgWrapper>
              <Image
                alt="Apple Macintosh"
                src="/images/about/life-as-a-maker/apple-macintosh.png"
              />
            </LifeAsAMakerImgWrapper>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Body>
            I was 3 when I first used a computer. The year was 1984 and my dad
            was doing some interior design work for the Canadian headquarters of
            a computer company out of Silicon Valley. As a courtesy, they let
            him borrow their newly launched flagship product for a few weeks. It
            was an Apple&nbsp;Macintosh.
          </Body>
          <BodyNext>
            I vividly remember sitting on my dad&rsquo;s lap and playing with
            MacPaint, but can&rsquo;t recall what exactly I drew, it was
            probably a house&mdash;either way, I was&nbsp;hooked!
          </BodyNext>
          <BodyNext>
            For the next few years of my childhood, I had dreams of my dad
            bringing one home, until one day, he&nbsp;did.
          </BodyNext>
          <BodyNext>
            It was an 80386SX with a 40 MB HDD, and (I think) 4 MB of RAM.
            Pre-installed with DOS 4.01, it came equipped with a SoundBlaster
            sound card&mdash;which was state of the art at the time, and a bunch
            of educational games from The Learning Company&nbsp;(TLC).
          </BodyNext>
        </div>

        {/* Show for mobile */}
        <div className="md:hidden w-full">
          <Image
            alt="Apple Macintosh"
            src="/images/about/life-as-a-maker/apple-macintosh.png"
          />
        </div>
      </MyGridContainer>
    </>
  );
}

