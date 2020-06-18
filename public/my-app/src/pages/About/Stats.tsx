import * as React from 'react';
import {Grid} from "@material-ui/core";

export default function Stats() {
    return (
        <Grid container>
            <Grid item xs={3}>
                25 years programming
            </Grid>
            <Grid item xs={3}>
                10 when I started programming
            </Grid>
            <Grid item xs={3}>
                200 software projects completed
            </Grid>
            <Grid item xs={3}>
                1 awesome girlfriend
            </Grid>
        </Grid>
    )
}