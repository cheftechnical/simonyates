import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Home from './routes/Home.tsx';
import { About } from './routes/About.tsx';
import { Featured } from './routes/Featured.tsx';
import { Figpie } from './routes/Figpie.tsx';
import { FigpieTrigonometry } from './routes/FigpieTrigonometry.tsx';
import International from './pages/InternationalPage/InternationalPage.tsx';
import Legal from './routes/Legal.tsx';
import PageNotFound from './routes/PageNotFound.tsx';
import Work from './routes/Work.tsx';
import WorkPage from './pages/WorkPage/WorkPage.tsx';
import TrueNorthPage from './pages/workAt/TrueNorth/TrueNorthPage.tsx';
import RbcPage from './pages/workAt/RbcPage/RbcPage.tsx';
import MayoClinicPage from './pages/workAt/MayoClinicPage/MayoClinicPage.tsx';
import UnchartedSoftwarePage from './pages/workAt/UnchartedSoftwarePage/UnchartedSoftwarePage.tsx';
import GenworthCanadaPage from './pages/workAt/GenworthCanadaPage/index.ts';
import InfomartPage from './pages/workAt/InfomartPage/index.ts';
import JibDesignAndAdvertisingPage from './pages/workAt/JibDesignAndAdvertisingPage/JibDesignAndAdvertisingPage.tsx';
import { Root } from './routes/Root.tsx';
import { Contact } from './routes/contact.tsx';

const router = createBrowserRouter([
  // full height pages
  {
    path: '/',
    element: <Root />,
    errorElement: <PageNotFound />,    
    children: [
      // The following elements should be sorted in reverse-alphabetical order by path value
      {
        path: '/work',
        element: <Work />,
        children: [
          {
            path: '/work/uncharted-software',
            element: <UnchartedSoftwarePage />,
          },
          {
            path: '/work/truenorth',
            element: <TrueNorthPage />,
          },
          {
            path: '/work/rbc',
            element: <RbcPage />,
          },
          {
            path: '/work/mayo-clinic',
            element: <MayoClinicPage />,
          },
          {
            path: '/work/jib-design-and-advertising',
            element: <JibDesignAndAdvertisingPage />,
          },
          {
            path: '/work/infomart',
            element: <InfomartPage />,
          },
          {
            path: '/work/genworth-canada',
            element: <GenworthCanadaPage />,
          },
          {
            path: '/work',
            element: <WorkPage />,
          }
        ]
      },
      {
        path: '/page-not-found',
        element: <PageNotFound/>,
      },
      {
        path: '/legal',
        element: <Legal />,
      },
      {
        path: '/international',
        element: <International />,
      },
      {
        path: '/figpie-trigonometry',
        element: <FigpieTrigonometry />,
      },
      {
        path: '/figpie',
        element: <Figpie />,
      },
      {
        path: '/featured',
        element: <Featured />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/',
        element: <Home />,
      },
    ]
  },
  
  // This is an experiment page, and uses dependencies which are not required for prod
  // natural height pages
  // {
  //   path: '/experiment',
  //   element: <Experiment />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
);
