import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import StatsItem from './StatsItem';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(28/8),
        paddingBottom: theme.spacing(28/8),
        backgroundColor: color.grey['50']
    },
}));

export default function Stats() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <StatsItem caption="years programming" value={25}/>
                    </Grid>
                    <Grid item xs={3}>
                        <StatsItem caption="when I started programming" value={10}/>
                    </Grid>
                    <Grid item xs={3}>
                        <StatsItem caption="software projects completed" value={200}/>
                    </Grid>
                    <Grid item xs={3}>
                        <StatsItem caption="awesome girlfriend" value={1}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
