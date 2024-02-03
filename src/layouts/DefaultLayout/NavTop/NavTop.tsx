import ForMobile from "./ForMobile";
import ForDesktop from "./ForDesktop";
import { Hidden } from "@mui/material";

interface Props {
  /**
   * Key of the selected nav item
   */
  selected?: string;
}

export default function NavTop(props: Props) {
  const { selected } = props;

  return (
    <nav aria-label="Global">
      {/* Desktop */}
      <Hidden smDown>
        <ForDesktop selected={selected} />
      </Hidden>

      {/*	Mobile */}
      <Hidden mdUp>
        <ForMobile />
      </Hidden>
    </nav>
  );
}
