import { Helmet } from "react-helmet-async";
import AboutPage from "../pages/AboutPage";
import DefaultLayout from "../layouts/DefaultLayout";

export function About() {
  return (
    <>
      <Helmet>
        <title>No doout aboot it</title>
      </Helmet>

      <DefaultLayout>
        <AboutPage />
      </DefaultLayout>
    </>
  );
}

export default About;
