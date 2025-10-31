import Image from "../../../components/Image/Image";
import MyContainer from "../../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../../styling/MyGridContainer/MyGridContainer";
import { Grid } from "@mui/material";

export default function Hero() {
  return (
    <MyContainer className="pb-[26px] sm:pb-[80px]">
      <MyGridContainer>
        <Grid item md={7} xs={12}>
          <div className="flex items-end h-full">
            <div>
              <h1 className="font-normal text-2xl leading-8 pb-0 sm:pb-[72px]">
                Simon Yates, <br />
                <strong>Programmer</strong> from Toronto
              </h1>
            </div>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>
          <Image
            alt="Photo of Simon Yates"
            src="/images/about/hero/simon-yates.png"
          />
        </Grid>
      </MyGridContainer>
    </MyContainer>
  );
}
