import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ThemeProviderWrapper from "./styling/ThemeProviderWrapper";
import {LinearProgress} from "@mui/material";

const About = lazy(() => import('./pages/About/About'));
const Featured = lazy(() => import('./pages/Featured'));
const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Rbc = lazy(() => import('./pages/workAt/Rbc'));
const Work = lazy(() => import('./pages/Work'));

function App() {
  return (
    <ThemeProviderWrapper>
      <BrowserRouter>
        <Suspense fallback={<LinearProgress/>}>
          <Routes>
            {/*<Route path="/work/uncharted-software" component={UnchartedSoftware}/>*/}
            <Route path="/work/rbc" element={<Rbc/>}/>
            {/*<Route path="/work/mayo-clinic" component={MayoClinic}/>*/}
            {/*<Route path="/work/jib-design-and-advertising" component={JibDesignAndAdvertising}/>*/}
            {/*<Route path="/work/infomart" component={Infomart}/>*/}
            {/*<Route path="/work/genworth-canada" component={GenworthCanada}/>*/}
            {/*<Route path="/resources/international" component={International}/>*/}
            {/*<Route path="/figpie/trigonometry" component={FigpieTrigonometry}/>*/}
            {/*<Route path="/figpie" component={Figpie}/>*/}
            <Route path="/work" element={<Work/>}/>
            {/*<Route path="/legal" component={Legal}/>*/}
            <Route path="/featured" element={<Featured/>}/>
            {/*<Route path="/contact" component={Contact}/>*/}
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
