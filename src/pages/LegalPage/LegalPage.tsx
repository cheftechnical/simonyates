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
            <div className="text-sm uppercase mb-6">
              Last updated: January 2010 (reviewed January 2025)
            </div>
            <h1 className="sr-only">Legal</h1>
            <p className="font-normal text-xl leading-relaxed mt-4 text-gray-600 mb-6">
              This policy governs professional services and websites operated by Sybaris&nbsp;Analytics Corporation, including&nbsp;simonyates.ca.
            </p>
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
