import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Button, Grid, TextField} from '@material-ui/core';

export default function Contact() {
    return (
        <DefaultLayout top="contact">
            <Grid container>
                <Grid item xs={6}>
                    <h1>Pleasure to meet you.</h1>
                    <p>I&rsquo;m always open to make new connections and chat about software development.</p>

                    <TextField fullWidth label="Name"/>
                    <TextField fullWidth label="Email"/>
                    <TextField fullWidth label="Subject"/>
                    <TextField fullWidth multiline label="Message"/>
                    <Button variant="contained">Send</Button>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};
