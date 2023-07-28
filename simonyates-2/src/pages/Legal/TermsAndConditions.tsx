import {Link, Typography} from "@mui/material";
import {Link as ReactRouterDomLink} from 'react-router-dom';

const legalName = 'Sybaris Analytics Corporation';
const tradeName = 'Sybaris';
const address = '';

export default function TermsAndConditions() {
	return (
		<div>
			<Typography component="h2" variant="primaryH2">
				Terms of Service
			</Typography>

			<Typography component="p" variant="primarySubtitleNext">
				Thanks for using our products and services (&ldquo;Services&rdquo;). The Services are provided by
				{legalName}, located&nbsp;at:
			</Typography>

			<address>
				<Typography component="p" variant="primaryBodyNext">
					{legalName}<br/>
					{address}
				</Typography>
			</address>

			<Typography component="p" variant="primaryBodyNext">
				By using our Services, you are agreeing to these terms. Please read them&nbsp;carefully.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Using our&nbsp;Services
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				You must follow any policies made available to you within the&nbsp;Services.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				Don&rsquo;t misuse our Services. For example, don&rsquo;t interfere with our Services or try to
				access them using a method other than the interface and the instructions that we provide. You may
				use our Services only as permitted by law, including applicable export and re-export control laws
				and regulations. We may suspend or stop providing our Services to you if you do not comply with our
				terms or policies or if we are investigating suspected&nbsp;misconduct.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				Using our Services does not give you ownership of any intellectual property rights in our Services
				or the content you access. You may not use content from our Services unless you obtain permission
				from its owner or are otherwise permitted by law. These terms do not grant you the right to use any
				branding or logos used in our Services. Don&rsquo;t remove, obscure, or alter any legal notices
				displayed in or along with our&nbsp;Services.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				Our Services display some content that is not {tradeName}&rsquo;s. This content is the sole
				responsibility of the entity that makes it available. We may review content to determine whether it
				is illegal or violates our policies, and we may remove or refuse to display content tat we
				reasonably believe violates our policies or the law. But that does not necessarily mean that we
				review content, so please don&rsquo;t assume that we&nbsp;do.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				In connection with your use of Services, we may send you service announcements, administrative
				messages, and other information. You may opt out of some of those&nbsp;communications.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Privacy and Copyright Protection
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				{tradeName}&rsquo;s privacy policies explain how we treat your personal data and protect your privacy
				when you use our Services. By using our Services, you agree that {tradeName} can use such data in
				accordance with our <Link component={ReactRouterDomLink} to="/legal#privacy-policy" target="_blank">
				privacy&nbsp;policies</Link>.
			</Typography>

			<Typography component="h4" variant="primaryH4Next">
				About Software in our Services
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				When a Service requires or includes downloadable software, this software may update automatically on
				your device once a new version or feature is available. Some Services may let you adjust your
				automatic update&nbsp;settings.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				{tradeName} gives you a personal, worldwide, royalty-free, non-assignable and non-exclusive license to
				use the software provided to you by {tradeName} as part of the Services. This license is for the sole
				purpose of enabling you to use and enjoy the benefit of the Services as provided by {tradeName}, in
				the manner permitted by these terms. You may not copy, modify, distribute, sell or lease any part of our
				Services or included software, nor may you reverse engineer or attempt to extract the source code of
				that software, unless laws prohibit those restrictions or you have our written&nbsp;permission.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				Open source software is important to us. Some software used in our Services may be offered under an
				open source license that we will make available to you. There may be provisions in the open source
				license that expressly override some of these&nbsp;terms.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Modifying and Terminating our&nbsp;Services
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				We are constantly changing and improving our Services. We may add or remove functionalities or
				features, and we may suspend or stop a Service&nbsp;altogether.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				You can stop using our Services at any time, although we&rsquo;ll be sorry to see you
				go. {tradeName} may also stop providing Services to you, or add or create new limits to our Services at
				any&nbsp;time.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				We believe that you own your data and preserving your access to such data is important. If we
				discontinue a Service, where reasonably possible, we will give you a reasonable advance notice and
				chance to get information out of that&nbsp;Service.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Our Warranties and&nbsp;Disclaimers
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				We provide our Services using a commercially reasonable level of skill and care and we hope that you
				will enjoy using them. But there are certain things that we don&rsquo;t promise about our&nbsp;Services.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				OTHER THAN AS EXPRESSLY SET OUT IN THESE TERMS OR ADDITIONAL TERMS, NEITHER {tradeName} NOR ITS
				SUPPLIERS OR DISTRIBUTORS MAKE ANY SPECIFIC PROMISES ABOUT THE SERVICES. FOR EXAMPLE, WE DON’T MAKE ANY
				COMMITMENTS ABOUT THE CONTENT WITHIN THE SERVICES, THE SPECIFIC FUNCTION OF THE SERVICES, OR THEIR
				RELIABILITY, AVAILABILITY, OR ABILITY TO MEET YOUR NEEDS. WE PROVIDE THE SERVICES
				&ldquo;AS&nbsp;IS&rdquo;.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				SOME JURISDICTIONS PROVIDE FOR CERTAIN WARRANTIES, LIKE THE IMPLIED WARRANTY OF MERCHANTABILITY,
				FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. TO THE EXTENT PERMITTED BY LAW, WE EXCLUDE
				ALL&nbsp;WARRANTIES.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Liability for our&nbsp;Services
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				WHEN PERMITTED BY LAW, {tradeName.toUpperCase()}, AND {tradeName.toUpperCase()}’S SUPPLIERS AND
				DISTRIBUTORS, WILL NOT BE RESPONSIBLE FOR LOST PROFITS, REVENUES, OR DATA, FINANCIAL LOSSES OR INDIRECT,
				SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE&nbsp;DAMAGES.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				TO THE EXTENT PERMITTED BY LAW, THE TOTAL LIABILITY OF {tradeName.toUpperCase()}, AND ITS SUPPLIERS AND
				DISTRIBUTORS, FOR ANY CLAIM UNDER THESE TERMS, INCLUDING FOR ANY IMPLIED WARRANTIES, IS LIMITED TO THE
				AMOUNT YOU PAID US TO USE THE SERVICES (OR, IF WE CHOOSE, TO SUPPLYING YOU THE SERVICES&nbsp;AGAIN).
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				IN ALL CASES, {tradeName.toUpperCase()}, AND ITS SUPPLIERS AND DISTRIBUTORS, WILL NOT BE LIABLE FOR ANY LOSS OR
				DAMAGE THAT IS NOT REASONABLY&nbsp;FORESEEABLE.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				Business uses of our&nbsp;Services
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				If you are using our Services on behalf of a business, that business accepts these terms. It will
				hold harmless and indemnify {tradeName} and its affiliates, officers, agents, and employees from any
				claim, suit or action arising from or related to the use of the Services or violation of these
				terms, including any liability or expense arising from claims, losses, damages, suits, judgments,
				litigation costs and attorneys&rsquo;&nbsp;fees.
			</Typography>

			<Typography component="h3" variant="primaryH3Next">
				About these Terms
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				We may modify these terms or any additional terms that apply to a Service to, for example, reflect
				changes to the law or changes to our Services. You should look at the terms regularly. We&rsquo;ll
				post notice of modifications to these terms on this page. We&rsquo;ll post notice of modified
				additional terms in the applicable Service. Changes will not apply retroactively and will become
				effective no sooner than fourteen days after they are posted. However, changes addressing new
				functions for a Service or changes made for legal reasons will be effective immediately. If you do
				not agree to the modified terms for a Service, you should discontinue your use of that&nbsp;Service.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				If there is a conflict between these terms and the additional terms, the additional terms will
				control for that&nbsp;conflict.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				These terms control the relationship between {legalName} and you. They do not create any third party
				beneficiary&nbsp;rights.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				If you do not comply with these terms, and we don&rsquo;t take action right away, this doesn&rsquo;t
				mean that we are giving up any rights that we may have (such as taking action in the&nbsp;future).
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				If it turns out that a particular term is not enforceable, this will not affect any other&nbsp;terms.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				The laws of Ontario, Canada, excluding Ontario&rsquo;s conflict of laws rules, will apply to any
				disputes arising out of or relating to these terms or the Services. All claims arising out of or
				relating to these terms or the Services will be litigated exclusively in the federal or provincial
				courts of Toronto, Ontario, Canada, and you and {legalName} consent to personal jurisdiction in
				those&nbsp;courts.
			</Typography>

			<Typography component="p" variant="primaryBodyNext">
				For information about how to contact {tradeName}, please visit our <Link
				component={ReactRouterDomLink} to="/contact" target="_blank">contact&nbsp;page</Link>.
			</Typography>
		</div>
	);
};
