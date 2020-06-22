import React from 'react';
// import logo from './logo.svg';
import './App.css';
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

// function App() {
//     return (
//         <div className="App">
//             Hello World
//
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

function App() {
    return (
        <Router>
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
    );
}

export default App;
