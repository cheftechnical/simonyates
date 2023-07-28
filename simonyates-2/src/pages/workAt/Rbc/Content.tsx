import Section from '../../../components/Section/Section';
import WorkAtDescription from '../components/WorkAtDescription';
import WorkAtSectionTitle from '../components/WorkAtSectionTitle';
import WorkAtProjects from '../components/WorkAtProjects';
import WorkAtProject from '../components/WorkAtProject';
import Callout from '../../../components/Callout/Callout';
import Ul from '../../../styling/ListsUnordered/Ul/Ul';
import Li from '../../../styling/ListsUnordered/Li/Li';
import WorkAtEvents from '../components/WorkAtEvents';
import WorkAtEventsGroup from '../components/WorkAtEventsGroup';
import WorkAtEvent from '../components/WorkAtEvent';
import WorkAtPublications from '../components/WorkAtPublications';
import WorkAtPublication from '../components/WorkAtPublication';
import Sections from '../../../components/Sections/Sections';
import {SectionItem} from '../../../components/Sections/SectionItem';
import {WorkAtContentProps} from '../WorkAtContentProps';
import {Typography} from "@mui/material";

interface Props extends WorkAtContentProps {}

export default function Content(props: Props) {
  const {onChange} = props;

  const handleChange = ((newValues: SectionItem[]) => {
    if (onChange) onChange(newValues);
  });

  return (
    <Sections onChange={handleChange}>
      <Section id="intro" name="Intro">
        <WorkAtDescription>
          The Royal Bank of Canada (RBC) is the largest bank in Canada by asset value, with over 80,000
          employees&nbsp;worldwide.
        </WorkAtDescription>
      </Section>

      <Section id="application-development" name="Application Development & Custom&nbsp;Tooling">
        <WorkAtSectionTitle>
          Application Development &amp; Custom&nbsp;Tooling
        </WorkAtSectionTitle>

        <WorkAtProjects>
          <WorkAtProject name="SRE Global Dashboard" when="2019–Present">
            <Typography component="p" variant="primaryBody">
              The <em>SRE Global Dashboard</em> is a collection of dashboards that were designed to be accessed by
              everyone within RBC. Directors, product managers and engineers rely on this data to monitor the
              availability of more than 600 APIs and&nbsp;applications.
            </Typography>

            <Typography component="p" variant="primaryBodyNext">
              I conceptualized the idea of this project after we (the SRE team) exhausted the capabilities of the
              Elastic Kibana platform. Kibana is great for rapid visualization of data, but there are significant
              limitations in the types of reporting it can do. I designed and created a stand-alone application that
              handles these reports which allowed us to have more control over the way data is&nbsp;presented.
            </Typography>

            <Callout list={[
              'Node.js + Express',
              'React + Typescript',
              'Elasticsearch',
              'PostgreSQL'
            ]}/>

            <Ul>
              <Li>
                Interactive series of dashboards for monitoring infrastructure. Know what services are working and how
                well they&rsquo;re&nbsp;performing.
              </Li>
              <Li>
                An organized, real-time view of hundreds of servers across multiple data centers. This was an essential
                tool during a zero-downtime system upgrade, as it allowed the SRE team to be sure that traffic was
                routed&nbsp;correctly.
              </Li>
              <Li>
                Real-time monitoring of critical infrastructure which the SRE team has an SLA requiring it to provide
                five-nines availability (99.999%) for the&nbsp;bank.
              </Li>
            </Ul>
          </WorkAtProject>

          <WorkAtProject next name="Seven Years of Transaction Data" when="2019–Present">
            <Typography component="p" variant="primaryBody">
              Before this software project began, I fought for certain architectural changes that would ensure
              Elasticsearch could function at scale. The project was already well underway before I got involved; it was
              built by a team other than my own and I was relatively new at RBC. So it was an uphill battle right from
              the start, but I prevailed. The changes I proposed were later implemented and they increased performance
              and reliability of the service as a&nbsp;result.
            </Typography>

            <Callout list={[
              'Node.js + Express',
              'React + Typescript',
              'Elasticsearch'
            ]}/>

            <Ul>
              <Li>
                Recommended changes to existing infrastructure that increased reliability of the&nbsp;API
              </Li>
              <Li>
                Built a script that reconciled over 21–billion financial transactions to ensure&nbsp;correctness
              </Li>
              <Li>
                Designed self-healing tools that would automatically respond to known failure&nbsp;modes
              </Li>
              <Li>
                Built tools that automate monthly maintenance activities. Reduced the time that engineers spend each
                month for maintenance by 12&nbsp;hrs
              </Li>
              <Li>
                Built a functional prototype that optimizes Elasticsearch queries to prevent over 4,000 failed search
                queries each&nbsp;month
              </Li>
            </Ul>
          </WorkAtProject>

          <WorkAtProject next name="Chatbot" when="2019–Present">
            <Typography component="p" variant="primaryBody">
              The SRE team receives dozens of emails every day, many of which are internal customers asking the same
              general questions, but are specific to their APIs. These customers expected an immediate answer, but the
              team was not large enough to provide an immediate&nbsp;response.
            </Typography>

            <Typography component="p" variant="primaryBodyNext">
              RBC&rsquo;s official Chatbot vendor (the one you'll use on rbc.com), was not capable of providing
              real-time answers from different sources and could only respond with pre-composed&nbsp;messages.
            </Typography>

            <Typography component="p" variant="primaryBodyNext">
              I built the chatbot from the ground-up to respond to these questions, and answers were sourced from a
              variety of APIs to provide real-time metrics in its&nbsp;response.
            </Typography>

            <Callout list={[
              'Python + scikit-learn, NLTK, numpy, pandas & spaCy',
              'Elasticsearch'
            ]}/>

            <Ul>
              <Li>
                I built a chatbot from scratch to help the team spend less time answering common questions from
                internal&nbsp;customers
              </Li>
              <Li>
                Uses TF-IDF for token vectorization and the named–entity resolution (NER) from&nbsp;spaCy
              </Li>
              <Li>
                Made the chatbot answer questions using real–time data in its&nbsp;response
              </Li>
            </Ul>
          </WorkAtProject>

          <WorkAtProject next name="OAuth Client Creator for RBC Capital Markets" when="2020–Present">
            <Typography component="p" variant="primaryBody">
              PingFederate&rsquo;s API system does not support access control layers which are necessary to control who
              can manage OAuth client IDs. I built a system to provide this level of control over-top of
              PingFederate&rsquo;s existing core&nbsp;APIs.
            </Typography>

            <Typography component="p" variant="primaryBodyNext">
              This application allowed RBC to:
            </Typography>

            <Ul next>
              <Li>
                Streamline creation and approval of OAuth clients, minimizing&nbsp;errors
              </Li>
              <Li>
                Added an access control layer to our PingFederate&nbsp;infrastructure
              </Li>
              <Li>
                Improved logging and record-keeping of each change for&nbsp;auditors
              </Li>
            </Ul>
          </WorkAtProject>
        </WorkAtProjects>
      </Section>

      <Section id="machine-learning" name="Machine Learning / Artificial&nbsp;Intelligence">
        <WorkAtSectionTitle>
          Machine Learning / Artificial Intelligence
        </WorkAtSectionTitle>

        <Typography component="p" variant="primaryBody">
          I used machine learning libraries in Python to automate some of the activities supported by the SRE team. Many
          of these uses are described above, but some of the key highlights&nbsp;include:
        </Typography>

        <Ul next>
          <Li>
            Developed a chatbot from scratch to answer common questions and provide answers using real-time
            infrastructure metrics (e.g. &ldquo;Is service [x] down?&rdquo; or &ldquo;Whats the TPS
            for&nbsp;[thing]&rdquo;)
          </Li>
          <Li>
            Used NLP via TF-IDF to automatically label reports about previous incidents to help identify areas
            for&nbsp;improvement
          </Li>
          <Li>
            Developed feature-embedded model that optimizes disk space and makes it possible to store years worth of
            historical logs while preserving entropy. Terabytes of data were reduced to mere gigabytes; without this
            embedding, we were forced to purge the data after a short period of&nbsp;time.
          </Li>
        </Ul>
      </Section>

      <Section id="budgeting" name="Budgeting">
        <WorkAtSectionTitle>
          Budgeting
        </WorkAtSectionTitle>

        <WorkAtProjects>
          <WorkAtProject name="Cost Chargeback Model" when="2019–Present">
            <Typography component="p" variant="primaryBody">
              In 2020, the SRE team moved to a chargeback costing model. Costs for the services supported by the team
              were often a mix of direct and shared costs. The pricing model I designed used API request logs to weigh
              the fixed and variable costs associated each service, then provide a total service costs to each business
              unit. The results from this model were updated in real-time and displayed in the <em>SRE
              Global&nbsp;Dashboard</em>.
            </Typography>

            <Callout list={[
              'Node.js + Express',
              'React + Typescript',
              'Elasticsearch',
              'PostgreSQL',
              'Microsoft Excel'
            ]}/>

            <Ul>
              <Li>
                Developed a charge back model that weighs department costs to internal&nbsp;customers
              </Li>
              <Li>
                Costing reports were published in the <em>SRE Global&nbsp;Dashboard</em>
              </Li>
              <Li>
                Provided a solution that was easily understood and explainable to&nbsp;stakeholders
              </Li>
            </Ul>
          </WorkAtProject>
        </WorkAtProjects>
      </Section>

      <Section id="events" name="Events">
        <WorkAtSectionTitle>
          Events
        </WorkAtSectionTitle>

        <Typography component="p" variant="primaryBody">
          I frequently create presentations about the different projects that I&rdquo;m working on for our bi-weekly
          town hall. In 2019, I also hosted an interactive workshop in partnership with Elastic on machine learning
          for <em>Catalyst</em>, which is an RBC–specific event taking place during the week of Toronto&rdquo;s popular
          technology event:&nbsp;<em>Collision</em>.
        </Typography>

        <WorkAtEvents>
          <WorkAtEventsGroup next name="10KC">
            <WorkAtEvent
              next
              date="Jul 24, 2020"
              title="Everyday NLP"
            />
          </WorkAtEventsGroup>

          <WorkAtEventsGroup next name="Catalyst/Collision">
            <WorkAtEvent
              next
              date="Sep 2020"
              title={<>Rapid Automation by SRE</>}
            />
            <WorkAtEvent
              next
              date="Sep 25, 2019"
              title={<>
                Anomaly Detection with Elasticsearch: Talk + Workshop with step-by-step guide handout and a demo booth
                featuring our&nbsp;chatbot
              </>}
            />
          </WorkAtEventsGroup>

          <WorkAtEventsGroup next name="Town Hall">
            <WorkAtEvent
              next
              date="May 13, 2020"
              title={<>Seven–Year Transaction History&nbsp;Automation</>}
            />
            <WorkAtEvent
              next
              date="Mar 25, 2020"
              title={<>Introducing the SRE Chargeback Model</>}
            />
            <WorkAtEvent
              next
              date="Feb 2 & 27, 2020"
              title={<>Five–Nines Monitoring and Automation</>}
            />
            <WorkAtEvent
              next
              date="Jan 31, 2020"
              title={<>Monitoring Five–Nines Availability</>}
            />
            <WorkAtEvent
              next
              date="Jan 20, 2020"
              title={<>How the SRE Team Uses Machine Learning To Monitor 1000&rsquo;s of&nbsp;APIs</>}
            />
            <WorkAtEvent
              next
              date="Dec 13, 2019"
              title={<>Monitoring Seven Years of Business & Personal Transaction History</>}
            />
            <WorkAtEvent
              next
              date="Dec 2, 2019"
              title={<>SRE Automation with Machine Learning</>}
            />
            <WorkAtEvent
              next
              date="Oct 10, 2019"
              title={<>Using Supervised Learning to Detect Anomalies in API Requests</>}
            />
            <WorkAtEvent
              next
              date="Aug 23, 2019"
              title={<>Introducing the SRE Chatbot: Why we built it & how it works</>}
            />
            <WorkAtEvent
              next
              date="Jan 25, 2019"
              title={<>How to use machine learning in&nbsp;Elasticsearch</>}
            />
            <WorkAtEvent
              next
              date="Jan 11, 2019"
              title={<>How to Build Effective ELK Watchers</>}
            />
            <WorkAtEvent
              next
              date="Dec 7, 2018"
              title={<>Automating Ping Federate Client Promotions</>}
            />
            <WorkAtEvent
              next
              date="Nov 9 & 23, 2018"
              title={<>Validating Seven–Years of Business Transaction History</>}
            />
          </WorkAtEventsGroup>
        </WorkAtEvents>
      </Section>

      <Section id="publications" name="Publications">
        <WorkAtSectionTitle>
          Publications
        </WorkAtSectionTitle>

        <WorkAtPublications>
          <WorkAtPublication
            date="Jun 11, 2020"
            title="Using Natural Language Processing to Analyze Enterprise–Wide Incident Reports"
          />
          <WorkAtPublication
            next
            date="May 1, 2020"
            title="Building Custom Tools to Automate Seven Years of Transaction History"
          />
          <WorkAtPublication
            next
            date="Mar 15, 2020"
            title="Using Supervised Learning to Detect Anomalies in API Requests"
          />
        </WorkAtPublications>
      </Section>

      <Section id="active-research" name="Active Research">
        <WorkAtSectionTitle>
          Active Research
        </WorkAtSectionTitle>
        <Ul>
          <Li>
            Optimized feature embedding to reduce terabytes to a few gigs for efficient machine&nbsp;learning
          </Li>
        </Ul>
      </Section>

      <Section id="other-activities" name="Other Activities">
        <WorkAtSectionTitle>
          Other Activities
        </WorkAtSectionTitle>

        <Ul>
          <Li>Coordinating & delegating development/deployment&nbsp;strategies</Li>
          <Li>Elasticsearch document/query&nbsp;optimization</Li>
          <Li>Data schema&nbsp;planning</Li>
          <Li>Built an ELK Heartbeat in Go</Li>
          <Li>Built a framework for simplifying the design/test/deployment of ELK&nbsp;Watchers</Li>
          <Li>Wrote Groks (Elastic&rsquo;s regular expression language) to parse server logs during
            data&nbsp;ingestion</Li>
          <Li>Kibana dashboards and&nbsp;reporting</Li>
          <Li>Code reviews for&nbsp;Java</Li>
        </Ul>
      </Section>
    </Sections>
  );
};
