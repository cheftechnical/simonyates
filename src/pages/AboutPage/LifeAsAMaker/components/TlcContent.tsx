import Image from "../../../../components/Image/Image";
import H3 from "./H3";
import Body from "./Body";
import BodyNext from "./BodyNext";
import TlcImgWrapper from "./TlcImgWrapper";

export default function TlcContent() {
  return (
    <>
      {/* Hello, World! */}
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <H3>Hello, World!</H3>
        </div>
        <div className="hidden md:block md:w-1/2" />
      </div>

      <div className="flex flex-wrap pb-[64px]">
        <div className="w-full md:w-1/2">
          <Body>
            While TLC&rsquo;s Super Solvers:{" "}
            <em>Out Numbered! and Challenge of the Ancient Empires!</em> may
            have kept me busy during summer break, it was this synthesized
            musical keyboard game that came bundled with the SoundBlaster that I
            really wanted to play&nbsp;with.
          </Body>
          <BodyNext>
            Determined to play music with the computer, I started digging
            through different files and stacks of owners manuals that were the
            size of tax law books to try and find any mention of this&nbsp;game.
          </BodyNext>
          <BodyNext>
            A few days later, I stumbled onto this program called GW BASIC. It
            didn&rsquo;t turn my computer keyboard into a MIDI keyboard, but
            with a few lines of code, I could have the computer produce a sound
            at a specific frequency for a given duration. It wasn&rsquo;t
            exactly what I wanted, but it was fascinating&nbsp;stuff!
          </BodyNext>
        </div>

        {/* Show for desktop */}
        <div className="hidden md:block md:w-1/2">
          <div className="h-full flex items-center">
            <TlcImgWrapper>
              <Image
                alt="A box of Super Solvers: Out Numbered by The Learning Company, an educational game from the early 90s and some sheet music for &quot;When the Saints Go Marching In&quot;."
                src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"
              />
            </TlcImgWrapper>
          </div>
        </div>

        {/* Show for mobile */}
        <div className="md:hidden w-full">
          <Image
            alt="A box of Super Solvers: Out Numbered by The Learning Company, an educational game from the early 90s and some sheet music for &quot;When the Saints Go Marching In&quot;."
            src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"
          />
        </div>
      </div>
    </>
  );
}

