import { Link as ReactRouterDomLink } from "react-router-dom";
import MyContainer from "../../styling/MyContainer/MyContainer";
import PageWrapper from "../../components/PageWrapper";

export default function PageNotFoundPage() {
  return (
    <PageWrapper title="404: Page Not Found">
      <MyContainer>
        <h1 className="font-normal leading-none mt-[272px] text-7xl tracking-[0.5px]">
          404
        </h1>
        <p className="font-normal leading-normal mb-[388px] mt-[3.1748rem] text-gray-600 text-xl">
          Sorry, that page doesn&rsquo;t&nbsp;exist.
          <br />
          But you can navigate back to&nbsp;
          <ReactRouterDomLink
            to="/"
            className="font-bold text-gray-900 pb-1 hover:text-blue-500 hover:underline"
          >
            home
          </ReactRouterDomLink>
          .
        </p>
      </MyContainer>
    </PageWrapper>
  );
}
