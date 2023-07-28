import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout';
import LifeAsAMaker from './LifeAsAMaker/LifeAsAMaker';
import Hero from './Hero/Hero';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Stats from './Stats/Stats';

export default function About() {
  return (
    // <DefaultLayout title="About" top="about">
      <article>
        <Hero/>
        <Stats/>
        <LifeAsAMaker/>
        <PhotoGallery/>
      </article>
    // </DefaultLayout>
  );
};
