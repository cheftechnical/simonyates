import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Root } from "./routes/Root.tsx";
import "./styles/tailwind.css";

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
const TrueNorthPage = lazy(() => import("./pages/workAt/TrueNorth/TrueNorthPage.tsx"));
const RbcPage = lazy(() => import("./pages/workAt/RbcPage/RbcPage.tsx"));
const MayoClinicPage = lazy(() => import("./pages/workAt/MayoClinicPage/MayoClinicPage.tsx"));
const UnchartedSoftwarePage = lazy(() => import("./pages/workAt/UnchartedSoftwarePage/UnchartedSoftwarePage.tsx"));
const GenworthCanadaPage = lazy(() => import("./pages/workAt/GenworthCanadaPage/index.ts"));
const InfomartPage = lazy(() => import("./pages/workAt/InfomartPage/index.ts"));
const JibDesignAndAdvertisingPage = lazy(() => import("./pages/workAt/JibDesignAndAdvertisingPage/JibDesignAndAdvertisingPage.tsx"));
const Contact = lazy(() => import("./routes/Contact.tsx").then(m => ({ default: m.Contact })));
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
            path: "/work/rbc",
            element: <RbcPage />,
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
        path: "/contact",
        element: <Contact />,
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
