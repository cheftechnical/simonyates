import React, {Suspense} from 'react';
import {RouterProvider} from 'react-router-dom';
import ThemeProviderWrapper from "./styling/ThemeProviderWrapper";
import {LinearProgress} from "@mui/material";
import router from "./routes/router";


function App() {
  return (
    <ThemeProviderWrapper>
      <Suspense fallback={<LinearProgress/>}>
        <RouterProvider router={router}/>
      </Suspense>
    </ThemeProviderWrapper>
  )
}

export default App;