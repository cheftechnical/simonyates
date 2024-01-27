import {Helmet} from 'react-helmet-async';
import AboutPage from '../pages/AboutPage';


export function About() {
  return (
    <>
    <Helmet><title>No doout aboot it</title></Helmet>
    <AboutPage />
    </>
  )
}

export default About;
