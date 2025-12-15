import { Link } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import Section from "../../components/Section/Section";
import Ul from "../../styling/ListsUnordered/Ul/Ul";
import Li from "../../styling/ListsUnordered/Li/Li.tsx";

export default function StudiesPage() {
  return (
    <PageWrapper title="Studies">
      <MyContainer>
        <div className="w-full">
          <Section id="studies">
            <h2 className="font-normal text-2xl leading-relaxed">
              Studies
            </h2>

            <Ul className="mt-8">
              <Li>
                <Link to="/figpie" className="text-blue-500 no-underline hover:underline">
                  Figpie: A Figma plugin for making pie charts.
                </Link>
              </Li>
              <Li>
                <Link to="/trig" className="text-blue-500 no-underline hover:underline">
                  How to Build a Pie Chart With Cubic B&eacute;zier&nbsp;Curves
                </Link>
              </Li>
            </Ul>
          </Section>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
