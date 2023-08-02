import rem from '../../styling/rem';
import {styled} from "@mui/material";

interface Props {
  children?: any;
  className?: string;
}

const StyledDiv = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    // for mobile
    paddingLeft: 0
  },

  [theme.breakpoints.up('sm')]: {
    // desktop (default)
    paddingLeft: rem(40),
  }
}));

export default function ConditionalIndent(props: Props) {
  const {children} = props;

  return (
    <StyledDiv>{children}</StyledDiv>
  );
};