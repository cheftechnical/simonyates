import LifeAsAMaker from './LifeAsAMaker/LifeAsAMaker';
import Hero from './Hero/Hero';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import Stats from './Stats/Stats';
import PageWrapper from "../../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper title="About">
      <article>
        <Hero/>
        <Stats/>
        <LifeAsAMaker/>
        <PhotoGallery/>
      </article>
    </PageWrapper>
  );
};
