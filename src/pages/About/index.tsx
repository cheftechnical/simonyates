import DefaultLayout from '../../layouts/Default';
import LifeAsAMaker from './LifeAsAMaker';
import Hero from './Hero';
import PhotoGallery from './PhotoGallery';
import Stats from './Stats';

export default function About() {
  return (
    <DefaultLayout title="About" top="about">
      <article>
        <Hero/>
        <Stats/>
        <LifeAsAMaker/>
        <PhotoGallery/>
      </article>
    </DefaultLayout>
  );
};
