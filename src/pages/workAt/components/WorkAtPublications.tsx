import ConditionalIndent from "../../../components/ConditionalIndent/ConditionalIndent";
import { Box } from "@mui/material";

interface Props {
  children?: any;
  next?: boolean;
}

export default function WorkAtPublications(props: Props) {
  const { children, next } = props;

  return (
    <Box
      sx={(theme) => ({
        paddingTop: next ? theme.spacing(5) : 0,
      })}
    >
      <ConditionalIndent>{children}</ConditionalIndent>
    </Box>
  );
}
