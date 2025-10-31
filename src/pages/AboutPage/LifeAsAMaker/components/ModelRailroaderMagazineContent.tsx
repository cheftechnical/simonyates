import CenterVertically from "../../../../components/CenterVertically/CenterVertically";
import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import { Grid, Hidden } from "@mui/material";
import H3 from "./H3";
import Body from "./Body";
import BodyNext from "./BodyNext";
import ModelRailroaderMagazineImgWrapper from "./ModelRailroaderMagazineImgWrapper";

export default function ModelRailroaderMagazineContent() {
  return (
    <>
      {/* Model Railroader Magazine */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          <H3>Model trains, Arduino</H3>
        </Grid>

        <Hidden smDown>
          <Grid item md={6} />
        </Hidden>
      </MyGridContainer>

      <MyGridContainer className="pb-0 sm:pb-[70px]">
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
      </MyGridContainer>
    </>
  );
}

