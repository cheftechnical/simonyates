import * as React from 'react';
import {makeStyles} from '@material-ui/core/styles';

interface Props {
	children: string | undefined;
	element: string;
	variant: string;
	weight?: string;
}

const defaultProps = {
	children: undefined,
	element: 'p',
	variant: 'primary',
	weight: 'regular'
}

const useStyles = makeStyles((theme) => ({
	// ---[ primary ]---
	primary_medium: {
		fontFamily: '"Tiempos Text Medium"'
	},
	primary_semibold: {
		fontFamily: '"Tiempos Text Semibold"'
	},

	// ---[ secondary ]---
	secondary_light: {
		fontFamily: '"Apercu Light", "Comic Sans Ms"'
	},
	secondary_regular: {
		fontFamily: '"Apercu Regular", "Comic Sans Ms"'
	}
}));

export default function Typography(props: Props = defaultProps) {
	const classes = useStyles();
	const {children, element, weight, variant} = props;

	const result = React.useMemo(() => {
		const className = (() => {
			switch (variant) {
				case 'secondary':
					switch (weight) {
						case 'light':
							return classes.secondary_light;
						case 'regular':
						default:
							return classes.secondary_regular;
					}
				case 'primary':
				default:
					switch (weight) {
						case 'semibold':
							return classes.primary_semibold;
						case 'medium':
						default:
							return classes.primary_medium;
					}
			}
		})();

		switch (element) {
			case 'h1':
				return <h1 className={className}>{children}</h1>
			case 'h2':
				return <h2 className={className}>{children}</h2>
			case 'h3':
				return <h3 className={className}>{children}</h3>
			case 'h4':
				return <h4 className={className}>{children}</h4>
			default:
				return <p className={className}>{children}</p>
		}
	}, [children, element, weight, variant]);

	return (
		<React.Fragment>
			{result}
		</React.Fragment>
	);
};

function h1(props: Props) {
	const {children} = props;

	return (
		<h1>{children}</h1>
	);
}

function h2(props: Props) {
	const {children} = props;

	return (
		<h2>{children}</h2>
	);
}

function h3(props: Props) {
	const {children} = props;

	return (
		<h3>{children}</h3>
	);
}

function h4(props: Props) {
	const {children} = props;

	return (
		<h4>{children}</h4>
	);
}

function p(props: Props) {
	const {children} = props;

	return (
		<p>{children}</p>
	);
}
