import {color} from '../../../styling/Color/Color';
// import Typography from '../../../styling/Typography/Typography';
import rem from '../../../styling/rem';
import {styled, Typography} from "@mui/material";

interface Props {
    caption: string;
    value: number;
}

// const useStyles = makeStyles((themeMui) => ({
//     value: {
//         paddingBottom: themeMui.spacing(23/8),
//         fontSize: rem(64),
//         lineHeight: '100%',
//         textAlign: 'center',
//         color: color.grey['600']
//     },
//     caption: {
//         // marginBottom: themeMui.spacing(28/8),
//         lineHeight: rem(24),
//         textAlign: 'center'
//     }
// }));

const StyledTypographyCaption = styled(Typography)(() => ({
    // marginBottom: themeMui.spacing(28/8),
    lineHeight: rem(24),
    textAlign: 'center'
})) as typeof Typography; // https://stackoverflow.com/questions/61113288/how-to-use-typography-as-a-styled-component-in-react-of-material-ui

const StyledTypographyValue = styled(Typography)(({theme}) => ({
    paddingBottom: theme.spacing(23/8),
    fontSize: rem(64),
    lineHeight: '100%',
    textAlign: 'center',
    color: color.grey['600']
})) as typeof Typography; //https://stackoverflow.com/questions/61113288/how-to-use-typography-as-a-styled-component-in-react-of-material-ui

export default function StatsItem(props: Props) {
    // const classes = useStyles();
    const {caption, value} = props;

    return (
        <div>
            {/*<StyledTypographyValue component="p" group="primary" variant="h2" weight="regular">{value}</StyledTypographyValue>*/}
            <StyledTypographyValue component="p" variant="primaryH2">{value}</StyledTypographyValue>

            {/*<StyledTypographyCaption component="p" group="primary" variant="body" weight="regular">{caption}</StyledTypographyCaption>*/}
            <StyledTypographyCaption component="p" variant="primaryBody">{caption}</StyledTypographyCaption>
        </div>
    );
};
