import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Grid} from '@material-ui/core';
import {SectionItem} from '../../../components/Section/SectionItem';
import NavRight from '../../../components/NavRight';
import Sections from '../../../components/Sections';
import Section from '../../../components/Section';
import WorkAtHeader from '../components/WorkAtHeader';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import Typography from '../../../styling/Typography';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';
import Callout from '../../../components/Callout';
import MyContainer from '../../../styling/MyContainer';
import MyGridContainer from '../../../styling/MyGridContainer';
import WorkAtLogo from '../components/WorkAtLogo';
import Quote from '../../../components/Quote';

export default function JibDesignAndAdvertising() {
	const [sections, setSections] = React.useState();

	const handleChange = React.useCallback((newValue: SectionItem[]) => {
		setSections(newValue);
	}, []);

	return (
		<DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
			<MyContainer>
				<MyGridContainer>
					{/* Avatar */}
					<Grid item md={1} xs={2}>
						<WorkAtLogo brand="jib-design-and-advertising" variant="default"/>
					</Grid>

					{/* Content */}
					<Grid item md={6} xs={12}>
						<Sections onChange={handleChange}>
							<Section id="intro" name="Intro">
								<WorkAtHeader
									employer="Jib Design & Advertising"
									role="Technical Director"
									when="2007–2008"
									where="Toronto, ON, Canada"
								/>
								<WorkAtDescription>
									Design &amp; advertising agency in&nbsp;Toronto.
								</WorkAtDescription>
							</Section>

							<Section id="notable-projects" name="Notable Projects">
								<WorkAtSectionTitle>
									Notable Projects
								</WorkAtSectionTitle>
								<WorkAtProjects>
									<WorkAtProject name="Apple Canada Introduces iPhone" when="">
										<Typography group="primary" variant="body" weight="regular">
											When Apple launched the original iPhone in Canada, they partnered with the Montreal Gazette to feature their online newspaper in its live press demo. This was an extremely high-profile event for Apple, and they couldn&rsquo;t risk any hiccups from a poorly rendering page view. So I built their replica website for this&nbsp;demo.
										</Typography>
										<Typography next group="primary" variant="body" weight="regular">
											As a show of thanks, the partners of Jib gave me an iPhone&mdash;6 months before it was available in Canada. Although I don&rsquo;t use it anymore, I still have it (box included). They&rsquo;re quite a collector&rsquo;s item&nbsp;now.
										</Typography>
									</WorkAtProject>

									<WorkAtProject next name="Apple Canada's Online Store for Students">
										<Typography group="primary" variant="body" weight="regular">
											Apple supports students with special pricing through its Apple Education Store. Access to this store required users to register their student ID with Apple to verity their eligibility. This feature was originally written in WebObjects, and I was tasked with re-writing everything in PHP to support modern &ldquo;Web 2.0&rdquo;&nbsp;features.
										</Typography>
									</WorkAtProject>

									<WorkAtProject next name="http://www.delaila.co.uk">
										<Typography group="primary" variant="body" weight="regular">
											Development of an online jewelry store with a custom e-commerce engine that integrated with HSBC and managed through a custom–built content management system&nbsp;(CMS).
										</Typography>
									</WorkAtProject>

									<WorkAtProject next name="http://www.eloundabeach.gr">
										<Typography group="primary" variant="body" weight="regular">
											Elounda Beach is a luxury hotel in Greece, with a single night&rsquo;s stay costing upwards of $5,000. I built a custom, multi-lingual CMS and integrated a third-party reservation&nbsp;system.
										</Typography>
									</WorkAtProject>

									<WorkAtProject next name="http://www.verity.ca">
										<Typography group="primary" variant="body" weight="regular">
											Verity is an exclusive women's club in Toronto, that provides support for the advancement of women through professional, social and personal opportunities. I built the website and the supporting&nbsp;CMS.
										</Typography>
									</WorkAtProject>
								</WorkAtProjects>

								<Callout noBottomGutter list={[
									'PHP',
									'Javascript + jQuery',
									'HTML + CSS',
									'MySQL',
									'Moneris'
								]}/>
							</Section>

							<Section id="recognition" name="Recognition">
								<WorkAtSectionTitle>
									Recognition
								</WorkAtSectionTitle>

								<Quote source="Alain Brisard, Web Communications Producer, Apple Canada Inc.">
									I do appreciate the good work you&rsquo;ve done. I am very pleased with the
									application and your coding. Logical. Commented. Made it much easier to
									go&nbsp;through.
								</Quote>

								<Quote next source="Martin Yeung, Marketing Manager, Verity Prop Ltd.">
									Thanks for your help, much appreciated. Now the website will in a higher gear and
									better for us admins and members to&nbsp;use.
								</Quote>

							</Section>
						</Sections>
					</Grid>

					{/* Gutter */}
					<Grid item md={2}/>

					{/* Navigation */}
					<Grid item md={3}>
						<NavRight sections={sections}/>
					</Grid>
				</MyGridContainer>
			</MyContainer>
		</DefaultLayout>
	);
};
