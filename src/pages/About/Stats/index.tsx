import * as React from 'react';
import {Container, Grid} from '@material-ui/core';
import StatsItem from './StatsItem';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: color.grey['50']
    },
    container: {

    }
}));

export default function Stats() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container className={classes.container}>
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
