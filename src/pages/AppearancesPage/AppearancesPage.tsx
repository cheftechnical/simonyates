import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";

export default function AppearancesPage() {
  return (
    <PageWrapper title="Appearances">
      <MyContainer>
        <div className="flex flex-wrap">
          {/* Content */}
          <div className="w-full">
            <h1 className="font-normal leading-relaxed text-4xl mb-2">
              Appearances
            </h1>
          </div>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}
