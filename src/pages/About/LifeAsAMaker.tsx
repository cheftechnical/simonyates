import * as React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import Typography from '../../styling/Typography';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../styling/rem';
import Image from '../../components/Image';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';

const bodyLineHeight = 24;

// -12 because of the grid container gutter
const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(120/8)
    },
    h1: {
        lineHeight: 1,
        paddingBottom: theme.spacing(28 / 8),
    },
    h3: {
        paddingBottom: rem(bodyLineHeight),
    },
    body: {
        textAlign: 'justify'
    },
    bodyNext: {
        textAlign: 'justify',
        paddingTop: rem(bodyLineHeight * 2)
    },
    boxImage: {
        height: '100%'
    },
    imageLifeAsAMaker: {
        paddingRight: theme.spacing(88/8)
    },
    imageTlc: {
        paddingLeft: rem(88),
    },
    imageGwBasic: {
        paddingRight: rem(131),
    },
    imageModelRailroaderMagazine: {
        paddingLeft: rem(135),
        paddingRight: rem(88),
    },
    lifeAsAMakerBodyContainer: {
        paddingBottom: rem(139),
    },
    containerTlc: {
        paddingBottom: rem(85),
    },
    containerGwBasic: {
        paddingBottom: rem(152),
    },
    containerModelRailroaderMagazine: {
        paddingBottom: rem(70),
    },
    containerSouthernPacificDaylight: {
        paddingBottom: rem(258)
    },
    southernPacificDaylightImage: {
        paddingLeft: rem(30),
    }
}));

