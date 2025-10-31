import CenterVertically from "../../../components/CenterVertically/CenterVertically";
import Image from "../../../components/Image/Image";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";
import { Grid, Hidden } from "@mui/material";
import LifeAsAMakerContainer from "./components/LifeAsAMakerContainer";
import LifeAsAMakerGridContainer from "./components/LifeAsAMakerGridContainer";
import TlcGridContainer from "./components/TlcGridContainer";
import GwBasicGridContainer from "./components/GwBasicGridContainer";
import ModelRailroaderMagazineGridContainer from "./components/ModelRailroaderMagazineGridContainer";
import SouthernPacificDaylightGridContainer from "./components/SouthernPacificDaylightGridContainer";
import LifeAsAMakerImgWrapper from "./components/LifeAsAMakerImgWrapper";
import TlcImgWrapper from "./components/TlcImgWrapper";
import GwBasicImgWrapper from "./components/GwBasicImgWrapper";
import ModelRailroaderMagazineImgWrapper from "./components/ModelRailroaderMagazineImgWrapper";
import SouthernPacificDaylightImgWrapper from "./components/SouthernPacificDaylightImgWrapper";
import Body from "./components/Body";
import BodyNext from "./components/BodyNext";
import H3 from "./components/H3";

export default function LifeAsAMaker() {
  return (
    <LifeAsAMakerContainer>
      {/* Life as a maker*/}
      <MyGridContainer>
        <Grid item md={6} xs={false} />
        <Grid item md={6} xs={12}>
          <h2 className="font-normal text-[54px] leading-[88px] tracking-[0.5px]">
            Life as a Maker
          </h2>
        </Grid>
      </MyGridContainer>

      <LifeAsAMakerGridContainer>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              <LifeAsAMakerImgWrapper>
                <Image
                  alt="Apple Macintosh"
                  src="/images/about/life-as-a-maker/apple-macintosh.png"
                />
              </LifeAsAMakerImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        <Grid item md={6} xs={12}>
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
        </Grid>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image
              alt="Apple Macintosh"
              src="/images/about/life-as-a-maker/apple-macintosh.png"
            />
          </Grid>
        </Hidden>
      </LifeAsAMakerGridContainer>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* Hello, World! */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          <H3>Hello, World!</H3>
        </Grid>
        <Grid item md={6} />
      </MyGridContainer>

      <TlcGridContainer>
        <Grid item md={6} xs={12}>
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
        </Grid>

        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              <TlcImgWrapper>
                <Image
                  alt="The Learning Company - Super Solvers: Out Numbered!"
                  src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"
                />
              </TlcImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image
              alt="The Learning Company - Super Solvers: Out Numbered!"
              src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"
            />
          </Grid>
        </Hidden>
      </TlcGridContainer>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* GW Basic */}
      <GwBasicGridContainer>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              <GwBasicImgWrapper>
                <Image
                  alt="GW Basic"
                  src="/images/about/life-as-a-maker/gw-basic.png"
                />
              </GwBasicImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile*/}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image
              alt="GW Basic"
              src="/images/about/life-as-a-maker/gw-basic.png"
            />
          </Grid>
        </Hidden>

        <Grid item md={6} xs={12}>
          <Body>
            I started coding sheet music into the computer and playing it back.
            My mom was very confused as to why I kept playing{" "}
            <em>When The Saint&rsquo;s Go Marching In</em>, and other Christmas
            tunes in the middle of August, but it was the only sheet music
            I&nbsp;had.
          </Body>
          <BodyNext>
            Months later I eventually tracked down the actual program that I was
            looking for, but by this point, I was too hooked on this programming
            thing to care anymore.{" "}
            <strong>
              Writing software allowed me to make things and do things that
              someone hadn&rsquo;t done&nbsp;before.
            </strong>
          </BodyNext>
        </Grid>
      </GwBasicGridContainer>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* Model Railroader Magazine */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          <H3>Model trains, Arduino</H3>
        </Grid>

        <Hidden smDown>
          <Grid item md={6} />
        </Hidden>
      </MyGridContainer>

      <ModelRailroaderMagazineGridContainer>
        <Grid item md={6} xs={12}>
          <Body>
            It was around this time that I also started getting into model
            trains. <em>Model Railroader Magazine</em> would often include
            snippets of BASIC code that allowed you to control the COM port on
            your computer; or simulate waybills for imaginary companies that
            your trains had to make deliveries for. It was these snippets that
            would introduce me to new programming&nbsp;concepts.
          </Body>
          <BodyNext>
            As I grew older, making things and solving problems through code
            became the norm for me. And in an unexpected twist, model trains
            actually taught me a lot about logistical efficiencies. After all, a
            model railroad&rsquo;s &ldquo;layout&rdquo; (the organization of
            track), is essentially just a flowchart diagram built in the
            physical&nbsp;world.
          </BodyNext>
          <BodyNext>
            While I don&rsquo;t play with trains anymore, I rediscovered the fun
            of electronics through an Arduino, so stay tuned to see what I make
            with&nbsp;that.
          </BodyNext>
        </Grid>

        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              <ModelRailroaderMagazineImgWrapper>
                <Image
                  alt="Model Railroader Magazine"
                  src="/images/about/life-as-a-maker/model-railroader-magazine.png"
                />
              </ModelRailroaderMagazineImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image
              alt="Model Railroader Magazine"
              src="/images/about/life-as-a-maker/model-railroader-magazine.png"
            />
          </Grid>
        </Hidden>
      </ModelRailroaderMagazineGridContainer>

      {/* ---------------------------------------------------------------------------------------------------- */}

      <SouthernPacificDaylightGridContainer>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={3} />
          <Grid item md={9} xs={12}>
            <SouthernPacificDaylightImgWrapper>
              <Image
                alt="Southern Pacific Daylight"
                src="/images/about/life-as-a-maker/southern-pacific-daylight.png"
              />
            </SouthernPacificDaylightImgWrapper>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image
              alt="Southern Pacific Daylight"
              src="/images/about/life-as-a-maker/southern-pacific-daylight.png"
            />
          </Grid>
        </Hidden>
      </SouthernPacificDaylightGridContainer>
    </LifeAsAMakerContainer>
  );
}
