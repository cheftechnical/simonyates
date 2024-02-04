import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";
import NavRight from "../../components/NavRight/NavRight";
import MyContainer from "../../styling/MyContainer/MyContainer";
import MyGridContainer from "../../styling/MyGridContainer/MyGridContainer";
import { Grid } from "@mui/material";
import PageWrapper from "../../components/PageWrapper";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react";
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
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <PageWrapper title="Legal">
      <MyContainer>
        <MyGridContainer>
          <Grid item md={6} xs={12}>

            <div ref={parentScrollContainerRef}>
              <ScrollSpy activeClass="active-scroll-spy">
                <PrivacyPolicy id={sections.privacyPolicy.id} />
                <TermsAndConditions id={sections.termsAndConditions.id} />
              </ScrollSpy>
            </div>

          </Grid>
          <Grid item md={3} />
          <Grid item md={3}>

            <NavRight sections={sections} />

          </Grid>
        </MyGridContainer>
      </MyContainer>
    </PageWrapper>
  );
}

export default Legal;
