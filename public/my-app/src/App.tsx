import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Work from "./pages/Work";
import NoMatch from "./pages/NoMatch";

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
                <Route exact path="/work" component={Work}/>
                <Route exact path="/" component={Home}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    );
}

export default App;
