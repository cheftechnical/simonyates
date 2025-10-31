import Image from "../../../../components/Image/Image";
import MyGridContainer from "../../../../styling/MyGridContainer/MyGridContainer";
import { Grid, Hidden } from "@mui/material";
import SouthernPacificDaylightImgWrapper from "./SouthernPacificDaylightImgWrapper";

export default function SouthernPacificDaylightContent() {
  return (
    <MyGridContainer className="pb-[109px] sm:pb-[258px]">
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
    </MyGridContainer>
  );
}

