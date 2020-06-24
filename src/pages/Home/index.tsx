import React from 'react';
import DefaultLayout from '../../layouts/Default';
import Typography from '../../styling/Typography';
import {Container} from '@material-ui/core';

export default function Home() {
    return (
        <DefaultLayout>
            <Container>
                <Typography element="h1" variant="primary" weight="regular">
                    Hi, I&rsquo;m Simon Yates.<br/>
                    I couldn&rsquo;t fit everything into LinkedIn,<br/>
                    so I made a website.
                </Typography>
            </Container>
        </DefaultLayout>
    );
};
