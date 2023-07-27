import Image from '../../../components/Image/Image';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
// import Typography from '../../../styling/Typography/Typography';
import {Box, Grid, styled, Typography as MuiTypography} from "@mui/material";
import themeMui from "../../../styling/ThemeMui";

// const useStyles = makeStyles((themeMui) => ({
//   box: {
//     height: '100%'
//   },
//   rootDesktop: {
//     paddingBottom: themeMui.spacing(80 / 8),
//   },
//   rootMobile: {
//     paddingBottom: themeMui.spacing(26 / 8),
//   },
//   typographyDesktop: {
//     paddingBottom: themeMui.spacing(72 / 8)
//   },
//   typographyMobile: {}
// }));

const StyledBox = styled(Box)(({theme}) => ({
  height: '100%'
}));

const StyledDivMyContainer = styled(MyContainer)(({theme}) => ({
  // desktop
  paddingBottom: theme.spacing(80 / 8),

  // mobile
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(26 / 8),
  }
}));

const StyledTypography = styled(MuiTypography)(({theme}) => ({
  // mobile
  [themeMui.breakpoints.down('sm')]: {
    // nothing special
  },
  // desktop
  [themeMui.breakpoints.up('sm')]: {
    paddingBottom: themeMui.spacing(72 / 8),
  },

  // color: 'magenta !important',
  // fontSize: '200px'
}));

export default function Hero() {
  // const themeMui = useTheme();
  // const matchesSm = useMediaQuery(themeMui.breakpoints.down('sm'));

  // const classes = useStyles();

  // const rootClassName = (matchesSm)
  //   ? classes.rootMobile
  //   : classes.rootDesktop;

  // const typographyClassName = (matchesSm)
  //   ? classes.typographyMobile
  //   : classes.typographyDesktop;

  return (
    <StyledDivMyContainer>
      <MyGridContainer>
        <Grid item md={7} xs={12}>
          <StyledBox alignItems="flex-end" display="flex">
            <Box>
              {/*<StyledTypography component="h1" group="primary" variant="h3" weight="regular">*/}
              <MuiTypography component="h1" variant="h3">
                Simon Yates, <br/>
                <strong>Programmer</strong> from Toronto
              </MuiTypography>
              {/*</StyledTypography>*/}
            </Box>
          </StyledBox>
        </Grid>
        <Grid item md={5} xs={12}>
          <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
        </Grid>
      </MyGridContainer>
    </StyledDivMyContainer>
  );
};
