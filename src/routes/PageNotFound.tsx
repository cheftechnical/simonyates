import DefaultLayout from "../layouts/DefaultLayout";
import PageNotFoundPage from "../pages/PageNotFoundPage";
import { useRouteError } from "react-router-dom";
import ThemeProviderWrapper from "../styling/ThemeProviderWrapper";

export function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <ThemeProviderWrapper>
      <DefaultLayout>
        <PageNotFoundPage />
      </DefaultLayout>
    </ThemeProviderWrapper>
  );
}

export default PageNotFound;
