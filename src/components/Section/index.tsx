import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
    children?: any | any[];
    className?: string;
    id: string;
    name: string;
    onVisibleChange?: (id: string, visible: boolean) => void;
}

const useStyles = makeStyles((theme) => ({
    section: {
        // backgroundColor: 'magenta',
        // border: '1px solid cyan',
    },
    jumpTarget: {
        content: '',
        display: 'block',
        height: '100px',
        marginTop: '-100px',
        visibility: 'hidden',
    },

}));

export default function Section(props: Props) {
    const classes = useStyles();
    const {children, className, id} = props;

    return (
        <div className={className}>
            <section id={id} className={classes.section}>
                <div id={`${id}_link`} className={classes.jumpTarget}/>
                {children}
            </section>
        </div>
    );
};
