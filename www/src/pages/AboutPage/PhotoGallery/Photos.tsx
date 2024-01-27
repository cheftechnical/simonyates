import Image from '../../../components/Image/Image';
import rem from '../../../styling/rem';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
import Carousel from 'react-material-ui-carousel';
import {Grid, Hidden, styled} from "@mui/material";

// const useStyles = makeStyles(() => ({
//   root: {
//     paddingTop: rem(24)
//   },
// }));

const StyledDivRoot = styled('div')(({theme}) => ({
  paddingTop: rem(24)
}))

export default function Photos() {
  return (
    <StyledDivRoot>
      {/* Desktop */}
      <Hidden smDown>
        <MyGridContainer>
          <Grid item xs={3}>
            <Image alt="Jean'is Joplin" src="/images/about/photo-gallery/jean.png"/>
          </Grid>
          <Grid item xs={3}>
            <Image alt="Mexico" src="/images/about/photo-gallery/mexico-1.png"/>
          </Grid>
          <Grid item xs={3}>
            <Image alt="Mexico" src="/images/about/photo-gallery/mexico-2.png"/>
          </Grid>
          <Grid item xs={3}>
            <Image alt="Mexico" src="/images/about/photo-gallery/mexico-3.png"/>
          </Grid>
        </MyGridContainer>
      </Hidden>

      {/*	Mobile */}
      <Hidden mdUp>
        <Carousel animation="slide" autoPlay={false}>
          <div>
            <Image alt="My girlfriend looking like Janis Joplin" src="/images/about/photo-gallery/jean.png"/>
          </div>
          <div>
            <Image alt="A street in Mexico" src="/images/about/photo-gallery/mexico-1.png"/>
          </div>
          <div>
            <Image alt="A sunset in Mexico" src="/images/about/photo-gallery/mexico-2.png"/>
          </div>
          <div>
            <Image alt="A town square in Mexico" src="/images/about/photo-gallery/mexico-3.png"/>
          </div>
        </Carousel>
      </Hidden>
    </StyledDivRoot>
  );
};