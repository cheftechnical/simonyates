import * as React from 'react';
import Typography from '../../styling/Typography';
import Ul from '../../styling/ListsUnordered/Ul/intex';
import Li from '../../styling/ListsUnordered/Li/intex';
import {h2, h3, h4, paragraph, subtitle} from './defaults';

const legalName = 'Sybaris Analytics Corporation';
const tradeName = 'Sybaris';
const domainName = 'cheftechnical.com';
const address = '';

export default function PrivacyPolicy() {
	return (
		<div>
			<Typography {...h2}>
				Privacy Policy
			</Typography>

			<Typography next {...subtitle}>
				This Privacy Policy applies to all of the products, services and websites of {legalName}, or its
				subsidiaries or affiliated companies.
			</Typography>

			<Typography next {...subtitle}>
				If you have any questions about this Privacy Policy, please feel free to contact us trough our website,
				or write to us at:
			</Typography>

			<address>
				<Typography next {...paragraph}>
					Privacy Matters<br/>
					c/o {legalName}<br/>
					{address}
				</Typography>
			</address>

			<Typography next {...h3}>
				Information we collect, and how we use it:
			</Typography>

			<Typography next{...paragraph}>
				We may collect the following types of information:
			</Typography>

			<Ul>
				<Li>
					<strong>Information you provide</strong> &mdash; When you sign up for a {tradeName} Account, we
					ask you for personal information. We may combine the information you submit under your account
					with information from other {tradeName} services or third parties in order to provide you with a
					better experience and improve the quality of our services. For certain services, we may give
					you the opportunity to opt of combining such information. You can use the {domainName} Dashboard
					to learn more about the information associated with your Account.
				</Li>

				<Li>
					<strong>Cookies</strong> &mdash; When you visit {domainName}, we send one or more cookies to
					your computer or other device. We use cookies to improve the quality of our services, including
					for storing user preferences.
				</Li>

				<Li>
					<strong>Log information</strong> &mdash; When you access {tradeName} services via a browser,
					application or other client, our services automatically record certain information. These server
					logs may include information such as your web request, your interaction with a service,
					Internet Protocol address, browser type, browser language, the date and time of your request,
					and one or more cookies that may be uniquely identify your browser or your account.
				</Li>

				<Li>
					<strong>User communications</strong> &mdash; When you send email or other communications to
					{tradeName}, we may retain those communications in order to process your inquiries, respond to your
					requests and improve our services. When you send and receive SMS to or from one of services that
					provides SMS functionality, we may collect information associated with those messages, such as the
					phone number, the wireless carrier associated with the phone number, the content of the message, and
					the date and time of the transaction. We may use your email address to communicate with you about
					our services.
				</Li>

				<Li>
					<strong>Affiliated {legalName} Services on other sites</strong> &mdash; We offer some of our
					services on or through other web sites. Personal information that you provide to those sites may be
					sent to {legalName} in order to deliver the service. We process such information under this
					Privacy Policy.
				</Li>

				<Li>
					<strong>Third Party Applications</strong> &mdash; {legalName} may make available third party
					applications, such as gadgets or extensions, through its services. The information collected by
					{legalName} when you enable a third party application is processed under this Privacy Policy.
					Information collected by the third party application provider is governed by their privacy policies.
				</Li>

				<Li>
					<strong>Other sites</strong> &mdash; This Privacy Policy applies to {legalName} services only. We do
					not exercise control over other sites that include {tradeName} applications, products or services,
					or links from within our various services. These other sites may place their own cookies or other
					files on your computer, collect data or solicit personal information from you.
				</Li>
			</Ul>

			<Typography next {...paragraph}>
				In addition to the above, we may use the information we collect to:
			</Typography>

			<Ul>
				<Li>
					Provide, maintain, protect and improve our services (including advertising services) and develop new
					services; and
				</Li>
				<Li>
					Protect the rights or property of {legalName} or our users.
				</Li>
			</Ul>

			<Typography {...paragraph}>
				If we use this information in a manner different than the purpose for which it was collected, then we
				will ask for your consent prior to such use.
			</Typography>

			<Typography next {...paragraph}>
				{tradeName} process personal information on our services in the United States of America and other
				countries. In some cases, we process personal information out of your own country.
			</Typography>

			<Typography next {...h3}>
				Information Sharing
			</Typography>

			<Typography next {...paragraph}>
				{legalName} only shares personal information with other companies or individuals outside of {legalName}
				in the following limited circumstances:
			</Typography>

			<Ul>
				<Li>
					We have your consent. We require opt-in consent for the sharing of any sensitive
					personal information.
				</Li>

				<Li>
					We provide such information to our subsidiaries, affiliated companies or other trusted businesses or
					persons for the purpose of processing personal information on our behalf. We require that these
					parties agree to process such information based on our instructions and in compliance with this
					Privacy Policy and other appropriate confidentiality and security measures.
				</Li>

				<Li>
					We have a good faith belief that access, use, and preservation or disclosure of such information is
					reasonably necessary to (a) satisfy any applicable law, regulation, legal process or enforceable
					government request, (b) enforce applicable Terms of Service, including investigation of potential
					violations thereof, (c) detect, prevent, or otherwise address fraud, security or technical issues,
					or (d) protect against harm to the rights, property or safety of {legalName}, its users or the
					public as required or permitted by law.
				</Li>

				<Li>
					If {legalName} becomes involved in a merger, acquisition, or any form of sale of some or all of its
					assets, we will ensure the confidentiality of any personal information involved in such transactions
					and provide notice before personal information is transferred and becomes subject to a a different
					privacy policy.
				</Li>
			</Ul>

			<Typography next {...h3}>
				Information Security
			</Typography>

			<Typography next {...paragraph}>
				We take appropriate security measures to protect against unauthorized access to, or unauthorized
				alteration, disclosure or destruction of data. These include internal reviews of our data collection,
				storage and processing practices and security measures, including appropriate encryption and physical
				security measures to guard against unauthorized access to systems where we store personal data.
			</Typography>

			<Typography next {...paragraph}>
				We restrict access to personal information to {legalName} employees, contractors and agents who need to
				know that information in order to process it on our behalf. These individuals are bound by
				confidentiality obligations and may be subject to discipline, including termination and criminal
				prosecution, if they fail to meet these obligations.
			</Typography>

			<Typography next {...h3}>
				Accessing and updating personal information
			</Typography>

			<Typography next {...paragraph}>
				When you use {tradeName} services, we make good faith efforts to provide you with access to your
				personal information and either correct this data if it is inaccurate or delete such data at your
				request if it is not otherwise required to be retained by law or for legitimate business purposes. We
				ask individual users to identify themselves and the information requested to be accessed, corrected or
				removed before processing such requests, and we may decline to process requests that are unreasonably
				repetitive or systematic, require disproportionate technical effort, jeopardize the privacy of others,
				or would be extremely impractical (for instance, requests concerning information residing on backup
				archives), or for which access is not otherwise required. In any case where we provide information
				access and correction, we perform this services free of charge, except if doing so would require a
				disproportionate effort. Because of the way we maintain certain services, after you delete your
				information, residual copies make take a period of time before they are deleted from our active
				servers and may remain in our backup systems. Please review the services Help Centers for
				more information.
			</Typography>

			<Typography next {...h3}>
				Enforcement
			</Typography>

			<Typography next {...paragraph}>
				{tradeName} regularly reviews its compliance with this Privacy Policy. When we receive formal written
				complaints, it is {tradeName}&rsquo;s policy to contact the complaining user regarding his or her
				concerns. We will cooperate with the appropriate regulatory authorities, including local data protection
				authorities, to resolve any complains regarding the transfer of personal data that cannot be resolved
				between {legalName} and an individual.
			</Typography>

			<Typography next {...h3}>
				Changes to this Privacy Policy
			</Typography>

			<Typography next {...paragraph}>
				Please note that this Privacy Policy may change from time to time. We will not reduce your rights under
				this Privacy Policy without your explicit consent. We will post any Privacy Policy changes on this page
				and, if the changes are significant, we will provide a more prominent notice (including, for certain
				services, email notification of Privacy Policy changes). We will also keep prior versions of this
				Privacy Policy in an archive for your review.
			</Typography>
		</div>
	);
};
