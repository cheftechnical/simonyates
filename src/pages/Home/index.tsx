import React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Typography} from '@material-ui/core';

export default function Home() {
    return (
        <DefaultLayout>
            <Typography variant="h1">
                Hi, I&rsquo;m Simon Yates.<br/>
                I couldn&rsquo;t fit everything into LinkedIn,<br/>
                so I made a website.
            </Typography>
        </DefaultLayout>
    );
};
