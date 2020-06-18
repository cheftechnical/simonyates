import * as React from 'react';
import {Grid} from '@material-ui/core';
import StatsItem from './StatsItem';

export default function Stats() {
    return (
        <div>
            <hr/>
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
            <hr/>
        </div>
    );
};
