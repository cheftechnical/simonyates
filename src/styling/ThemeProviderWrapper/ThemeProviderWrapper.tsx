import { ReactNode } from "react";
import "../ThemeMui/global.css";

interface Props {
  children: ReactNode;
}

export default function ThemeProviderWrapper(props: Props) {
  const { children } = props;

  // No longer using MUI ThemeProvider or CssBaseline
  // Fonts are loaded via fonts.css, global styles via global.css
  // Tailwind's preflight handles CSS reset
  return <>{children}</>;
}
