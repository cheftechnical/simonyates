import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import Image from '../../components/Image';

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(80/8),
    },
    typography: {
        marginTop: theme.spacing(168/8)
    }
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Grid container>
                <Grid item xs={7}>
                    <Typography className={classes.typography} group="primary" variant="h3" weight="regular">
                        Simon Yates,<br/>
                        <strong>Programmer</strong> from Toronto
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Image alt="Photo of Simon Yates" src="/images/about/hero/simon-yates.png"/>
                </Grid>
            </Grid>
        </Container>
    );
};
