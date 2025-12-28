import Hero from "./Hero/Hero";
import LifeAsAMaker from "./LifeAsAMaker/LifeAsAMaker";
import Stats from "./Stats/Stats";

export function AboutPage() {
  return (
    <article>
      <Hero />
      <Stats />
      <LifeAsAMaker />
    </article>
  );
}

export default AboutPage;
