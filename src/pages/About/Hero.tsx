import * as React from 'react';
import {Box, Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import Image from '../../components/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(80/8),
        // backgroundColor: 'magenta'
    },
    typography: {
        paddingBottom: theme.spacing(72/8)
    }
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container spacing={6}>
                <Grid item xs={7}>
                    <Box display="flex" alignItems="flex-end" css={{ height: '100%' }}>
                        <Box>
                            <Typography className={classes.typography} group="primary" variant="h3" weight="regular">
                                Simon Yates,<br/>
                                <strong>Programmer</strong> from Toronto
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
                </Grid>
            </Grid>
        </Container>
    );
};
