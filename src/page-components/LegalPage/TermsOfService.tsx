const domainName = "simonyates.ca";

export type TermsOfServiceProps = {
  /**
   * The root ID
   */
  id: string;
};

export function TermsOfService(props: TermsOfServiceProps) {
  const { id } = props;

  return (
    <div id={id}>
    <div className="text-sm uppercase text-gray-600 mt-[calc(2.0rem*3)]">
        Last updated: December 27, 2025
     </div>

      <h2 className="font-normal text-2xl leading-relaxed my-[calc(1.2599rem*1.0)]">
        Terms of&nbsp;Service
      </h2>

      <p className="font-normal text-lg leading-relaxed mt-[calc(1.2599rem)] text-gray-600">
        These Terms of Service apply to the website <strong>{domainName}</strong>,
        operated by <strong>Sybaris&nbsp;Analytics&nbsp;Corporation</strong>.
      </p>

      <p className="font-normal text-lg leading-relaxed mt-[calc(1.2599rem)] text-gray-600">
        By accessing or using this website, you agree to these&nbsp;Terms. If you do
        not agree, you should not use the&nbsp;site.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Use of the&nbsp;Website
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        You may use this website for lawful purposes only. You agree not to
        misuse the site, interfere with its operation, or attempt to access it
        in ways not intended or&nbsp;permitted.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        We may restrict or suspend access to the site if we reasonably believe
        it is being misused or used in violation of these Terms or applicable
        law.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Content and Intellectual&nbsp;Property
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        Unless otherwise stated, all content on this website — including text,
        images, illustrations, and design — is the property of{" "}
        Sybaris&nbsp;Analytics&nbsp;Corporation or its licensors
        and is protected by applicable copyright and intellectual property&nbsp;laws.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        You may view, read, and share links to content on this site for personal
        or informational&nbsp;purposes. You may not reproduce, modify, distribute, or
        use site content for commercial purposes without prior written
        permission, unless otherwise permitted by&nbsp;law.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        Nothing in these Terms grants you any rights to use trademarks, logos,
        or branding displayed on the&nbsp;site.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Third-Party Content and&nbsp;Links
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        This website may contain links to third-party websites or reference
        third-party content. Such content is provided for convenience or context
        only. We do not control or endorse third-party sites and are not
        responsible for their content, policies, or&nbsp;practices.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        No Warranties
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        The website and its content are provided{" "}
        <strong>&ldquo;as is&rdquo;</strong> and{" "}
        <strong>&ldquo;as available.&rdquo;</strong> While we strive for accuracy
        and quality, we make no guarantees regarding the completeness,
        reliability, or availability of the site or its&nbsp;content.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        To the extent permitted by law,{" "}
        Sybaris&nbsp;Analytics&nbsp;Corporation disclaims all
        warranties, express or&nbsp;implied.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Limitation of Liability
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        To the extent permitted by law,{" "}
        Sybaris&nbsp;Analytics&nbsp;Corporation will not be
        liable for any indirect, incidental, consequential, or special damages
        arising out of or related to your use of this&nbsp;website.
      </p>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        In all cases, our total liability for any claim related to the site will
        not exceed the amount you paid to use the site (if&nbsp;any).
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Changes to the Website or&nbsp;Terms
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        We may update the website or these Terms from time to time. Changes will
        be posted on this page and will take effect when published. Your
        continued use of the site after changes are posted constitutes
        acceptance of the updated&nbsp;Terms.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Governing&nbsp;Law
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        These Terms are governed by the laws of{" "}
        <strong>Ontario,&nbsp;Canada,</strong> excluding conflict of law
        principles. Any disputes arising from or related to
        these Terms or the website will be subject to the exclusive jurisdiction
        of the courts located in Toronto, Ontario,&nbsp;Canada.
      </p>

      <h3 className="font-normal text-xl leading-relaxed mt-[calc(1.2599rem*3)]">
        Contact
      </h3>

      <p className="font-normal text-base leading-normal mt-[calc(1.0rem)]">
        For questions about these Terms, please contact us through the&nbsp;website.
      </p>
    </div>
  );
}

export default TermsOfService;


