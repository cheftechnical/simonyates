import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import NavRight from "../../components/NavRight/NavRight";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import PageWrapper from "../../components/PageWrapper";
import { Sections } from "../../types/Sections.ts";

const sections: Sections = {
  privacyPolicy: {
    id: "privacy-policy",
    title: "Privacy Policy"
  },
  termsAndConditions: {
    id: "terms-and-conditions",
    title: "Terms & Conditions"
  }
};

export function Legal() {
  return (
    <PageWrapper title="Legal">
      <MyContainer>
        <MyGridContainer>
          {/* Content */}
          <div className="w-full md:w-1/2">
            <PrivacyPolicy id={sections.privacyPolicy.id} />
            <TermsAndConditions id={sections.termsAndConditions.id} />
          </div>

          {/* Gutter */}
          <div className="hidden md:block md:w-1/4" />

          {/* Navigation */}
          <div className="hidden md:block md:w-1/4">
            <NavRight sections={sections} />
          </div>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
}

export default Legal;
