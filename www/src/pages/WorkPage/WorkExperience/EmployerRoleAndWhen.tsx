import {Link as ReactRouterDom} from 'react-router-dom';
import {color} from '../../../styling/Color/Color';
import {Link, styled, Typography} from "@mui/material";

interface Props {
  employer: string;
  href: string;
  role: string;
  when: string;
}

// const useStyles = makeStyles((themeMui) => ({
//   root: {
//     marginBottom: themeMui.spacing(72 / 8)
//   },
//   employer: {
//     marginBottom: themeMui.spacing(20 / 8)
//   },
//   h3Link: {
//     color: color.grey['600'],
//     '&:hover': {
//       color: color.grey['600'],
//     }
//   },
//   readFullDetails: {
//     marginTop: themeMui.spacing(32 / 8)
//   },
//   when: {
//     whiteSpace: 'nowrap'
//   }
// }));

const StyledLink = styled(Link)(({theme}) => ({
  color: color.grey['600'],
  '&:hover': {
    color: color.grey['600'],
  }
})) as typeof Link;

const StyledSpanWhen = styled('span')(({theme}) => ({
  whiteSpace: 'nowrap'
}));

const StyledTypographyEmployer = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(20 / 8)
})) as typeof Typography;

export default function EmployerRollAndWhen(props: Props) {
  const {employer, href, role, when} = props;

  return (
    <StyledTypographyEmployer component="h2" variant="primaryH3">
      {/*<StyledLink to={href}>*/}
      <StyledLink component={ReactRouterDom} to={href}>
        {employer}, {role}, <StyledSpanWhen>{when}</StyledSpanWhen>
      </StyledLink>
      {/*</StyledLink>*/}
    </StyledTypographyEmployer>
  );
}
