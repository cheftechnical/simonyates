import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
    return (
        <>
            <div>
                [root]
                <Outlet />
            </div>
        </>
    )
};
