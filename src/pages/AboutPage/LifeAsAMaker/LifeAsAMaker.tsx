import CenterVertically from '../../../components/CenterVertically/CenterVertically';
import Image from '../../../components/Image/Image';
import rem from '../../../styling/rem';
import MyContainer from '../../../styling/MyContainer/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer/MyGridContainer';
import {Grid, Typography as MuiTypography, styled, Hidden} from '@mui/material';

const bodyLineHeight = 24;

// const useStyles = makeStyles((themeMui) => ({
//   rootDesktop: {
//     paddingTop: themeMui.spacing(120 / 8)
//   },
//   rootMobile: {
//     paddingTop: rem(80),
//   },
//   h1: {
//     lineHeight: 1,
//     paddingBottom: themeMui.spacing(28 / 8),
//   },
//   h3: {
//     paddingBottom: rem(bodyLineHeight),
//   },
//   body: {
//     textAlign: 'justify'
//   },
//   bodyNext: {
//     textAlign: 'justify',
//     paddingTop: rem(bodyLineHeight * 2)
//   },
//   imageLifeAsAMaker: {
//     paddingRight: themeMui.spacing(88 / 8),
//   },
//   imageTlc: {
//     paddingLeft: rem(88),
//   },
//   imageGwBasic: {
//     paddingRight: rem(131),
//   },
//   imageModelRailroaderMagazine: {
//     paddingLeft: rem(135),
//     paddingRight: rem(88),
//   },
//   containerLifeAsAMakerBodyDesktop: {
//     paddingBottom: rem(139),
//   },
//   containerLifeAsAMakerBodyMobile: {
//     paddingBottom: rem(80),
//   },
//   containerTlcDesktop: {
//     paddingBottom: rem(64),
//   },
//   containerTlcMobile: {
//     paddingBottom: rem(64),
//   },
//   containerGwBasicDesktop: {
//     paddingBottom: rem(152),
//   },
//   containerGwBasicMobile: {
//     paddingBottom: rem(56),
//   },
//   containerModelRailroaderMagazineDesktop: {
//     paddingBottom: rem(70),
//   },
//   containerModelRailroaderMagazineMobile: {
//     paddingBottom: rem(0),
//   },
//   containerSouthernPacificDaylightDesktop: {
//     paddingBottom: rem(258)
//   },
//   containerSouthernPacificDaylightMobile: {
//     paddingBottom: rem(109),
//   },
//   southernPacificDaylightImage: {
//     paddingLeft: rem(30),
//   }
// }));

const StyledDivLifeAsAMakerImgWrapper = styled('div')(({theme}) => ({
  paddingRight: theme.spacing(88 / 8),
}));

const StyledDivTlcImgWrapper = styled('div')(() => ({
  paddingLeft: rem(88),
}));

const StyledDivGwBasicImgWrapper = styled('div')(() => ({
  paddingRight: rem(131),
}));

const StyledDivSouthernPacificDaylightImgWrapper = styled('div')(() => ({
  paddingLeft: rem(30),
}))

const StyledDivModelRailroaderMagazineImgWrapper = styled('div')(() => ({
  paddingLeft: rem(135),
  paddingRight: rem(88),
}))

const StyledMyContainer = styled(MyContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingTop: rem(80),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(120 / 8)
  },
}));

const StyledMyGridContainerLifeAsAMaker = styled(MyGridContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingBottom: rem(139),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: rem(139),
  }
}));

const StyledMyGridContainerTlc = styled(MyGridContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingBottom: rem(64),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: rem(64),
  }
}));

const StyledMyGridContainerGwBasic = styled(MyGridContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingBottom: rem(56),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: rem(152),
  }
}))

const StyledMyGridContainerModelRailroaderMagazine = styled(MyGridContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingBottom: rem(0),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: rem(70),
  }
}));

const StyledMyGridContainerSouthernPacificDaylight = styled(MyGridContainer)(({theme}) => ({
  // For mobile
  [theme.breakpoints.down('xs')]: {
    paddingBottom: rem(109),
  },

  // For desktop
  [theme.breakpoints.up('sm')]: {
    paddingBottom: rem(258)
  }
}))

const StyledTypographyBody = styled(MuiTypography)(() => ({
  textAlign: 'justify'
}));

const StyledTypographyBodyNext = styled(StyledTypographyBody)(() => ({
  paddingTop: rem(bodyLineHeight * 2)
}));

const StyledTypographyH3 = styled(MuiTypography)(() => ({
  paddingBottom: rem(bodyLineHeight),
}));

