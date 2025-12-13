import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouteError } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import PageNotFoundPage from "../pages/PageNotFoundPage";

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
    <DefaultLayout>
      <PageNotFoundPage />
      <SpeedInsights />
      <Analytics />
    </DefaultLayout>
  );
}

export default PageNotFound;
