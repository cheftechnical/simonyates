import NavRight from "../../components/NavRight/NavRight";
import PageWrapper from "../../components/PageWrapper";
import MyContainer from "../../styling/MyContainer/MyContainer";
import { Sections } from "../../types/Sections";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const sections: Sections = {
  privacyPolicy: {
    id: "privacy-policy",
    title: "Privacy Policy"
  },
  termsOfService: {
    id: "terms-of-service",
    title: "Terms of Service"
  }
};

export function Legal() {
  return (
    <PageWrapper title="Legal">
      <MyContainer>
        <div className="flex flex-wrap">
          {/* Content */}
          <div className="w-full md:w-9/12 md:pr-48">
            <h1 className="sr-only">Legal</h1>
            <PrivacyPolicy id={sections.privacyPolicy.id} />
            <TermsOfService id={sections.termsOfService.id} />
          </div>

          {/* Navigation */}
          <div className="hidden md:block md:w-3/12">
            <NavRight sections={sections} />
          </div>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}

export default Legal;
