import * as React from 'react';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import DefaultTheme from './styling/DefaultTheme';
import ScrollToTop from './ScrollToTop';
import Loading from './Loading';

const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Featured = lazy(() => import('./pages/Featured'));
const FigpieTrigonometry = lazy(() => import('./pages/FigpieTrigonometry'));
const Figpie = lazy(() => import('./pages/Figpie'));
const GenworthCanada = lazy(() => import('./pages/WorkAt/GenworthCanada'));
const Home = lazy(() => import('./pages/Home'));
const Infomart = lazy(() => import('./pages/WorkAt/Infomart'));
const JibDesignAndAdvertising = lazy(() => import('./pages/WorkAt/JibDesignAndAdvertising'));
const Legal = lazy(() => import('./pages/Legal'));
const MayoClinic = lazy(() => import('./pages/WorkAt/MayoClinic'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Rbc = lazy(() => import('./pages/WorkAt/Rbc'));
const UnchartedSoftware = lazy(() => import('./pages/WorkAt/UnchartedSoftware'));
const Work = lazy(() => import('./pages/Work'));

function App() {
  return (
    <DefaultTheme>
      <Router>
        <ScrollToTop/>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route exact path="/work/uncharted-software" component={UnchartedSoftware}/>
            <Route exact path="/work/rbc" component={Rbc}/>
            <Route exact path="/work/mayo-clinic" component={MayoClinic}/>
            <Route exact path="/work/jib-design-and-advertising" component={JibDesignAndAdvertising}/>
            <Route exact path="/work/infomart" component={Infomart}/>
            <Route exact path="/work/genworth-canada" component={GenworthCanada}/>
            <Route exact path="/figpie/trigonometry" component={FigpieTrigonometry}/>
            <Route exact path="/figpie" component={Figpie}/>
            <Route exact path="/work" component={Work}/>
            <Route exact path="/legal" component={Legal}/>
            <Route exact path="/featured" component={Featured}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route component={NoMatch}/>
          </Switch>
        </Suspense>
      </Router>
    </DefaultTheme>
  );
}

export default App;
