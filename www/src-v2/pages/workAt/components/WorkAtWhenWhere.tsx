import {styled, Typography} from "@mui/material";
import {color} from '../../../styling/Color/Color';

interface Props {
  when: string;
  where: string;
}

// const useStyles = makeStyles((themeMui) => ({
// 	whenWhere: {
// 		marginBottom: themeMui.spacing(32/8),
// 		color: color.grey['600']
// 	},
// }));

const StyledTypography = styled(Typography)(({theme}) => ({
  marginBottom: theme.spacing(32 / 8),
  color: color.grey['600']
})) as typeof Typography;

export default function WorkAtWhenWhere(props: Props) {
  const {when, where} = props;

  return (
    <StyledTypography component="p" variant="primaryBody">{when} &bull; {where}</StyledTypography>
  );
};
