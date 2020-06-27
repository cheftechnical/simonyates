import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';

interface Props {
    children?: any | any[];
    id?: string;
    name: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(80/8)
    },
    jumpTarget: {
        content: '',
        display: 'block',
        height: '70px', /* fixed header height*/
        margin: '-70px 0 0', /* negative fixed header height */
    }
}));

export default function Section(props: Props) {
    const classes = useStyles();
    const {children, id, name} = props;

    return (
        <div>
            <div className={classes.jumpTarget} id={id}/>
            <section className={classes.root}>
                {children}
            </section>
        </div>
    );
};
