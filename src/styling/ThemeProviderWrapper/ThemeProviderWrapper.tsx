import {CssBaseline, ThemeProvider} from "@mui/material";
import themeMui from "../ThemeMui";
import '../ThemeMui/global.css';

interface Props {
  // children: Element | (string | Element)[];
  children: any;
}

export default function ThemeProviderWrapper(props: Props) {
  const {children} = props;
  console.log('theme', themeMui);

  return (
    <ThemeProvider theme={themeMui}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
}