import React, {lazy} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const NoMatch = lazy(() => import('./pages/NoMatch'));
const Work = lazy(() => import('./pages/Work'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/work" element={<Work/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
