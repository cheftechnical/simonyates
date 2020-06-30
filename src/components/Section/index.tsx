import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
    children?: any | any[];
    className?: string;
    id?: string;
    name: string;
}

const useStyles = makeStyles((theme) => ({
    jumpTarget: {
        content: '',
        display: 'block',
        height: '106px', /* fixed header height*/
        margin: '-106px 0 0', /* negative fixed header height */
    }
}));

export default function Section(props: Props) {
    const classes = useStyles();
    const {children, className, id} = props;

    return (
        <div className={className}>
            <div className={classes.jumpTarget} id={id}/>
            <section>
                {children}
            </section>
        </div>
    );
};
