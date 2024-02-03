import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouteError } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import ThemeProviderWrapper from "../styling/ThemeProviderWrapper";

/**
 * The PageNotFound component is a self-contained page.
 *
 * It must include all styling.
 *
 * @constructor
 */
export function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProviderWrapper>
      <DefaultLayout>
        <PageNotFoundPage />
        <SpeedInsights />
        <Analytics />
      </DefaultLayout>
    </ThemeProviderWrapper>
  );
}

export default PageNotFound;
