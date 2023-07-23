// import {Box, Grid, useMediaQuery, useTheme} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
import Image from '../../../components/Image/Image';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
import Typography from '../../../styling/Typography/Typography';
import {Box, Grid} from "@mui/material";

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

  // @todo mui5
  // return (
  //   <MyContainer className={rootClassName}>
  //     <MyGridContainer>
  //       <Grid item md={7} xs={12}>
  //         <Box alignItems="flex-end" className={classes.box} display="flex">
  //           <Box>
  //             <Typography className={typographyClassName} component="h1" group="primary" variant="h3" weight="regular">
  //               Simon Yates, <br/>
  //               <strong>Programmer</strong> from Toronto
  //             </Typography>
  //           </Box>
  //         </Box>
  //       </Grid>
  //       <Grid item md={5} xs={12}>
  //         <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
  //       </Grid>
  //     </MyGridContainer>
  //   </MyContainer>
  // );

  // @todo mui5
  return(
      <div>[Hero]</div>
  )
};
