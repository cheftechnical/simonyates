import React, {Suspense} from 'react';
import {BrowserRouter, ScrollRestoration, RouterProvider} from 'react-router-dom';
import ThemeProviderWrapper from "./styling/ThemeProviderWrapper";
import {LinearProgress} from "@mui/material";
import router from "./routes/router";


function App() {
  return (
    <ThemeProviderWrapper>
      {/*<BrowserRouter>*/}

        <Suspense fallback={<LinearProgress/>}>
          <RouterProvider router={router}/>


        </Suspense>
      {/*</BrowserRouter>*/}
    </ThemeProviderWrapper>
  )
}

export default App;
