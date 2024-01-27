import {styled} from "@mui/material";
import MenuItem from "./MenuItem";

export interface Props {
  /**
   * Callback raised when the user clicks on a menu item
   */
  onClick: () => void;
}

const StyledDivMenuItems = styled('div')(({theme}) => ({
  paddingTop: theme.spacing((44 - 24 - 12) / 8),
  textAlign: 'right'
}));

export function MenuItems(props: Props) {
  const {onClick} = props;

  return (
    <StyledDivMenuItems>
      <MenuItem href="/work" onClick={onClick} title="Work"/>
      <MenuItem href={"/featured"} onClick={onClick} title="Featured"/>
      <MenuItem href={"/about"} onClick={onClick} title="About"/>
      <MenuItem href={"/contact"} onClick={onClick} title="Contact"/>
    </StyledDivMenuItems>
  )
}

export default MenuItems;
