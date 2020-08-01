import * as React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '../../styling/Typography';
import rem from '../../styling/rem';
import {color} from '../../styling/Color';

interface Props {
	children?: any;
	next?: boolean;
	source?: string | undefined;
}

const useStyles = makeStyles((theme) => ({
	root: {},
	rootNext: {
		paddingTop: theme.spacing(48 / 8),
	},
	boxQuote: {
		paddingRight: theme.spacing(8 / 8),
		fontFamily: `"Times New Roman"`,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: rem(64),
		lineHeight: '100%',
		color: color.lime['500'],
		// backgroundColor: 'pink'
	},
	boxContent: {
		paddingTop: theme.spacing(12 / 8),
		// backgroundColor: 'cyan',
	},
	blockquote: {
		margin: 0,
		padding: 0,
	},
	blockquoteTypography: {
		color: color.grey['800']
	},
	footer: {
		paddingTop: theme.spacing(16 / 8),
	},
	footerTypography: {
		color: color.grey['600']
	},
	span: {
		fontFamily: `"Times New Roman"`,
		fontStyle: 'normal',
		fontWeight: 'normal',
		color: color.lime['500'],
	},
}));

export default function Quote(props: Props) {
	const classes = useStyles();
	const {children, next, source} = props;

	const rootClassName = (next)
		? classes.rootNext
		: undefined;

	const renderedEndQuote = (
		<span className={classes.span}>&rdquo;</span>
	);

	const renderedSource = (source)
		? (
			<footer className={classes.footer}>
				<Typography className={classes.footerTypography} group="primary" variant="subtitle" weight="regular">{source}</Typography>
			</footer>
		) : '';

	return (
		<Box className={rootClassName} display="flex">
			<Box className={classes.boxQuote}>&ldquo;</Box>
			<Box className={classes.boxContent} flexGrow={1}>
				<blockquote className={classes.blockquote} cite={source}>
					<Typography className={classes.blockquoteTypography} group="secondary" variant="body" weight="light">{children}{renderedEndQuote}</Typography>
					{renderedSource}
				</blockquote>
			</Box>
		</Box>
	);
};
