import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ThemeProviderWrapper from "./styling/ThemeProviderWrapper";
import {LinearProgress} from "@mui/material";

const About = lazy(() => import('./pages/About/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Featured = lazy(() => import('./pages/Featured'));
const Figpie = lazy(() => import('./pages/Figpie'));
const GenworthCanada = lazy(() => import('./pages/workAt/GenworthCanada'));
const Home = lazy(() => import('./pages/Home'));
const Infomart = lazy(() => import('./pages/workAt/Infomart'));
const JibDesignAndAdvertising = lazy(() => import('./pages/workAt/JibDesignAndAdvertising'));
const Legal = lazy(() => import('./pages/Legal'));
const MayoClinic = lazy(() => import('./pages/workAt/MayoClinic/MayoClinic'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Rbc = lazy(() => import('./pages/workAt/Rbc'));
const UnchartedSoftware = lazy(() => import('./pages/workAt/UnchartedSoftware'));
const Work = lazy(() => import('./pages/Work'));

function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <Suspense fallback={<LinearProgress/>}>
          <Routes>
            <Route path="/work/uncharted-software" element={<UnchartedSoftware/>}/>
            <Route path="/work/rbc" element={<Rbc/>}/>
            <Route path="/work/mayo-clinic" element={<MayoClinic/>}/>
            <Route path="/work/jib-design-and-advertising" element={<JibDesignAndAdvertising/>}/>
            <Route path="/work/infomart" element={<Infomart/>}/>
            <Route path="/work/genworth-canada" element={<GenworthCanada/>}/>
            {/*<Route path="/resources/international" component={International}/>*/}
            {/*<Route path="/figpie/trigonometry" component={FigpieTrigonometry}/>*/}
            <Route path="/figpie" element={<Figpie/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/legal" element={<Legal/>}/>
            <Route path="/featured" element={<Featured/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NoMatch/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProviderWrapper>
  )
}

export default App;
