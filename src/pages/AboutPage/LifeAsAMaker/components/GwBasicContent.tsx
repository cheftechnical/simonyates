import CenterVertically from "../../../../components/CenterVertically/CenterVertically";
import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import { Grid, Hidden } from "@mui/material";
import GwBasicImgWrapper from "./GwBasicImgWrapper";
import Body from "./Body";
import BodyNext from "./BodyNext";

export default function GwBasicContent() {
  return (
    <MyGridContainer className="pb-[56px] sm:pb-[152px]">
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
    </MyGridContainer>
  );
}

