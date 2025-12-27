import Link from "next/link";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";

// This page is a focused exploration where implementation, mathematics, or structure is the primary language — not narrative.
export default function StudiesPage() {
  return (
    <PageWrapper title="Studies">
      <MyContainer>
        <div className="flex flex-wrap">
          {/* Content */}
          {/* pr-32 = 128 or 3 visual octaves * 1.5 line height = pr-48 192 */}
          <div className="w-full md:w-9/12 md:pr-48 ">
            <Section id="studies">
            <h1 className="font-normal text-2xl leading-relaxed">
              Studies
            </h1>

            <div className="mt-8">
              <section>
                <h2 className="font-normal text-xl leading-relaxed w-1/2">
                  <Link href="/figpie" className="text-blue-500 no-underline hover:underline">
                    Figpie
                  </Link>
                </h2>
                <div className="mt-3 w-1/2 border-gray-700 border-1 p-1">
                  <Link href="/figpie">
                    <Image
                      alt="Figpie Figma plugin interface showing pie chart controls and preview"
                      src="/images/studies/figpie-screenshot.png"
                      className="grayscale"
                    />
                  </Link>
                </div>
                <p className="mt-3">
                  A production-grade Figma plugin for generating pie&nbsp;charts.
                </p>
                <p className="mt-3">
                  Design, engineering, and long-term maintenance of a focused visualization tool with 100k+&nbsp;installs.
                </p>
              </section>
              <section>
                <h2 className="font-normal text-xl leading-relaxed pt-16">
                  Pie Charts &amp;&nbsp;Geometry
                </h2>
                <h3 className="font-normal text-lg leading-normal mt-3 w-1/2">
                  <Link href="/trig" className="text-blue-500 no-underline hover:underline">
                    How to Build a Pie Chart with Cubic B&eacute;zier Curves
                  </Link>
                </h3>
                <div className="mt-3 w-1/2 border-gray-700 border-1 p-1">
                  <Link href="/trig">
                    <Image
                      alt="Cubic Bézier curve diagram illustrating circular arc approximation"
                      src="/images/studies/bezier-curve-example.png"
                      className="grayscale"
                    />
                  </Link>
                </div>
                <p className="mt-3">
                  An interactive mathematical exploration of how cubic B&eacute;zier curves approximate circular arcs, with live equations rendered in LaTeX and visually bound to&nbsp;geometry.
                </p>
              </section>
            </div>
          </Section>
          </div>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
