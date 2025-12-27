import Ul from "../../styling/ListsUnordered/Ul/Ul";
import Li from "../../styling/ListsUnordered/Li/Li";

const legalName = "Sybaris Analytics Corporation";
const domainName = "simonyates.ca";

export type PrivacyPolicyProps = {
  /**
   * The root ID
   */
  id: string;
};

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  const { id } = props;

  return (
    <div id={id}>
      <h2 className="font-normal text-2xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Privacy Policy
      </h2>

      <p className="font-normal text-base leading-normal mt-4">
        This Privacy Policy applies to the website <strong>{domainName}</strong>,
        operated by <strong>{legalName}</strong>.
      </p>

      <p className="font-normal text-base leading-normal mt-4">
        If you have any questions about this Privacy Policy, you may contact us
        through the website.
      </p>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Information We Collect, and How We Use It
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        We collect very limited information, only to operate and understand the
        basic use of the site.
      </p>

      <h4 className="font-normal text-lg leading-8 mt-6">
        Information you provide
      </h4>

      <p className="font-normal text-base leading-normal mt-4">
        If you contact us through the website or by email, we will receive the
        information you choose to provide (such as your name and email address).
        We use this information only to respond to your message and do not use
        it for marketing purposes.
      </p>

      <h4 className="font-normal text-lg leading-8 mt-6">
        Analytics and log information
      </h4>

      <p className="font-normal text-base leading-normal mt-4">
        We use Vercel Web Analytics to understand basic, aggregate usage of the
        site, such as:
      </p>

      <Ul next>
        <Li>pages visited</Li>
        <Li>referring sites</Li>
        <Li>general geographic region</Li>
      </Ul>

      <p className="font-normal text-base leading-normal mt-6">
        This analytics data:
      </p>

      <Ul next>
        <Li>does not use cookies</Li>
        <Li>does not use third-party advertising identifiers</Li>
        <Li>is collected in an anonymized, aggregated form</Li>
        <Li>is used solely to understand site usage and improve performance</Li>
      </Ul>

      <p className="font-normal text-base leading-normal mt-6">
        Like most websites, our hosting provider may also collect standard server
        log information (such as IP address, browser type, and request time) for
        security, reliability, and performance monitoring.
      </p>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Cookies
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        This website does not use cookies.
      </p>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Information Sharing
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        We do not sell, rent, or trade personal information.
      </p>

      <p className="font-normal text-base leading-normal mt-6">
        Information may be shared only in the following limited circumstances:
      </p>

      <Ul next>
        <Li>
          with service providers (such as hosting and analytics) strictly for
          operating the site
        </Li>
        <Li>when required to comply with applicable law or legal process</Li>
        <Li>
          to protect the rights, property, or safety of <strong>{legalName}</strong>{" "}
          or others
        </Li>
      </Ul>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Information Security
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        We take reasonable measures to protect information against unauthorized
        access, disclosure, or destruction. Access to information is limited to
        those who need it for site operation or correspondence.
      </p>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Accessing and Updating Information
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        If you have contacted us and wish to request correction or deletion of
        your information, you may do so by contacting us through the website. We
        will make reasonable efforts to comply, subject to legal and operational
        requirements.
      </p>

      <h3 className="font-normal text-xl leading-8 mt-[calc(1.2599rem*3)]">
        Changes to This Privacy Policy
      </h3>

      <p className="font-normal text-base leading-normal mt-6">
        This Privacy Policy may be updated from time to time. Any changes will
        be posted on this page. Changes will not reduce your rights without
        notice.
      </p>
    </div>
  );
}

export default PrivacyPolicy;


