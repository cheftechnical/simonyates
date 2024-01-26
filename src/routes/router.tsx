import {createBrowserRouter, Link as ReactRouterDomLink} from "react-router-dom";
import React, {lazy} from "react";
import Root from "./Root";
import ArrayFunction from "../pages/Experiment/ArrayFunction";
import {Link} from "@mui/material";

const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Experiment = lazy(() => import('../pages/Experiment/ExperimentScrollSpy'));
const Featured = lazy(() => import('../pages/Featured'));
const Figpie = lazy(() => import('../pages/Figpie'));
const FigpieTrigonometry = lazy(() => import('../pages/FigpieTrigonometry'));
const GenworthCanada = lazy(() => import('../pages/workAt/GenworthCanada'));
const Home = lazy(() => import('../pages/Home'));
const Infomart = lazy(() => import('../pages/workAt/Infomart'));
const International = lazy(() => import('../pages/International'));
const JibDesignAndAdvertising = lazy(() => import('../pages/workAt/JibDesignAndAdvertising'));
const Legal = lazy(() => import('../pages/Legal'));
const MayoClinic = lazy(() => import('../pages/workAt/MayoClinic'));
const MortgagePaymentCalculator = lazy(() => import('../pages/Math/MortgagePaymentCalculator'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Rbc = lazy(() => import('../pages/workAt/Rbc'));
const TrueNorth = lazy(() => import('../pages/workAt/TrueNorth'));
const UnchartedSoftware = lazy(() => import('../pages/workAt/UnchartedSoftware'));
const Work = lazy(() => import('../pages/Work'));

// @todo add a loading state: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: 'experiment',
    element: <Experiment/>,
  },
  {
    path: 'array-function',
    element: <ArrayFunction/>,
  },
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Home/>,
      }
    ]
  },
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children: [
      // {
      //   index: true,
      //   element: <Home/>,
      // },
      // ---
      {
        path: 'work/uncharted-software',
        element: <UnchartedSoftware/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/truenorth',
        element: <TrueNorth/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/rbc',
        element: <Rbc/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/mayo-clinic',
        element: <MayoClinic/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/jib-design-and-advertising',
        element: <JibDesignAndAdvertising/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/infomart',
        element: <Infomart/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work/genworth-canada',
        element: <GenworthCanada/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'work',
        element: <Work/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/work">Work</Link>
        }
      },
      {
        path: 'resources/international',
        element: <International/>
      },
      {
        path: 'math/mortgage-payment-calculator',
        element: <MortgagePaymentCalculator/>
      },
      {
        path: 'legal',
        element: <Legal/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/legal">Legal</Link>
        }
      },
      {
        path: 'figpie/trigonometry',
        element: <FigpieTrigonometry/>,
      },
      {
        path: 'figpie',
        element: <Figpie/>,
      },
      {
        path: 'featured',
        element: <Featured/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/featured">Featured</Link>
        }
      },
      {
        path: 'contact',
        element: <Contact/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/contact">Contact</Link>
        }
      },
      {
        path: 'about',
        element: <About/>,
        handle: {
          breadcrumb: <Link component={ReactRouterDomLink} to="/about">About</Link>
        }
      },
    ]
  }
]);

export default router;
