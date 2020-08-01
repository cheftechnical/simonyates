import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {color} from '../../styling/Color';
import Typography from '../../styling/Typography';

interface Props {
    children?: any | any[] | undefined;
    list?: string[] | undefined;
    variant?: 'default' | 'alert' | undefined;
}

const defaultProps = {
    variant: 'default'
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(24/8),
        marginBottom: theme.spacing(24/8),
        padding: theme.spacing(8/8),
        backgroundColor: color.limeWithOpacity['500']['10%'],
        textAlign: 'center'
    },
    typography: {
        color: color.grey['700'],
    },
    alert: {
        color: color.red['400'],
    }
}));

interface DelimiterProps {
    index: number;
    length: number;
}


/**
 * This Delimiter component will add a bullet between items.
 *
 * The component defends against orphans.
 *
 * @param props
 * @constructor
 */
function Delimiter(props: DelimiterProps) {
    const {index, length} = props;

    // Don't append a delimiter to the last item
    if (index === length - 1) {
        return (
            <React.Fragment/>
        );
    }

    // Prevent orphan of 2nd-last item
    if (index === length - 2) {
        return (
            <React.Fragment>&nbsp;&bull;&nbsp;</React.Fragment>
        );
    }

    // Render all other items normally
    return (
        <span> &bull; </span>
    );
}


/**
 * Main callout component
 *
 * @param props
 * @constructor
 */
export default function Callout(props: Props) {
    const classes = useStyles();
    const {children, list, variant} = {...defaultProps, ...props};

    const content = React.useMemo(() => {
        if (!list) return children;

        return list.map((item, index) => (
            <span key={index}>
                {item}<Delimiter index={index} length={list.length}/>
            </span>
        ));

    }, [children, list]);

    const typographyClassName = (variant === 'alert')
        ? `${classes.typography} ${classes.alert}`
        : classes.typography;

    return (
        <div className={classes.root}>
            <Typography className={typographyClassName} group="secondary" variant="body" weight="regular">
                {content}
            </Typography>
        </div>
    );
};
