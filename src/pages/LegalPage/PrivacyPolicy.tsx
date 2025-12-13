import Ul from "../../styling/ListsUnordered/Ul/Ul";
import Li from "../../styling/ListsUnordered/Li/Li";

const legalName = "Sybaris Analytics Corporation";
const tradeName = "Sybaris";
const domainName = "simonyates.ca";
const address = "";

export type PrivacyPolicyProps = {
  /**
   * The root ID
   */
  id: string;
}

export function PrivacyPolicy(props: PrivacyPolicyProps) {
  const { id } = props;

  return (
    <div id={id}>
      <h1 className="font-normal text-[34px] leading-[56px] tracking-[0.25px]">
        Privacy Policy
      </h1>

      <p className="font-normal text-[14px] leading-normal tracking-[0.25px] mt-4">
        This Privacy Policy applies to all of the products, services and
        websites of {legalName}, or its subsidiaries or
        affiliated&nbsp;companies.
      </p>

      <p className="font-normal text-[14px] leading-normal tracking-[0.25px] mt-4">
        If you have any questions about this Privacy Policy, please feel free to
        contact us trough our website, or write to us&nbsp;at:
      </p>

      <address>
        <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
          Privacy Matters
          <br />
          c/o {legalName}
          <br />
          {address}
        </p>
      </address>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Information we collect, and how we use&nbsp;it:
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        We may collect the following types of&nbsp;information:
      </p>

      <Ul next>
        <Li>
          <strong>Information you provide</strong> &mdash; When you sign up for
          a {tradeName} Account, we ask you for personal information. We may
          combine the information you submit under your account with information
          from other {tradeName} services or third parties in order to provide
          you with a better experience and improve the quality of our services.
          For certain services, we may give you the opportunity to opt of
          combining such information. You can use the {domainName} Dashboard to
          learn more about the information associated with your&nbsp;Account.
        </Li>

        <Li>
          <strong>Cookies</strong> &mdash; When you visit {domainName}, we send
          one or more cookies to your computer or other device. We use cookies
          to improve the quality of our services, including for storing
          user&nbsp;preferences.
        </Li>

        <Li>
          <strong>Log information</strong> &mdash; When you access {tradeName}{" "}
          services via a browser, application or other client, our services
          automatically record certain information. These server logs may
          include information such as your web request, your interaction with a
          service, Internet Protocol address, browser type, browser language,
          the date and time of your request, and one or more cookies that may be
          uniquely identify your browser or your&nbsp;account.
        </Li>

        <Li>
          <strong>User communications</strong> &mdash; When you send email or
          other communications to
          {tradeName}, we may retain those communications in order to process
          your inquiries, respond to your requests and improve our services.
          When you send and receive SMS to or from one of services that provides
          SMS functionality, we may collect information associated with those
          messages, such as the phone number, the wireless carrier associated
          with the phone number, the content of the message, and the date and
          time of the transaction. We may use your email address to communicate
          with you about our&nbsp;services.
        </Li>

        <Li>
          <strong>Affiliated {legalName} Services on other sites</strong>{" "}
          &mdash; We offer some of our services on or through other web sites.
          Personal information that you provide to those sites may be sent to{" "}
          {legalName} in order to deliver the service. We process such
          information under this Privacy&nbsp;Policy.
        </Li>

        <Li>
          <strong>Third Party Applications</strong> &mdash; {legalName} may make
          available third party applications, such as gadgets or extensions,
          through its services. The information collected by
          {legalName} when you enable a third party application is processed
          under this Privacy Policy. Information collected by the third party
          application provider is governed by their privacy&nbsp;policies.
        </Li>

        <Li>
          <strong>Other sites</strong> &mdash; This Privacy Policy applies to{" "}
          {legalName} services only. We do not exercise control over other sites
          that include {tradeName} applications, products or services, or links
          from within our various services. These other sites may place their
          own cookies or other files on your computer, collect data or solicit
          personal information from&nbsp;you.
        </Li>
      </Ul>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        In addition to the above, we may use the information we collect&nbsp;to:
      </p>

      <Ul next>
        <Li>
          Provide, maintain, protect and improve our services (including
          advertising services) and develop new services;&nbsp;and
        </Li>
        <Li>
          Protect the rights or property of {legalName} or our&nbsp;users.
        </Li>
      </Ul>

      <p className="font-normal text-base leading-normal tracking-[0.5px]">
        If we use this information in a manner different than the purpose for
        which it was collected, then we will ask for your consent prior to
        such&nbsp;use.
      </p>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        {tradeName} process personal information on our services in the Canada
        and other countries. In some cases, we process personal information out
        of your own&nbsp;country.
      </p>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Information Sharing
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        {legalName} only shares personal information with other companies or
        individuals outside of {legalName}
        in the following limited&nbsp;circumstances:
      </p>

      <Ul next>
        <Li>
          We have your consent. We require opt-in consent for the sharing of any
          sensitive personal&nbsp;information.
        </Li>

        <Li>
          We provide such information to our subsidiaries, affiliated companies
          or other trusted businesses or persons for the purpose of processing
          personal information on our behalf. We require that these parties
          agree to process such information based on our instructions and in
          compliance with this Privacy Policy and other appropriate
          confidentiality and security&nbsp;measures.
        </Li>

        <Li>
          We have a good faith belief that access, use, and preservation or
          disclosure of such information is reasonably necessary to (a) satisfy
          any applicable law, regulation, legal process or enforceable
          government request, (b) enforce applicable Terms of Service, including
          investigation of potential violations thereof, (c) detect, prevent, or
          otherwise address fraud, security or technical issues, or (d) protect
          against harm to the rights, property or safety of {legalName}, its
          users or the public as required or permitted by&nbsp;law.
        </Li>

        <Li>
          If {legalName} becomes involved in a merger, acquisition, or any form
          of sale of some or all of its assets, we will ensure the
          confidentiality of any personal information involved in such
          transactions and provide notice before personal information is
          transferred and becomes subject to a a different privacy&nbsp;policy.
        </Li>
      </Ul>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Information Security
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        We take appropriate security measures to protect against unauthorized
        access to, or unauthorized alteration, disclosure or destruction of
        data. These include internal reviews of our data collection, storage and
        processing practices and security measures, including appropriate
        encryption and physical security measures to guard against unauthorized
        access to systems where we store personal&nbsp;data.
      </p>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        We restrict access to personal information to {legalName} employees,
        contractors and agents who need to know that information in order to
        process it on our behalf. These individuals are bound by confidentiality
        obligations and may be subject to discipline, including termination and
        criminal prosecution, if they fail to meet these&nbsp;obligations.
      </p>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Accessing and updating personal&nbsp;information
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        When you use {tradeName} services, we make good faith efforts to provide
        you with access to your personal information and either correct this
        data if it is inaccurate or delete such data at your request if it is
        not otherwise required to be retained by law or for legitimate business
        purposes. We ask individual users to identify themselves and the
        information requested to be accessed, corrected or removed before
        processing such requests, and we may decline to process requests that
        are unreasonably repetitive or systematic, require disproportionate
        technical effort, jeopardize the privacy of others, or would be
        extremely impractical (for instance, requests concerning information
        residing on backup archives), or for which access is not otherwise
        required. In any case where we provide information access and
        correction, we perform this services free of charge, except if doing so
        would require a disproportionate effort. Because of the way we maintain
        certain services, after you delete your information, residual copies
        make take a period of time before they are deleted from our active
        servers and may remain in our backup systems. Please review the services
        Help Centers for more&nbsp;information.
      </p>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Enforcement
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        {tradeName} regularly reviews its compliance with this Privacy Policy.
        When we receive formal written complaints, it is {tradeName}&rsquo;s
        policy to contact the complaining user regarding his or her concerns. We
        will cooperate with the appropriate regulatory authorities, including
        local data protection authorities, to resolve any complains regarding
        the transfer of personal data that cannot be resolved between{" "}
        {legalName} and an&nbsp;individual.
      </p>

      <h2 className="font-normal text-xl leading-8 mt-8">
        Changes to this Privacy&nbsp;Policy
      </h2>

      <p className="font-normal text-base leading-normal tracking-[0.5px] mt-6">
        Please note that this Privacy Policy may change from time to time. We
        will not reduce your rights under this Privacy Policy without your
        explicit consent. We will post any Privacy Policy changes on this page
        and, if the changes are significant, we will provide a more prominent
        notice (including, for certain services, email notification of Privacy
        Policy changes). We will also keep prior versions of this Privacy Policy
        in an archive for your&nbsp;review.
      </p>
    </div>
  );
}

export default PrivacyPolicy;