import React from 'react';
import DefaultLayout from '../../layouts/Default';
import Typography from '../../styling/Typography';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    typography: {
        marginTop: theme.spacing(248/8),
        marginBottom: theme.spacing(416/8)
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <DefaultLayout>
            <Container>
                <Typography className={classes.typography} group="primary" variant="h1" weight="regular" >
                    Hi, I&rsquo;m Simon Yates.<br/>
                    I couldn&rsquo;t fit everything into LinkedIn,<br/>
                    so I made a website.
                </Typography>
            </Container>
        </DefaultLayout>
    );
};

