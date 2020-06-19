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
import WorkAtRbc from './pages/WorkAt/WorkAtRbc';
import WorkAtUnchartedSoftware from './pages/WorkAt/WorkAtUnchartedSoftware';

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
                <Route exact path="/work/uncharted-software" component={WorkAtUnchartedSoftware}/>
                <Route exact path="/work/rbc" component={WorkAtRbc}/>
                <Route exact path="/work" component={Work}/>
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
