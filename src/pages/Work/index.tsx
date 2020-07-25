import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Experience from './Experience';
import Typography from '../../styling/Typography';
import {Container, Grid} from '@material-ui/core';
import Li from '../../styling/ListsUnordered/Li/intex';
import Ul from '../../styling/ListsUnordered/Ul/intex';
import {makeStyles} from '@material-ui/core/styles';
import Logo from '../../components/Logo';

const useStyles = makeStyles((theme) => ({
    employerFirst: {
        marginTop: theme.spacing(84/8)
    },
    employerNext: {
        marginTop: theme.spacing(79/8)
    }
}));

export default function Work() {
    const classes = useStyles();

    return (
        <DefaultLayout title="Work" top="work">
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography group="primary" variant="h2" weight="regular">
                            Here is a glimpse of my life,<br/>
                            mostly as a programmer.
                        </Typography>
                    </Grid>
                </Grid>

                {/* RBC */}
                <Grid container className={classes.employerFirst} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="rbc" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="RBC" href="/work/rbc" role="Full-Stack Developer" when="2018–Present">
                            <Ul>
                                <Li>Built a chatbot to reduce time the team spends responding to customer questions</Li>
                                <Li>Built self-healing tools that automate SRE tasks</Li>
                                <Li>Designed and built custom reporting tools used by over 8,000 engineers at RBC for monitoring critical infrastructure and performing incident forensics</Li>
                                <Li>Used machine learning to find anomalies in system logs</Li>
                                <Li>Advised multiple teams on how to optimize Elasticsearch</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Uncharted Software */}
                <Grid container className={classes.employerNext} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="uncharted-software" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="Uncharted Software" href="/work/uncharted-software" role="Senior Software Architect" when="2015–2018">
                            <Ul>
                                <Li>Worked with data scientists to develop early prototypes of a new causal graph—including all visualization. This tool was used by the data scientists to refine their models and product designers to refine their architecture.</Li>
                                <Li>Implemented state-of-the-art Natural Language Processing (NLP) technologies to perform Named-Entity Recognition (NER) and feature extraction of unstructured and semi-structured data</Li>
                                <Li>Extended capabilities of critical data pipelines built in Scala, Spark, HBase, Hadoop and Elasticsearch</Li>
                                <Li>Optimized Elasticsearch queries and data schemas for optimal performance and search-ability</Li>
                                <Li>Converted legacy Java code to Scala</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Mayo Clinic */}
                <Grid container className={classes.employerNext} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="mayo-clinic" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="Mayo Clinic" href="/work/mayo-clinic" role="Software Engineer" when="2014–2015">
                            <Ul>
                                <Li>Co-authored <em>&ldquo;Patient-Like-Mine: A Real Time, Visual Analytics Tool for Clinical Decision Support&rdquo;</em> and poster presentation for the 2015 IEEE International Conference on Big Data</Li>
                                <Li>Built software to visualize and analyze patient medical data for clinical decision support</Li>
                                <Li>Built pipeline to transform data from HL7 V2 RIM and FHIR schemas to parent/child Elasticsearch documents</Li>
                                <Li>Re-wrote experimental prototype software for production use</Li>
                                <Li>Optimized Elasticsearch queries for speed and search-ability</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Genworth Canada */}
                <Grid container className={classes.employerNext} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="genworth-canada" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="Genworth Canada" href="/work/genworth-canada" role="Developer" when="2014–2015">
                            <Ul>
                                <Li>Designed system to automatically detect names and addresses which may refer to the same subject, but uses different spelling</Li>
                                <Li>Hosted regular Lunch-and-Learn events on Elasticsearch and demonstrated its applications</Li>
                                <Li>Saved the company tens of thousands annually by identifying an area of improvement  that eliminated the need for a third-party vendor service</Li>
                                <Li>Was known as the &ldquo;go-to-guy&rdquo; regarding all things Elasticsearch</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Infomart */}
                <Grid container className={classes.employerNext} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="infomart" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="Infomart" href="/work/infomart" role="Architect & Lead Developer" when="2012–2014">
                            <Ul>
                                <Li>Designed the technical architecture</Li>
                                <Li>Designed Elasticsearch document schemas and wrote all queries</Li>
                                <Li>Built the development team from ground up &ndash; managed the hiring process from writing job descriptions, interviews to selecting candidates</Li>
                                <Li>Wrote the development style guide, including the best practices, for the team</Li>
                                <Li>Built custom data visualization charts in SVG to meet specific design requirements of the project</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Jib Design & Advertising */}
                <Grid container className={classes.employerNext} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="jib-design-and-advertising" variant="default"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Experience employer="Jib Design & Advertising" href="/work/jib-design-and-advertising" role="Technical Director" when="2007–2008">
                            <Ul>
                                <Li>Wrote the university registration system for the Apple Education Store on apple.ca</Li>
                                <Li>Wrote and deployed all HTML emails for Apple Canada</Li>
                                <Li>Conceptualized, designed and wrote an internal tool for client asset approvals</Li>
                                <Li>Reverse engineered Google PageRank for improved SEO strategies</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

            </Container>
        </DefaultLayout>
    );
};
