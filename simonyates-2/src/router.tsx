import {createBrowserRouter, Route, Routes} from "react-router-dom";
import React, {lazy} from "react";
import Root from "./routes";

const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Featured = lazy(() => import('./pages/Featured'));
const Figpie = lazy(() => import('./pages/Figpie'));
const GenworthCanada = lazy(() => import('./pages/workAt/GenworthCanada'));
const Home = lazy(() => import('./pages/Home'));
const Infomart = lazy(() => import('./pages/workAt/Infomart'));
const JibDesignAndAdvertising = lazy(() => import('./pages/workAt/JibDesignAndAdvertising'));
const Legal = lazy(() => import('./pages/Legal'));
const MayoClinic = lazy(() => import('./pages/workAt/MayoClinic'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Rbc = lazy(() => import('./pages/workAt/Rbc'));
const UnchartedSoftware = lazy(() => import('./pages/workAt/UnchartedSoftware'));
const Work = lazy(() => import('./pages/Work'));


// const router1 = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="/work/uncharted-software" element={<UnchartedSoftware/>}/>
//       <Route path="/work/rbc" element={<Rbc/>}/>
//       <Route path="/work/mayo-clinic" element={<MayoClinic/>}/>
//       <Route path="/work/jib-design-and-advertising" element={<JibDesignAndAdvertising/>}/>
//       <Route path="/work/infomart" element={<Infomart/>}/>
//       <Route path="/work/genworth-canada" element={<GenworthCanada/>}/>
//       <Route path="/work" element={<Work/>}/>
//       <Route path="/legal" element={<Legal/>}/>
//       <Route path="/figpie" element={<Figpie/>}/>
//       <Route path="/featured" element={<Featured/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route path="/about" element={<About/>}/>


//       {/*<Route path="/resources/international" component={International}/>*/}
//       {/*<Route path="/figpie/trigonometry" component={FigpieTrigonometry}/>*/}


//       <Route path="/" element={<Home/>}/>
//       <Route path="*" element={<PageNotFound/>}/>
//     </Routes>
//   )
// );

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
