import PageWrapper from "../../components/PageWrapper";
import Hero from "./Hero/Hero";
import LifeAsAMaker from "./LifeAsAMaker/LifeAsAMaker";
import Stats from "./Stats/Stats";

export function AboutPage() {
  return (
    <PageWrapper title="About">
      <article>
        <Hero />
        <Stats />
        <LifeAsAMaker />
      </article>
    </PageWrapper>
  );
}

export default AboutPage;
