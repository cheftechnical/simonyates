import { ReactNode } from "react";
import { Grid } from "@mui/material";

interface Props {
  /**
   * The content of the grid item (typically a Logo component).
   */
  children?: ReactNode;
}

export default function GridItemLogo(props: Props) {
  const { children } = props;

  return (
    <Grid className="pl-1" item md={1} xs={2}>
      {children}
    </Grid>
  );
}

