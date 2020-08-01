import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './pages/Contact';
import Featured from './pages/Featured';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Work from './pages/Work';
import Rbc from './pages/WorkAt/Rbc';
import UnchartedSoftware from './pages/WorkAt/UnchartedSoftware';
import Legal from './pages/Legal';
import MayoClinic from './pages/WorkAt/MayoClinic';
import GenworthCanada from './pages/WorkAt/GenworthCanada';
import JibDesignAndAdvertising from './pages/WorkAt/JibDesignAndAdvertising';
import Infomart from './pages/WorkAt/Infomart';
import DefaultTheme from './styling/DefaultTheme';
import ScrollToTop from './ScrollToTop';

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
