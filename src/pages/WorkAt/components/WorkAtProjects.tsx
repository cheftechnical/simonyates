import * as React from 'react';
import {Grid} from '@material-ui/core';

interface Props {
	children?: any;
}

export default function WorkAtProjects(props: Props) {
	const {children} = props;

	return (
		<Grid container>
			<Grid item xs={1}/>
			<Grid item xs={11}>
				{children}
			</Grid>
		</Grid>
	);
};
