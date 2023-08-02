import {CssBaseline, ThemeProvider} from "@mui/material";
import themeMui from "../ThemeMui";

interface Props {
  // children: Element | (string | Element)[];
  children: any;
}

export default function ThemeProviderWrapper(props: Props) {
  const {children} = props;

  return (
    <ThemeProvider theme={themeMui}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}