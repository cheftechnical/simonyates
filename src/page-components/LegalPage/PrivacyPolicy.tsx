const domainName = "simonyates.ca";

const ulClasses = "pt-6";
const liClasses =
  "font-normal text-base leading-normal mb-[calc(1.0rem)] ml-[21px] pl-0 list-none text-gray-900 list-item-custom-bullet";

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
      <div className="text-sm uppercase text-gray-600 xb-[calc(1.2599rem)]">
        Last updated: December 27, 2025
      </div>

      <h2 className="font-normal text-2xl leading-relaxed my-[calc(1.2599rem*1.0)]">
        Privacy Policy
      </h2>

      <p className="font-normal text-lg leading-relaxed xmt-[calc(1.2599rem)] text-gray-600">
        This Privacy Policy applies to the website <strong>{domainName}</strong>,
        operated by <strong>Sybaris Analytics Corporation</strong>.
      </p>

      <p className="font-normal text-lg leading-relaxed mt-[calc(1.2599rem)] text-gray-600">
        If you have any questions about this Privacy Policy, you may contact us
        through the website.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Information We Collect, and How We Use It
      </h3>

      <p className="font-normal text-base leading-normal mt-4">
        We collect <strong>very limited information</strong>, only to operate and
        understand the basic use of the site.
      </p>

      <h4 className="font-normal text-lg leading-normal mt-[calc(1.2599rem*2)]">
        Information you provide
      </h4>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        If you contact us through the website or by email, we will receive the
        information you choose to provide (such as your name and email address).
        We use this information only to respond to your message and do not use
        it for marketing purposes.
      </p>

      <h4 className="font-normal text-lg leading-normal mt-[calc(1.2599rem*2)]">
        Analytics and log information
      </h4>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        We use <strong>Vercel Web Analytics</strong> to understand basic,
        aggregate usage of the site, such as:
      </p>

      <ul className={ulClasses}>
        <li className={liClasses}>pages visited</li>
        <li className={liClasses}>referring sites</li>
        <li className={liClasses}>general geographic region</li>
      </ul>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem*1.5*1)]">
        This analytics data:
      </p>

      <ul className={ulClasses}>
        <li className={liClasses}>
          does <strong>not</strong> use cookies
        </li>
        <li className={liClasses}>
          does <strong>not</strong> use third-party advertising identifiers
        </li>
        <li className={liClasses}>is collected in an anonymized, aggregated form</li>
        <li className={liClasses}>
          is used solely to understand site usage and improve performance
        </li>
      </ul>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem*1.5)]">
        Like most websites, our hosting provider may also collect standard server
        log information (such as IP address, browser type, and request time) for
        security, reliability, and performance monitoring.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Cookies
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        This website does <strong>not</strong> use cookies.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Information Sharing
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        We do not sell, rent, or trade personal information.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        Information may be shared only in the following limited circumstances:
      </p>

      <ul className={ulClasses}>
        <li className={liClasses}>
          with service providers (such as hosting and analytics) strictly for
          operating the site
        </li>
        <li className={liClasses}>
          when required to comply with applicable law or legal process
        </li>
        <li className={liClasses}>
          to protect the rights, property, or safety of{" "}
          Sybaris Analytics Corporation or others
        </li>
      </ul>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Information Security
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        We take reasonable measures to protect information against unauthorized
        access, disclosure, or destruction. Access to information is limited to
        those who need it for site operation or correspondence.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Accessing and Updating Information
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        If you have contacted us and wish to request correction or deletion of
        your information, you may do so by contacting us through the website. We
        will make reasonable efforts to comply, subject to legal and operational
        requirements.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Changes to This Privacy Policy
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        This Privacy Policy may be updated from time to time. Any changes will
        be posted on this page. Changes will not reduce your rights without
        notice.
      </p>
    </div>
  );
}

export default PrivacyPolicy;


