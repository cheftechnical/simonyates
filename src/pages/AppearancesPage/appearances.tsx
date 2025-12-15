import { ReactNode } from "react";

interface AppearanceLink {
  url: string;
  text: string;
  external?: boolean;
}

interface AppearanceDownload {
  href: string;
  label: string;
  next?: boolean;
}

export interface AppearanceData {
  host: string;
  title: ReactNode;
  when: string | { start: string; end: string };
  where: {
    city: string;
    state?: string;
    country: string;
  };
  links?: AppearanceLink[];
  chips?: string[];
  listItems?: ReactNode[];
  downloads?: AppearanceDownload[];
}

const appearances: AppearanceData[] = [
  {
    host: "BrainStation",
    title: <>Starting and Building a Career in&nbsp;Software&nbsp;Engineering</>,
    when: "September 17, 2024",
    where: {
      city: "Toronto",
      state: "ON",
      country: "Canada"
    },
    links: [
      {
        url: "https://www.linkedin.com/events/startingandbuildingacareerinsof7240068930323587072/",
        text: "LinkedIn Event",
        external: true
      }
    ]
  },
  {
    host: "BrainStation",
    title: <>Starting and Building a Career in&nbsp;Software&nbsp;Engineering</>,
    when: "August 22, 2024",
    where: {
      city: "Toronto",
      state: "ON",
      country: "Canada"
    },
    links: [
      {
        url: "https://www.linkedin.com/events/startingandbuildingacareerinsof7227696764244373506/",
        text: "LinkedIn Event",
        external: true
      }
    ]
  },
  {
    host: "BrainStation",
    title: <>Starting and Building a Career in&nbsp;Tech</>,
    when: "March 21, 2024",
    where: {
      city: "Toronto",
      state: "ON",
      country: "Canada"
    },
    links: [
      {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7176553397511233536/",
        text: "LinkedIn Post",
        external: true
      }
    ]
  },
  {
    host: "BrainStation",
    title: <>Starting and Building a Career in&nbsp;Tech</>,
    when: "February 22, 2024",
    where: {
      city: "Toronto",
      state: "ON",
      country: "Canada"
    },
    links: [
      {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7166213687731499009/",
        text: "LinkedIn Post",
        external: true
      },
      {
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7166974594984108033/",
        text: "Feedback Post",
        external: true
      }
    ]
  },
  {
    host: "Catalyst RBC Tech Expo / Collision",
    title: <>Anomaly Detection with&nbsp;Elasticsearch</>,
    when: "September 25, 2019",
    where: {
      city: "Toronto",
      state: "ON",
      country: "Canada"
    },
    chips: [
      "talk",
      "workshop",
      "machine learning",
      "anomaly detection"
    ],
    listItems: [
      <>Talk + Workshop with step-by-step guide&nbsp;handout</>,
      <>Demo booth featuring our&nbsp;chatbot</>
    ]
  },
  {
    host: "IEEE International Conference on Big Data",
    title: "Patient-Like-Mine",
    when: {
      start: "October 29",
      end: "November 1, 2015"
    },
    where: {
      city: "Santa Clara",
      state: "CA",
      country: "USA"
    },
    downloads: [
      {
        href: "https://s3.amazonaws.com/simonyates.ca-downloads/publications/ieee/2015/patient-like-mine.pdf",
        label: "Download Paper"
      },
      {
        href: "https://s3.amazonaws.com/simonyates.ca-downloads/events/2015/ieee-international-conference-on-big-data/program-schedule.pdf",
        label: "Download Program Schedule",
        next: true
      }
    ]
  }
];

export default appearances;
