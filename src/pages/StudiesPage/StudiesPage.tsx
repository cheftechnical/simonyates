import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import Section from "../../components/Section/Section";

export default function StudiesPage() {
  return (
    <PageWrapper title="Studies">
      <MyContainer>
        <div className="w-full">
          <Section id="studies">
            <h2 className="font-normal text-2xl leading-relaxed">
              Studies
            </h2>
          </Section>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
