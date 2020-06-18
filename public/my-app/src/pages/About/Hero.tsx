import * as React from 'react';
import {Grid} from "@material-ui/core";

export default function Hero() {
    return (
        <Grid container>
            <Grid item>
                Simon Yates,
                Programmer from Toronto
            </Grid>
            <Grid item>
                [photo]
            </Grid>
        </Grid>
    );
}