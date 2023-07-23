// import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../../styling/Color/Color';
import Typography from '../../../styling/Typography/Typography';
import rem from '../../../styling/rem';
import {styled} from "@mui/material";

interface Props {
    caption: string;
    value: number;
}

// const useStyles = makeStyles((theme) => ({
//     value: {
//         paddingBottom: theme.spacing(23/8),
//         fontSize: rem(64),
//         lineHeight: '100%',
//         textAlign: 'center',
//         color: color.grey['600']
//     },
//     caption: {
//         // marginBottom: theme.spacing(28/8),
//         lineHeight: rem(24),
//         textAlign: 'center'
//     }
// }));

const StyledTypographyCaption = styled(Typography)(({theme}) => ({
    // marginBottom: theme.spacing(28/8),
    lineHeight: rem(24),
    textAlign: 'center'
}))

const StyledTypographyValue = styled(Typography)(({theme}) => ({
    paddingBottom: theme.spacing(23/8),
    fontSize: rem(64),
    lineHeight: '100%',
    textAlign: 'center',
    color: color.grey['600']
}))

export default function StatsItem(props: Props) {
    // const classes = useStyles();
    const {caption, value} = props;

    return (
        <div>
            <StyledTypographyValue component="p" group="primary" variant="h2" weight="regular">{value}</StyledTypographyValue>
            <StyledTypographyCaption component="p" group="primary" variant="body" weight="regular">{caption}</StyledTypographyCaption>
        </div>
    );
};
