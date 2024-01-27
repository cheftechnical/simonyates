import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import ErrorPage from './error-page.tsx';
import Home from './routes/Home.tsx';
import { About } from './routes/About.tsx';
import Contact from './routes/Contact.tsx';
import Root from './routes/Root.tsx';
import Experiment from './pages/Experiment/Experiment.tsx';
import { Featured } from './routes/Featured.tsx';
import { Figpie } from './routes/Figpie.tsx';
import { FigpieTrigonometry } from './routes/FigpieTrigonometry.tsx';
import International from './pages/InternationalPage/InternationalPage.tsx';

const router = createBrowserRouter([
  // full height pages
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,    
    children: [
      // The following elements should be sorted in reverse-alphabetical order by path value
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

  {
    path: 'contacts/:contactId',
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
);
