import { Link as ReactRouterDomLink } from "react-router-dom";
import MyContainer from "../../styling/MyContainer/MyContainer";
import PageWrapper from "../../components/PageWrapper";

export default function PageNotFoundPage() {
  return (
    <PageWrapper title="404: Page Not Found">
      <MyContainer>
        <h1 className="text-[88px] leading-[88px] mb-[72px] mt-[272px] font-normal tracking-[0.5px]">
          404
        </h1>
        <p className="mb-[388px] text-[#626262] font-normal text-xl leading-8">
          Sorry, that page doesn&rsquo;t&nbsp;exist.
          <br />
          But you can navigate back to&nbsp;
          <ReactRouterDomLink
            to="/"
            className="font-bold text-[#222222] pb-1"
          >
            home
          </ReactRouterDomLink>
          .
        </p>
      </MyContainer>
    </PageWrapper>
  );
}
