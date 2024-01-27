import Image from '../../../components/Image/Image';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
import {Box, Grid, styled, Typography} from "@mui/material";

const StyledBox = styled(Box)(({theme}) => ({
  height: '100%'
}));

const StyledDivMyContainer = styled(MyContainer)(({theme}) => ({
  // mobile
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(26 / 8),
  },
  // desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(80 / 8),
  },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
  // mobile
  [theme.breakpoints.down('sm')]: {
    // nothing special
  },
  // desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(72 / 8),
  },
})) as typeof Typography;

export default function Hero() {
  return (
    <StyledDivMyContainer>
      <MyGridContainer>
        <Grid item md={7} xs={12}>
          <StyledBox alignItems="flex-end" display="flex">
            <Box>
              <StyledTypography component="h1" variant="primaryH3">
                Simon Yates, <br/>
                <strong>Programmer</strong> from Toronto
              </StyledTypography>
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
