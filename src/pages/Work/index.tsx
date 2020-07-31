import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Experience from './Experience';
import Typography from '../../styling/Typography';
import {Grid} from '@material-ui/core';
import Li from '../../styling/ListsUnordered/Li/intex';
import Ul from '../../styling/ListsUnordered/Ul/intex';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../components/Logo';
import MyContainer from '../../styling/MyContainer';
import MyGridContainer from '../../styling/MyGridContainer';

const useStyles = makeStyles((theme) => ({
	employerFirst: {
		marginTop: theme.spacing(84 / 8)
	},
	employerNext: {
		marginTop: theme.spacing(79 / 8)
	},
	gridItemLogo: {
		paddingLeft: theme.spacing(8 / 8),
	}
}));

export default function Work() {
	const classes = useStyles();

	return (
		<DefaultLayout title="Work" top="work">
			<MyContainer>
				<MyGridContainer>
					<Grid item xs={6}>
						<Typography group="primary" variant="h2" weight="regular">
							Here is a glimpse of my life,<br/>
							mostly as a programmer.
						</Typography>
					</Grid>
				</MyGridContainer>

				{/* RBC */}
				<MyGridContainer className={classes.employerFirst}>
					<Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="rbc" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="RBC"
                            href="/work/rbc"
                            role="Full-Stack Developer"
                            when="2018–Present"
                        >
							<Ul>
								<Li>
									Built a chatbot to reduce time the team spends responding to customer&nbsp;questions
								</Li>
								<Li>
									Built self-healing tools that automate SRE&nbsp;tasks
								</Li>
								<Li>
									Designed and built custom reporting tools used by over 8,000 engineers at RBC for
									monitoring critical infrastructure and performing incident&nbsp;forensics
								</Li>
								<Li>
									Wrote a machine learning model with scikit-learn to detect anomalies in system logs
									and incident&nbsp;reports
								</Li>
								<Li>
									Advised multiple teams across RBC on Elasticsearch&nbsp;optimization
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

				{/* Uncharted Software */}
				<MyGridContainer className={classes.employerNext}>
                    <Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="uncharted-software" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="Uncharted Software"
                            href="/work/uncharted-software"
                            role="Senior Software Architect"
                            when="2015–2018"
                        >
							<Ul>
								<Li>
									Worked with data scientists to develop early prototypes of a new causal
									graph&mdash;including all visualization. This tool was used by the data scientists
									to refine their models and product designers to refine their&nbsp;architecture.
								</Li>
								<Li>
									Implemented state-of-the-art Natural Language Processing (NLP) technologies to
									perform Named-Entity Recognition (NER) and feature extraction of unstructured and
									semi-structured&nbsp;data
								</Li>
								<Li>
									Extended capabilities of critical data pipelines built in Scala, Spark, HBase,
									Hadoop, and&nbsp;Elasticsearch
								</Li>
								<Li>
									Improved performance and search results by optimizing Elasticsearch schemas
									and&nbsp;queries
								</Li>
								<Li>
									Converted legacy Java code to&nbsp;Scala
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

				{/* Mayo Clinic */}
				<MyGridContainer className={classes.employerNext}>
                    <Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="mayo-clinic" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="Mayo Clinic"
                            href="/work/mayo-clinic"
                            role="Software Engineer"
                            when="2014–2015"
                        >
							<Ul>
								<Li>
									Co-authored <em>&ldquo;Patient-Like-Mine: A Real Time, Visual Analytics Tool for
									Clinical Decision Support&rdquo;</em> and poster presentation for the 2015 IEEE
									International Conference on Big&nbsp;Data
								</Li>
								<Li>
									Built software to visualize and analyze patient medical data for clinical
									decision&nbsp;support
								</Li>
								<Li>
									Built pipeline to transform data from HL7 V2 RIM and FHIR schemas to parent/child
									Elasticsearch&nbsp;documents
								</Li>
								<Li>
									Re-wrote experimental prototype software for&nbsp;production
								</Li>
								<Li>
									Optimized Elasticsearch queries for speed and&nbsp;searchability
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

				{/* Genworth Canada */}
				<MyGridContainer className={classes.employerNext}>
                    <Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="genworth-canada" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="Genworth Canada"
                            href="/work/genworth-canada"
                            role="Developer"
                            when="2014–2015"
                        >
							<Ul>
								<Li>
									Designed system to automatically detect names and addresses which may refer to the
									same subject, but use different&nbsp;spelling
								</Li>
								<Li>
									Hosted regular company-wide Lunch-and-Learn&rsquo;s on Elasticsearch and
									demonstrated its&nbsp;applications
								</Li>
								<Li>
									Saved the company multi-thousand dollars of annual expenditures by identifying an
									area of improvement&mdash;it eliminated the need for a third-party
									vendor&nbsp;service
								</Li>
								<Li>
									Became the &ldquo;go-to-guy&rdquo; on all things&nbsp;Elasticsearch
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

				{/* Infomart */}
				<MyGridContainer className={classes.employerNext}>
                    <Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="infomart" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="Infomart"
                            href="/work/infomart"
                            role="Architect & Lead Developer"
                            when="2012–2014"
                        >
							<Ul>
								<Li>
									Designed the software and data architecture that replaced Microsoft SQL Server
									with&nbsp;Elasticsearch
								</Li>
								<Li>
									Designed Elasticsearch document schemas and wrote all&nbsp;queries
								</Li>
								<Li>
									Built the development team from the ground up&mdash;managed the hiring process from
									writing job descriptions and interviewing candidates to selecting finalists. Once
									hired, I would onboard them and designate scopes of work for which they would be
									responsible&nbsp;for.
								</Li>
								<Li>
									Wrote the development style guide and best practices for the&nbsp;team
								</Li>
								<Li>
									Built custom data visualization charts in SVG to meet specific design requirements
									of the&nbsp;software
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

				{/* Jib Design & Advertising */}
				<MyGridContainer className={classes.employerNext}>
                    <Grid item xs={1} className={classes.gridItemLogo}>
						<Logo brand="jib-design-and-advertising" variant="default"/>
					</Grid>
					<Grid item xs={6}>
						<Experience
                            employer="Jib Design & Advertising"
                            href="/work/jib-design-and-advertising"
                            role="Technical Director"
                            when="2007–2008"
                        >
							<Ul>
								<Li>
									Wrote the university registration system for the Apple Education Store
									on&nbsp;apple.ca
								</Li>
								<Li>
									Wrote and deployed all HTML emails for Apple&nbsp;Canada
								</Li>
								<Li>
									Conceptualized, designed, and wrote internal software for managing
									client&nbsp;assets
								</Li>
								<Li>
									Reverse-engineered Google PageRank for improved SEO&nbsp;strategies
								</Li>
							</Ul>
						</Experience>
					</Grid>
				</MyGridContainer>

			</MyContainer>
		</DefaultLayout>
	);
};
