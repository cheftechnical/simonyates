import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService.tsx";
import NavRight from "../../components/NavRight/NavRight";
import MyContainer from "../../styling/MyContainer/MyContainer";
import PageWrapper from "../../components/PageWrapper";
import { Sections } from "../../types/Sections.ts";

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
          <div className="w-full md:w-1/2">
            <PrivacyPolicy id={sections.privacyPolicy.id} />
            <TermsOfService id={sections.termsOfService.id} />
          </div>

          {/* Gutter */}
          <div className="hidden md:block md:w-1/4" />

          {/* Navigation */}
          <div className="hidden md:block md:w-1/4">
            <NavRight sections={sections} />
          </div>
        </div>
      </MyContainer>
    </PageWrapper>
  );
}

export default Legal;
