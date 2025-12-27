'use client';

import LifeAsAMaker from "./LifeAsAMaker/LifeAsAMaker";
import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import PageWrapper from "../../components/PageWrapper";

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
