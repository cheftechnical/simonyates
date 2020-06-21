import * as React from 'react';
import DefaultLayout from '../../layouts/Default';

export default function NoMatch() {
    return (
        <DefaultLayout>
            <h1>404</h1>
            <p>Sorry you got lost.</p>
            <p>Go back to my homepage?</p>
        </DefaultLayout>
    );
};
