import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ThemeProviderWrapper from '../styling/ThemeProviderWrapper';
import { Suspense } from 'react';
import {LinearProgress} from "@mui/material";


export function Root() {
  return (
    <ThemeProviderWrapper>
      <Suspense fallback={<LinearProgress />}>
        <>
          <header>
            <Header/>
          </header>

          <main>
            <Outlet />
          </main>
          
          <footer>
            <Footer/>
          </footer>
        </>
      </Suspense>
    </ThemeProviderWrapper>
  );
};

export default Root;
