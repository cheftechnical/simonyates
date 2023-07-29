import {createBrowserRouter} from "react-router-dom";
import React, {lazy} from "react";
import Root from "./Root";

const About = lazy(() => import('../pages/About/About'));
const Contact = lazy(() => import('../pages/Contact'));
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
const PageNotFound = lazy(() => import('../pages/PageNotFound'));
const Rbc = lazy(() => import('../pages/workAt/Rbc'));
const UnchartedSoftware = lazy(() => import('../pages/workAt/UnchartedSoftware'));
const Work = lazy(() => import('../pages/Work'));

// @todo add a loading state: https://reactrouter.com/en/main/start/tutorial
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <PageNotFound/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      // ---
      {
        path: 'work/uncharted-software',
        element: <UnchartedSoftware/>,
      },
      {
        path: 'work/rbc',
        element: <Rbc/>,
      },
      {
        path: 'work/mayo-clinic',
        element: <MayoClinic/>,
      },
      {
        path: 'work/jib-design-and-advertising',
        element: <JibDesignAndAdvertising/>,
      },
      {
        path: 'work/infomart',
        element: <Infomart/>,
      },
      {
        path: 'work/genworth-canada',
        element: <GenworthCanada/>,
      },
      {
        path: 'work',
        element: <Work/>,
      },
      {
        path: 'resources/international',
        element: <International/>
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
        path: 'legal',
        element: <Legal/>
      },
      {
        path: 'featured',
        element: <Featured/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'about',
        element: <About/>,
      },
    ]
  }
]);

export default router;
