import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ThemeProviderWrapper from "../styling/ThemeProviderWrapper";

export function Root() {
  return (
    <ThemeProviderWrapper>
      <Suspense fallback={<LinearProgress />}>
        <Outlet />
        <SpeedInsights />
        <Analytics />
      </Suspense>
    </ThemeProviderWrapper>
  );
}

export default Root;
