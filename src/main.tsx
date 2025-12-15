import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Root } from "./routes/Root.tsx";
import "./styles/tailwind.css";
import "./styles/fonts.css";
import "./styles/global.css";

// Lazy route components
const Home = lazy(() => import("./routes/Home.tsx"));
const About = lazy(() => import("./routes/About.tsx").then(m => ({ default: m.About })));
const Featured = lazy(() => import("./routes/Featured.tsx").then(m => ({ default: m.Featured })));
const Figpie = lazy(() => import("./routes/Figpie.tsx").then(m => ({ default: m.Figpie })));
const FigpieTrigonometry = lazy(() => import("./routes/FigpieTrigonometry.tsx").then(m => ({ default: m.FigpieTrigonometry })));
const International = lazy(() => import("./pages/InternationalPage/InternationalPage.tsx"));
const Legal = lazy(() => import("./routes/Legal.tsx"));
const PageNotFound = lazy(() => import("./routes/PageNotFound.tsx"));
const Work = lazy(() => import("./routes/Work.tsx"));
const WorkPage = lazy(() => import("./pages/WorkPage/WorkPage.tsx"));
const TrueNorthPage = lazy(() => import("./pages/workAt/TrueNorthPage/TrueNorthPage.tsx"));
const HelloFreshPage = lazy(() => import("./pages/workAt/HelloFreshPage/HelloFreshPage.tsx"));
const RbcPage = lazy(() => import("./pages/workAt/RbcPage/RbcPage.tsx"));
const MayoClinicPage = lazy(() => import("./pages/workAt/MayoClinicPage/MayoClinicPage.tsx"));
const UnchartedSoftwarePage = lazy(() => import("./pages/workAt/UnchartedSoftwarePage/UnchartedSoftwarePage.tsx"));
const GenworthCanadaPage = lazy(() => import("./pages/workAt/GenworthCanadaPage/index.ts"));
const InfomartPage = lazy(() => import("./pages/workAt/InfomartPage/index.ts"));
const JibDesignAndAdvertisingPage = lazy(() => import("./pages/workAt/JibDesignAndAdvertisingPage/JibDesignAndAdvertisingPage.tsx"));
const PhilipsLightingPage = lazy(() => import("./pages/workAt/PhilipsLightingPage/PhilipsLightingPage.tsx"));
const Appearances = lazy(() => import("./routes/Appearances.tsx").then(m => ({ default: m.Appearances })));
const Studies = lazy(() => import("./routes/Studies.tsx").then(m => ({ default: m.Studies })));
const Contact = lazy(() => import("./routes/Contact.tsx").then(m => ({ default: m.Contact })));
const DesignSystem = lazy(() => import("./routes/DesignSystem.tsx").then(m => ({ default: m.DesignSystem })));
const EssayTheImaginationGapAltTextAi = lazy(() => import("./routes/EssayTheImaginationGapAltTextAi.tsx").then(m => ({ default: m.EssayTheImaginationGapAltTextAi })));
const Webdev = lazy(() => import("./routes/Webdev.tsx").then(m => ({ default: m.Webdev })));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      // The following elements should be sorted in reverse-alphabetical order by path value
      {
        path: "/work",
        element: <Work />,
        children: [
          {
            path: "/work/uncharted-software",
            element: <UnchartedSoftwarePage />,
          },
          {
            path: "/work/truenorth",
            element: <TrueNorthPage />,
          },
          {
            path: "/work/hellofresh",
            element: <HelloFreshPage />,
          },
          {
            path: "/work/rbc",
            element: <RbcPage />,
          },
          {
            path: "/work/philips-lighting",
            element: <PhilipsLightingPage />,
          },
          {
            path: "/work/mayo-clinic",
            element: <MayoClinicPage />,
          },
          {
            path: "/work/jib-design-and-advertising",
            element: <JibDesignAndAdvertisingPage />,
          },
          {
            path: "/work/infomart",
            element: <InfomartPage />,
          },
          {
            path: "/work/genworth-canada",
            element: <GenworthCanadaPage />,
          },
          {
            path: "/work",
            element: <WorkPage />,
          },
        ],
      },
      {
        path: "/trig",
        element: <FigpieTrigonometry />
      },
      {
        path: "/page-not-found",
        element: <PageNotFound />,
      },
      {
        path: "/notes/webdev",
        element: <Webdev />
      },
      {
        path: "/legal",
        element: <Legal />,
      },
      {
        path: "/international",
        element: <International />,
      },
      {
        path: "/figpie",
        element: <Figpie />,
      },
      {
        path: "/featured",
        element: <Featured />,
      },
      {
        path: "/essays/the-imagination-gap-alt-text-ai",
        element: <EssayTheImaginationGapAltTextAi />,
      },
      {
        path: "/design-system",
        element: <DesignSystem />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/appearances",
        element: <Appearances />,
      },
      {
        path: "/studies",
        element: <Studies />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  // This is an experiment page, and uses dependencies which are not required for prod
  // natural height pages
  // {
  //   path: '/experiment',
  //   element: <Experiment />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
);
