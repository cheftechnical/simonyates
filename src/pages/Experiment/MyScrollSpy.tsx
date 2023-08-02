import {Button, Typography} from "@mui/material";
import {createContext, useContext, useState} from "react";

/**
 * From the docs:
 *    "If you don’t have any meaningful default value, specify null."
 *    source: https://react.dev/reference/react/createContext
 */
interface SectionsContextInterface {
  sections: string[];
  setSections: (newValue: string[]) => void;
}

const sectionsContextDefaultValue: SectionsContextInterface = {
  sections: [],
  setSections: () => {
  }
};

const SectionsContext = createContext<SectionsContextInterface>(sectionsContextDefaultValue);

export default function MyScrollSpy() {
  return (
    <div>
      <Typography component="h1" variant="primaryH1">TrueNorth</Typography>

      <SectionsContextWrapper>
        <TrueNorthContent/>
      </SectionsContextWrapper>
    </div>
  )
}

function TrueNorthContent() {
  const {sections, setSections} = useContext(SectionsContext);

  return (
    <div>
      <Typography component="h2">Sections</Typography>
      &mdash;<br/>
      <ul>
        {sections.map((section) => (
          <li>{section}</li>
        ))}
      </ul>
      &mdash;<br/>

      <Typography component="h2" variant="primaryH2">Section 0</Typography>
      <Typography component="p" variant="primaryBody">This is the body for Section 0</Typography>

      <Typography component="h2" variant="primaryH2">Section 1</Typography>
      <Typography component="p" variant="primaryBody">This is the body for Section 1</Typography>

      <Typography component="h2" variant="primaryH2">Section 2</Typography>
      <Typography component="p" variant="primaryBody">This is the body for Section 2</Typography>

      <Typography component="h2" variant="primaryH2">Section 3</Typography>
      <Typography component="p" variant="primaryBody">This is the body for Section 3</Typography>

      <Typography component="h2" variant="primaryH2">Section 4</Typography>
      <Typography component="p" variant="primaryBody">This is the body for Section 4</Typography>

      <Button
        onClick={() => {
          setSections(['simon', 'dash']);
        }}
        variant="contained"
      >Click Me</Button>
    </div>
  )
}

interface SectionsContextWrapperProps {
}

function SectionsContextWrapper(props: SectionsContextWrapperProps) {
  const [state, setState] = useState<string[]>([]);

  const sections = state;

  const setSections = (newValue: string[]) => {
    console.log('Setting new state value', newValue);
    setState(newValue);
  }

  const contextValue: SectionsContextInterface = {sections, setSections};

  return (
    <SectionsContext.Provider value={contextValue}>
      <TrueNorthContent/>
    </SectionsContext.Provider>
  )
}