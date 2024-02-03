import { Outlet } from "react-router-dom";
import ThemeProviderWrapper from "../styling/ThemeProviderWrapper";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
        <SpeedInsights />
        <Analytics />
      </Suspense>
    </ThemeProviderWrapper>
  );
}

export default Root;
