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
    heading: {
        marginBottom: theme.spacing(72/8),
    },
    employer: {
        marginTop: theme.spacing(72/8)
    }
}));

export default function Work() {
    const classes = useStyles();

    return (
        <DefaultLayout title="Work" top="work">
            <Container>
                <Typography className={classes.heading} group="primary" variant="h2" weight="regular">
                    Here is a glimpse of my life,<br/>
                    mostly as a programmer.
                </Typography>

                {/* RBC */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="rbc" variant="default"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="RBC" href="/work/rbc" role="Full-Stack Developer" when="2018–Present">
                            <Ul>
                                <Li>A at feugiat laoreet non integer gravida duis.</Li>
                                <Li>Tempus eget gravida nunc pellentesque.</Li>
                                <Li>Dictum augue sed eget pulvinar sit curabitur.</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Uncharted Software */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="uncharted-software" variant="default"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="Uncharted Software" href="/work/uncharted-software" role="Senior Software Architect" when="2015–2018">
                            <Ul>
                                <Li>Prototyping and building complex causal graphs utilizing RDF, Turtle (TTL), and SPARQL</Li>
                                <Li>Building scalable, distributed computing systems with RabbitMQ/Spark</Li>
                                <Li>Using Natural Language Processing (NLP) and spaCy to create a Named-Entity Recognition (NER) and feature extraction service</Li>
                                <Li>Working closely with our data scientists to implement emerging Machine Learning (ML) technologies in Python</Li>
                                <Li>Maintained and extended critical data pipelines in Scala, Spark and Hadoop</Li>
                                <Li>Optimized Elasticsearch models</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Mayo Clinic */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="mayo-clinic" variant="default"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="Mayo Clinic" href="/work/mayo-clinic" role="Software Engineer" when="2014–2015">
                            <Ul>
                                <Li>Elasticsearch, Elastic Marvel, MongoDB, node.js, socket.io, Express framework, hapi.js, RabbitMQ River, Highcharts, D3, MapReduce, YAML</Li>
                                <Li>Built extensive set of interactive medical/statistical data visualization charts using D3 for real-time big data analytics</Li>
                                <Li>Built high-throughput and fault-tolerant river to pre-compute and pipe MongoDB, and RabbitMQ data into Elasticsearch</Li>
                                <Li>Built a tool which simplifies the creation of complex nested Elasticsearch queries</Li>
                                <Li>Transformed HL7 V2 RIM and FHIR from Apache Spark into a schema optimized for complex analytics in Elasticsearch</Li>
                                <Li>Refactored experimental tools written by previous developers into a standardized technology stack, and generalized libraries wherever possible</Li>
                                <Li>Presented work at monthly Lunch-and-Learn workshops to share knowledge with different departs at Mayo Clinic</Li>
                                <Li>Presented work at 2015 IEEE Big Data Conference in Silicone Valley</Li>
                                <Li>1 Trillion electronic medical records (EMR) will be processed by these services</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Genworth Canada */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="genworth-canada" variant="default"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="Genworth Canada" href="/work/genworth-canada" role="Developer" when="2014–2015">
                            <Ul>
                                <Li>Elasticsearch, Java, node.js, socket.io, Express framework, Extjs, Selenium (tests written Java), MQTT protocol</Li>
                                <Li>The “go-to-guy” regarding all things Elasticsearch</Li>
                                <Li>Ensuring that Elasticsearch is configured in a secure manner</Li>
                                <Li>Demonstrated new ways that Big Data technologies can improve the utility of Genworth’s data through monthly Lunch-and-Learn talks, which have inspired several spin-o projects as a result</Li>
                                <Li>Designed Elasticsearch mapping rules that will help nd similar addresses and names, despite the many possible permutations with them</Li>
                                <Li>Shared knowledge of how Elasticsearch works “under-the-hood” to help illustrate how we can leverage this new technology with the team</Li>
                                <Li>Identified new ways of identifying fraudulent transactions that were previously very time consuming</Li>
                                <Li>Identified how Genworth could replace one of their “data-scrubbing” vendors with an internal solution via Elasticsearch, and save the company tens of thousands annually</Li>
                                <Li>Implementing “bleeding-edge” capabilities of Elasticsearch, only days after they were released</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Infomart */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="infomart" variant="regular"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="Infomart" href="/work/infomart" role="Architect & Lead Developer" when="2012–2014">
                            <Ul>
                                <Li>Apache Hadoop 1.x, node.js, PHP, Elasticsearch, MongoDB, MySQL, MSSQL, Gnip Powertrack, Gnip EDC, Javascript, jQuery, FQL, Twitter API, Facebook API, YouTube API, Highcharts, Hootsuite API, Google Maps API, OAuth2.0, Memcache, Amazon S3, Bootstrap.js, PHPUnit</Li>
                                <Li>Designed the technical architecture for application overhaul</Li>
                                <Li>Worked with the project manager to write job descriptions and hire a development team</Li>
                                <Li>Established best-practices, and prepared development style guides for the team</Li>
                                <Li>Performed technology testing to identify best technologies for the project, proposing several options with advantages/disadvantages to each</Li>
                                <Li>Primary developer of all big data content (currently about 10 million tweets per month / over 100 million documents in total)</Li>
                                <Li>Primary Javascript developer (which was extensive in this project)</Li>
                                <Li>Built a proprietary visual pie-chart using Javascript and SVG only (no framework), to meet specific needs of the project</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

                {/* Jib Design & Advertising */}
                <Grid container className={classes.employer} spacing={4}>
                    <Grid item xs={1}>
                        <Logo brand="jib-design-and-advertising" variant="regular"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Experience employer="Jib Design & Advertising" href="/work/jib-design-and-advertising" role="Technical Director" when="2007–2008">
                            <Ul>
                                <Li>PHP, MySQL, Javascript, jQuery, HTML, CSS</Li>
                                <Li>Upgraded the university registration system for Apple Education Store from WebObjects to PHP</Li>
                                <Li>Lead development of HTML emails for Apple Canada, including production and deployment to appropriate demographics</Li>
                                <Li>Security audits to prevent SQL injection, Session/Cookie hijacking, etc</Li>
                                <Li>Reverse engineering of Google PageRank formula for better understanding of SEO strategies</Li>
                                <Li>Designed multilingual solutions based on client needs and budget. Projects were developed using LAMP, ASP (design requirement). Moneris</Li>
                                <Li>API, integration with Athens stock exchange API</Li>
                            </Ul>
                        </Experience>
                    </Grid>
                </Grid>

            </Container>
        </DefaultLayout>
    );
};
