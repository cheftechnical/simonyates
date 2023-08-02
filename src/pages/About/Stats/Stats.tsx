// import {Grid, Hidden} from '@material-ui/core';
// import {makeStyles} from '@material-ui/core/styles';
// import Carousel from 'react-material-ui-carousel';
import {color} from '../../../styling/Color/Color';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import StatsItem from './StatsItem';
import {Grid, Hidden, styled} from "@mui/material";
import Carousel from "react-material-ui-carousel";

// @todo mui5
// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     paddingTop: themeMui.spacing(60 / 8),
//     paddingBottom: themeMui.spacing(36 / 8),
//     backgroundColor: color.grey['50']
//   },
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
    paddingTop: theme.spacing(60 / 8),
    paddingBottom: theme.spacing(36 / 8),
    backgroundColor: color.grey['50']
}))

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
  return (
    <StyledDivRoot>
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
    </StyledDivRoot>
  );
};
