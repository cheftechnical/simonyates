import * as React from 'react';
import {Link} from '@material-ui/core';
import {Link as ReactRouterDom} from 'react-router-dom';
import Image from '../../../components/Image';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

const useStyles = makeStyles((theme) => ({
	image: {
		width: rem(149)
	}
}));

export default function Logo() {
	const classes = useStyles();

	return (
		<div>
			<Link component={ReactRouterDom} to="/"><Image
				className={classes.image}
				alt="Simon Yates"
				src="/images/simon-yates.svg"
			/></Link>
		</div>
	);
};
