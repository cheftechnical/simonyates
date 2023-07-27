import * as React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../../styling/Typography/Typography';
import {color} from '../../../styling/Color/Color';

interface Props {
    children?: any | any[];
    name: string;
    next?: boolean;
    when?: string;
}

// const useStyles = makeStyles((themeMui) => ({
//     root: {
//
//     },
//     nameAndWhen: {
//         marginBottom: themeMui.spacing(24/8),
//         color: color.grey['600']
//     },
//     next: {
//         marginTop: themeMui.spacing(56/8)
//     }
// }));

export default function WorkAtProject(props: Props) {
    // const classes = useStyles();
    const {children, name, next, when} = props;

    // const className = (next)
    //     ? `${classes.root} ${classes.next}`
    //     : `${classes.root}`

    const optionalWhen = (when)
        ? <React.Fragment>, {when}</React.Fragment>
        : <React.Fragment/>;

    // return (
    //     <div className={className}>
    //         <Typography className={classes.nameAndWhen} component="h3" group="primary" variant="h4" weight="semibold">{name}{optionalWhen}</Typography>
    //         <div>{children}</div>
    //     </div>
    // );

    return (
        <div>[WorkAtProject]</div>
    )
};
