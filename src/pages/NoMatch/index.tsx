import * as React from 'react';
import DefaultLayout from '../../layouts/Default';

export default function NoMatch() {
    return (
        <DefaultLayout title="404: Page Not Found">
            <h1>404</h1>
            <p>Sorry you got lost.</p>
            <p>Go back to my homepage?</p>
        </DefaultLayout>
    );
};
