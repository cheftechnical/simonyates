import rem from '../../../../styling/rem';
import {Button, Link, styled} from "@mui/material";
import color from "../../../../styling/Color";

// @todo use ReactRouterDomLink for the navigation
// import {Link as ReactRouterDomLink} from 'react-router-dom';

interface Props {
  href: string;
  selected: boolean;
  title: string;
}

// const useStyles = makeStyles((themeMui) => ({
// 	root: {
// 		paddingTop: themeMui.spacing(24 / 8)
// 	},
// 	active: {
// 		fontWeight: 'bold',
// 	},
// 	default: {
// 		fontSize: rem(24),
// 		lineHeight: rem(32),
//
// 		'& .MuiButton-label': {
// 			paddingBottom: 0
// 		}
// 	}
// }));

const StyledButton = styled(Button)(({theme}) => ({
  color: color.grey[100],
  fontSize: rem(24),
  lineHeight: rem(32),

  '& .MuiButton-label': {
    paddingBottom: 0
  }
})) as typeof Button;

const StyledButtonActive = styled(StyledButton)(({theme}) => ({
  fontWeight: 'bold',
})) as typeof Button;

const StyledDivRoot = styled('div')(({theme}) => ({
  paddingTop: theme.spacing(24 / 8),
  color: 'magenta'
}))

export default function MenuItem(props: Props) {
  const {href, selected, title} = props;

  if (selected) {
    return (
      <StyledDivRoot>
        <StyledButtonActive disableRipple color="secondary" href={href}>
          {title}
        </StyledButtonActive>
      </StyledDivRoot>
    );
  }

  return (
    <StyledDivRoot>
      <StyledButton disableRipple color="secondary" href={href} component={Link}>
        {title}
      </StyledButton>
    </StyledDivRoot>
  );
}