export default function LifeAsAMaker() {
    const classes = useStyles();

    return (
        <MyContainer className={classes.root}>
            {/* Life as a maker*/}
            <MyGridContainer>
                <Grid item xs={6}/>
                <Grid item xs={6}>
                    <Typography className={classes.h1} group="primary" variant="h1" weight="regular">
                        Life as a Maker
                    </Typography>
                </Grid>
            </MyGridContainer>

            <MyGridContainer className={classes.lifeAsAMakerBodyContainer}>
                <Grid item xs={6}>
                    <Box alignItems="center" className={classes.boxImage} display="flex">
                        <Box>
                            <div className={classes.imageLifeAsAMaker}>
                                <Image alt="Apple Macintosh" src="/images/about/life-as-a-maker/apple-macintosh.png"/>
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.body} group="primary" variant="body" weight="regular">
                        I was 3 when I first used a computer. The year was 1984 and my dad was doing some interior
                        design work for the Canadian headquarters of a computer company out of Silicon Valley. As a
                        courtesy,  they let him borrow their newly launched flagship product for a few weeks. It was an
                        Apple&nbsp;Macintosh.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        I vividly remember sitting on my dad&rsquo;s lap and playing with MacPaint, but can&rsquo;t
                        recall what exactly I drew, it was probably a house&mdash;either way, I was&nbsp;hooked!
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        For the next few years of my childhood, I had dreams of my dad bringing one home, until one day,
                        he&nbsp;did.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        It was an 80386SX with a 40 MB HDD, and (I think) 4 MB of RAM. Pre-installed with DOS 4.01, it
                        came equipped with a SoundBlaster sound card—which was state of the art at the time, and a bunch
                        of educational games from The Learning Company&nbsp;(TLC).
                    </Typography>
                </Grid>
            </MyGridContainer>

            {/* Hello, World! */}
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography className={classes.h3} group="primary" variant="h3" weight="medium">
                        Hello, World!
                    </Typography>
                </Grid>
                <Grid item xs={6}/>
            </Grid>
            <Grid container className={classes.containerTlc} spacing={3}>
                <Grid item xs={6}>
                    <Typography className={classes.body} group="primary" variant="body" weight="regular">
                        While TLC&rsquo;s Super Solvers: <em>Out Numbered! and Challenge of  the Ancient Empires!</em> may have
                        kept me busy during summer break, it was this synthesized musical keyboard game that came
                        bundled with the SoundBlaster that I really wanted to play&nbsp;with.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        Determined to play music with the computer, I started digging through different files and stacks
                        of owners manuals that were the size of tax law books to try and find any mention of this&nbsp;game.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        A few days later, I stumbled onto this program called GW BASIC. It didn&rsquo;t turn my computer
                        keyboard into a MIDI keyboard, but with a few lines of code, I could have the computer produce a
                        sound at a specific frequency for a given duration. It wasn&rsquo;t exactly what I wanted, but
                        it was fascinating&nbsp;stuff!
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box alignItems="center" className={classes.boxImage} display="flex">
                        <Box>
                            <div className={classes.imageTlc}>
                                <Image alt="The Learning Company - Super Solvers: Out Numbered!" src="/images/about/life-as-a-maker/the-learning-company-super-solvers.png"/>
                            </div>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* GW Basic */}
            <Grid container className={classes.containerGwBasic} spacing={3}>
                <Grid item xs={6}>
                    <Box alignItems="center" className={classes.boxImage} display="flex">
                        <Box>
                            <div className={classes.imageGwBasic}>
                                <Image alt="GW Basic" src="/images/about/life-as-a-maker/gw-basic.png"/>
                            </div>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Typography className={classes.body} group="primary" variant="body" weight="regular">
                        I started coding sheet music into the computer and playing it back. My mom was very confused as
                        to why I kept playing <em>When The Saint&rsquo;s Go Marching In</em>, and other Christmas tunes
                        in the middle of August, but it was the only sheet music I&nbsp;had.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        Months later I eventually tracked down the actual program that I was looking for, but by this
                        point, I was too hooked on this programming thing to care anymore. <strong>Writing software
                        allowed me to make things and do things that someone hadn&rsquo;t done&nbsp;before.</strong>
                    </Typography>
                </Grid>
            </Grid>

            {/* Model Railroader Magazine */}
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography className={classes.h3} group="primary" variant="h3" weight="medium">
                        Model trains, Arduino
                    </Typography>
                </Grid>
                <Grid item xs={6}/>
            </Grid>
            <Grid container className={classes.containerModelRailroaderMagazine} spacing={3}>
                <Grid item xs={6}>
                    <Typography className={classes.body} group="primary" variant="body" weight="regular">
                        It was around this time that I also started getting into model trains. <em>Model Railroader
                        Magazine</em> would often include snippets of BASIC code that allowed you to control the COM
                        port on your computer; or simulate waybills for imaginary companies that your trains had to make
                        deliveries for. It was these snippets that would introduce me to new programming&nbsp;concepts.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        As I grew older, making things and solving problems through code became the norm for me. And in
                        an unexpected twist, model trains actually taught me a lot about logistical efficiencies. After
                        all, a model railroad&rsquo;s &ldquo;layout&rdquo; (the organization of track), is essentially
                        just a flowchart diagram built in the physical&nbsp;world.
                    </Typography>
                    <Typography className={classes.bodyNext} group="primary" variant="body" weight="regular">
                        While I don&rsquo;t play with trains anymore, I rediscovered the fun of electronics through an
                        Arduino, so stay tuned to see what I make with&nbsp;that.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box alignItems="center" className={classes.boxImage} display="flex">
                        <Box>
                            <div className={classes.imageModelRailroaderMagazine}>
                                <Image alt="Model Railroader Magazine" src="/images/about/life-as-a-maker/model-railroader-magazine.png"/>
                            </div>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container className={classes.containerSouthernPacificDaylight} spacing={3}>
                <Grid item xs={3}/>
                <Grid item xs={9}>
                    <div className={classes.southernPacificDaylightImage}>
                        <Image alt="Southern Pacific Daylight" src="/images/about/life-as-a-maker/southern-pacific-daylight.png"/>
                    </div>
                </Grid>
            </Grid>
        </MyContainer>
    );
};
