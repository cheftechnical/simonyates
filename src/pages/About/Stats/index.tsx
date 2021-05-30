import * as React from 'react';
import {Grid, Hidden} from '@material-ui/core';
import StatsItem from './StatsItem';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';
import MyContainer from '../../../styling/MyContainer';
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(60 / 8),
    paddingBottom: theme.spacing(36 / 8),
    backgroundColor: color.grey['50']
  },
}));

interface Stat {
  caption: string;
  value: number;
}

const stat: Stat[] = [
  {
    caption: 'years programming',
    value: 25,
  },
  {
    caption: 'when I started programming',
    value: 10,
  },
  {
    caption: 'software projects completed',
    value: 200,
  },
  {
    caption: 'figma plugin',
    value: 1,
  }
];

export default function Stats() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Desktop */}
      <Hidden smDown>
        <MyContainer>
          <Grid container spacing={10}>
            <Grid item xs={3}>
              <StatsItem {...stat[0]}/>
            </Grid>
            <Grid item xs={3}>
              <StatsItem {...stat[1]}/>
            </Grid>
            <Grid item xs={3}>
              <StatsItem {...stat[2]}/>
            </Grid>
            <Grid item xs={3}>
              <StatsItem {...stat[3]}/>
            </Grid>
          </Grid>
        </MyContainer>
      </Hidden>

      {/*	Mobile */}
      <Hidden mdUp>
        <Carousel animation="slide" autoPlay={false}>
          <div>
            <StatsItem {...stat[0]}/>
          </div>
          <div>
            <StatsItem {...stat[1]}/>
          </div>
          <div>
            <StatsItem {...stat[2]}/>
          </div>
          <div>
            <StatsItem {...stat[3]}/>
          </div>
        </Carousel>
      </Hidden>
    </div>
  );
};
