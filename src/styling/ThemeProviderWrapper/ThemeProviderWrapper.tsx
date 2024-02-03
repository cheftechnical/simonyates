import { CssBaseline, ThemeProvider } from "@mui/material";
import themeMui from "../ThemeMui";
import "../ThemeMui/global.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ThemeProviderWrapper(props: Props) {
  const { children } = props;

  return (
    <ThemeProvider theme={themeMui}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
