import CenterVertically from "../../../../components/CenterVertically/CenterVertically";
import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import { Grid, Hidden } from "@mui/material";
import H3 from "./H3";
import Body from "./Body";
import BodyNext from "./BodyNext";
import TlcImgWrapper from "./TlcImgWrapper";

export default function TlcContent() {
  return (
    <>
      {/* Hello, World! */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          <H3>Hello, World!</H3>
        </Grid>
        <Grid item md={6} />
      </MyGridContainer>

      <MyGridContainer className="pb-[64px]">
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
      </MyGridContainer>
    </>
  );
}

