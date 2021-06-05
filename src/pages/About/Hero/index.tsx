import * as React from 'react';
import {Box, Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../../styling/Typography';
import Image from '../../../components/Image';
import MyContainer from '../../../styling/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer';

const useStyles = makeStyles((theme) => ({
  rootDesktop: {
    paddingBottom: theme.spacing(80 / 8),
  },
  rootMobile: {
    paddingBottom: theme.spacing(26 / 8),
  },
  typographyDesktop: {
    paddingBottom: theme.spacing(72 / 8)
  },
  typographyMobile: {}
}));

export default function Hero() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

  const classes = useStyles();

  const rootClassName = (matchesSm)
    ? classes.rootMobile
    : classes.rootDesktop;

  const typographyClassName = (matchesSm)
    ? classes.typographyMobile
    : classes.typographyDesktop;

  return (
    <MyContainer className={rootClassName}>
      <MyGridContainer>
        <Grid item md={7} xs={12}>
          <Box display="flex" alignItems="flex-end" css={{height: '100%'}}>
            <Box>
              <Typography className={typographyClassName} component="h1" group="primary" variant="h3" weight="regular">
                Simon Yates, <br/>
                <strong>Programmer</strong> from Toronto
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>
          <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
        </Grid>
      </MyGridContainer>
    </MyContainer>
  );
};
