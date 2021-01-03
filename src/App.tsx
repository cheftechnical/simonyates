import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import DefaultTheme from './styling/DefaultTheme';
import Featured from './pages/Featured';
import Figpie from './pages/Figpie';
import FigpieTrigonometry from './pages/Figpie/FigmaTrigonometry';
import GenworthCanada from './pages/WorkAt/GenworthCanada';
import Home from './pages/Home';
import Infomart from './pages/WorkAt/Infomart';
import JibDesignAndAdvertising from './pages/WorkAt/JibDesignAndAdvertising';
import Legal from './pages/Legal';
import MayoClinic from './pages/WorkAt/MayoClinic';
import NoMatch from './pages/NoMatch';
import Rbc from './pages/WorkAt/Rbc';
import ScrollToTop from './ScrollToTop';
import UnchartedSoftware from './pages/WorkAt/UnchartedSoftware';
import Work from './pages/Work';

function App() {
    return (
        <DefaultTheme>
            <Router>
                <ScrollToTop/>
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
            </Router>
        </DefaultTheme>
    );
}

export default App;
