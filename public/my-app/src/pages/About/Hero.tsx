import * as React from 'react';
import {Grid} from '@material-ui/core';

export default function Hero() {
    return (
        <Grid container>
            <Grid item xs={6}>
                Simon Yates,<br/>
                <strong>Programmer</strong> from Toronto
            </Grid>
            <Grid item xs={6}>
                [photo]
            </Grid>
        </Grid>
    );
}