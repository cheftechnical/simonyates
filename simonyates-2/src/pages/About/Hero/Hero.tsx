import Image from '../../../components/Image/Image';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
import Typography from '../../../styling/Typography/Typography';
import {Box, Grid, styled} from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   box: {
//     height: '100%'
//   },
//   rootDesktop: {
//     paddingBottom: theme.spacing(80 / 8),
//   },
//   rootMobile: {
//     paddingBottom: theme.spacing(26 / 8),
//   },
//   typographyDesktop: {
//     paddingBottom: theme.spacing(72 / 8)
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

const StyledTypography = styled(Typography)(({theme}) => ({
  // mobile
  // [theme.breakpoints.down('sm')]: {
  //
  // },
  // // desktop
  // [theme.breakpoints.up('sm')]: {
  //   paddingBottom: theme.spacing(72 / 8),
  // },

  color: 'magenta !important',
  fontSize: '200px'
}));

export default function Hero() {
  // const theme = useTheme();
  // const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  // const classes = useStyles();

  // const rootClassName = (matchesSm)
  //   ? classes.rootMobile
  //   : classes.rootDesktop;

  // const typographyClassName = (matchesSm)
  //   ? classes.typographyMobile
  //   : classes.typographyDesktop;

  // return (
  //   <StyledDivMyContainer>
  //     <MyGridContainer>
  //       <Grid item md={7} xs={12}>
  //         <StyledBox alignItems="flex-end" display="flex">
  //           <Box>
  //             <StyledTypography component="h1" group="primary" variant="h3" weight="regular">
  //               Simon Yates, <br/>
  //               <strong>Programmer</strong> from Toronto
  //             </StyledTypography>
  //           </Box>
  //         </StyledBox>
  //       </Grid>
  //       <Grid item md={5} xs={12}>
  //         <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
  //       </Grid>
  //     </MyGridContainer>
  //   </StyledDivMyContainer>
  // );

  return (
    <div>[hi]</div>
  )
};