export default function LifeAsAMaker() {
  // const classes = useStyles();
  // const themeMui = useTheme();
  // const matchesSm = useMediaQuery(themeMui.breakpoints.down('sm'));

  // const rootClassName = (matchesSm)
  //   ? classes.rootMobile
  //   : classes.rootDesktop;

  // const containerLifeAsAMakerBodyClassName = (matchesSm)
  //   ? classes.containerLifeAsAMakerBodyMobile
  //   : classes.containerLifeAsAMakerBodyDesktop;

  // const containerTlcClassname = (matchesSm)
  //   ? classes.containerTlcMobile
  //   : classes.containerTlcDesktop;

  // const containerGwBasicClassName = (matchesSm)
  //   ? classes.containerGwBasicMobile
  //   : classes.containerGwBasicDesktop;

  // const containerModelRailroaderMagazine = (matchesSm)
  //   ? classes.containerModelRailroaderMagazineMobile
  //   : classes.containerModelRailroaderMagazineDesktop;

  // const containerSouthernPacificDaylight = (matchesSm)
  //   ? classes.containerSouthernPacificDaylightMobile
  //   : classes.containerSouthernPacificDaylightDesktop;

  return (
    <StyledMyContainer>
      {/* Life as a maker*/}
      <MyGridContainer>
        <Grid item md={6} xs={false}/>
        <Grid item md={6} xs={12}>
          {/*//         <Typography className={classes.h1} component="h2" group="primary" variant="h1" weight="regular">*/}
          <MuiTypography component="h2" variant="primaryH1">
            Life as a Maker
          </MuiTypography>
        </Grid>
      </MyGridContainer>

      <StyledMyGridContainerLifeAsAMaker>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              {/*<div className={classes.imageLifeAsAMaker}>*/}
              <StyledDivLifeAsAMakerImgWrapper>
                <Image alt="Apple Macintosh" src="/images/about/life-as-a-maker/apple-macintosh.png"/>
              </StyledDivLifeAsAMakerImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.body} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBody variant="primaryBody">
            I was 3 when I first used a computer. The year was 1984 and my dad was doing some interior
            design work for the Canadian headquarters of a computer company out of Silicon Valley. As a
            courtesy, they let him borrow their newly launched flagship product for a few weeks. It was an
            Apple&nbsp;Macintosh.
          </StyledTypographyBody>
          {/*<Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBodyNext variant="primaryBody">
            I vividly remember sitting on my dad&rsquo;s lap and playing with MacPaint, but can&rsquo;t
            recall what exactly I drew, it was probably a house&mdash;either way, I was&nbsp;hooked!
          </StyledTypographyBodyNext>
          <StyledTypographyBodyNext variant="primaryBody">
            For the next few years of my childhood, I had dreams of my dad bringing one home, until one day,
            he&nbsp;did.
          </StyledTypographyBodyNext>
          <StyledTypographyBodyNext variant="primaryBody">
            It was an 80386SX with a 40 MB HDD, and (I think) 4 MB of RAM. Pre-installed with DOS 4.01, it
            came equipped with a SoundBlaster sound card&mdash;which was state of the art at the time, and a bunch
            of educational games from The Learning Company&nbsp;(TLC).
          </StyledTypographyBodyNext>
        </Grid>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image alt="Apple Macintosh" src="/images/about/life-as-a-maker/apple-macintosh.png"/>
          </Grid>
        </Hidden>
      </StyledMyGridContainerLifeAsAMaker>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* Hello, World! */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.h3} group="primary" variant="h3" weight="medium">*/}
          <StyledTypographyH3 variant="primaryH3Medium">
            Hello, World!
          </StyledTypographyH3>
        </Grid>
        <Grid item md={6}/>
      </MyGridContainer>

      <StyledMyGridContainerTlc>
        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.body} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBody variant="primaryBody">
            While TLC&rsquo;s Super Solvers: <em>Out Numbered! and Challenge of the Ancient Empires!</em> may have
            kept me busy during summer break, it was this synthesized musical keyboard game that came
            bundled with the SoundBlaster that I really wanted to play&nbsp;with.
          </StyledTypographyBody>
          {/*<Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBodyNext variant="primaryBody">
            Determined to play music with the computer, I started digging through different files and stacks
            of owners manuals that were the size of tax law books to try and find any mention of this&nbsp;game.
          </StyledTypographyBodyNext>
          <StyledTypographyBodyNext>
            A few days later, I stumbled onto this program called GW BASIC. It didn&rsquo;t turn my computer
            keyboard into a MIDI keyboard, but with a few lines of code, I could have the computer produce a
            sound at a specific frequency for a given duration. It wasn&rsquo;t exactly what I wanted, but
            it was fascinating&nbsp;stuff!
          </StyledTypographyBodyNext>
        </Grid>

        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              {/*<div className={classes.imageTlc}>*/}
              <StyledDivTlcImgWrapper>
                <Image alt="The Learning Company - Super Solvers: Out Numbered!"
                       src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"/>
              </StyledDivTlcImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image alt="The Learning Company - Super Solvers: Out Numbered!"
                   src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"/>
          </Grid>
        </Hidden>
      </StyledMyGridContainerTlc>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* GW Basic */}
      <StyledMyGridContainerGwBasic>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              {/*<div className={classes.imageGwBasic}>*/}
              <StyledDivGwBasicImgWrapper>
                <Image alt="GW Basic" src="/images/about/life-as-a-maker/gw-basic.png"/>
              </StyledDivGwBasicImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile*/}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image alt="GW Basic" src="/images/about/life-as-a-maker/gw-basic.png"/>
          </Grid>
        </Hidden>

        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.body} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBody variant="primaryBody">
            I started coding sheet music into the computer and playing it back. My mom was very confused as
            to why I kept playing <em>When The Saint&rsquo;s Go Marching In</em>, and other Christmas tunes
            in the middle of August, but it was the only sheet music I&nbsp;had.
          </StyledTypographyBody>
          {/*<Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBodyNext variant="primaryBody">
            Months later I eventually tracked down the actual program that I was looking for, but by this
            point, I was too hooked on this programming thing to care anymore. <strong>Writing software
            allowed me to make things and do things that someone hadn&rsquo;t done&nbsp;before.</strong>
          </StyledTypographyBodyNext>
        </Grid>
      </StyledMyGridContainerGwBasic>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/* Model Railroader Magazine */}
      <MyGridContainer>
        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.h3} group="primary" variant="h3" weight="medium">*/}
          <StyledTypographyBody variant="primaryH3Medium">
            Model trains, Arduino
          </StyledTypographyBody>
        </Grid>

        <Hidden smDown>
          <Grid item md={6}/>
        </Hidden>
      </MyGridContainer>

      {/*<MyGridContainer className={containerModelRailroaderMagazine}>*/}
      <StyledMyGridContainerModelRailroaderMagazine>
        <Grid item md={6} xs={12}>
          {/*<Typography className={classes.body} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBody variant="primaryBody">
            It was around this time that I also started getting into model trains. <em>Model Railroader
            Magazine</em> would often include snippets of BASIC code that allowed you to control the COM
            port on your computer; or simulate waybills for imaginary companies that your trains had to make
            deliveries for. It was these snippets that would introduce me to new programming&nbsp;concepts.
          </StyledTypographyBody>
          {/*<Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBodyNext variant="primaryBody">
            As I grew older, making things and solving problems through code became the norm for me. And in
            an unexpected twist, model trains actually taught me a lot about logistical efficiencies. After
            all, a model railroad&rsquo;s &ldquo;layout&rdquo; (the organization of track), is essentially
            just a flowchart diagram built in the physical&nbsp;world.
          </StyledTypographyBodyNext>
          {/*<Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">*/}
          <StyledTypographyBodyNext variant="primaryBody">
            While I don&rsquo;t play with trains anymore, I rediscovered the fun of electronics through an
            Arduino, so stay tuned to see what I make with&nbsp;that.
          </StyledTypographyBodyNext>
        </Grid>

        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={6}>
            <CenterVertically>
              {/*<div className={classes.imageModelRailroaderMagazine}>*/}
              <StyledDivModelRailroaderMagazineImgWrapper>
                <Image alt="Model Railroader Magazine"
                       src="/images/about/life-as-a-maker/model-railroader-magazine.png"/>
              </StyledDivModelRailroaderMagazineImgWrapper>
            </CenterVertically>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image alt="Model Railroader Magazine" src="/images/about/life-as-a-maker/model-railroader-magazine.png"/>
          </Grid>
        </Hidden>
      </StyledMyGridContainerModelRailroaderMagazine>

      {/* ---------------------------------------------------------------------------------------------------- */}

      {/*<MyGridContainer className={containerSouthernPacificDaylight}>*/}
      <StyledMyGridContainerSouthernPacificDaylight>
        {/* Show for desktop */}
        <Hidden smDown>
          <Grid item md={3}/>
          <Grid item md={9} xs={12}>
            {/*<div className={classes.southernPacificDaylightImage}>*/}
            <StyledDivSouthernPacificDaylightImgWrapper>
              <Image alt="Southern Pacific Daylight" src="/images/about/life-as-a-maker/southern-pacific-daylight.png"/>
            </StyledDivSouthernPacificDaylightImgWrapper>
          </Grid>
        </Hidden>

        {/* Show for mobile */}
        <Hidden mdUp>
          <Grid item xs={12}>
            <Image alt="Southern Pacific Daylight" src="/images/about/life-as-a-maker/southern-pacific-daylight.png"/>
          </Grid>
        </Hidden>
      </StyledMyGridContainerSouthernPacificDaylight>
    </StyledMyContainer>
  );
};
