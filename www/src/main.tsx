import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
// import './index.css'
import {Root}  from './routes/root.tsx'
import Contact from './routes/contact.tsx';
import ErrorPage from './error-page.tsx';
import Home from './routes/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,    
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: 'contacts/:contactId',
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
