import { Outlet } from 'react-router-dom';
import ThemeProviderWrapper from '../styling/ThemeProviderWrapper';
import { Suspense } from 'react';
import {LinearProgress} from "@mui/material";
import { Analytics} from "@vercel/analytics/react";

export function Root() {
  return (
    <ThemeProviderWrapper>
      <Suspense fallback={<LinearProgress />}>
        {/* <> */}
          {/* <header> */}
            {/* <Header/> */}
          {/* </header> */}

          {/* <main> */}
            <Outlet />
          {/* </main> */}

          {/* <footer> */}
            {/* <Footer/> */}
          {/* </footer> */}
        {/* </> */}
        <Analytics />
      </Suspense>
    </ThemeProviderWrapper>
  );
}

export default Root;
