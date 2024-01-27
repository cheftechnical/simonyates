import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';


type RootProps = {
    /**
    * The title of the page as it appears in the <head><title></head>
    */
    title?: string;
};

export function Root() {
  return (
    <>
      <header>
        [Header]
      </header>

      <main>
        <Outlet />
      </main>
      
      <footer>
          <Footer/>
      </footer>
    </>
  );
};

export default Root;
