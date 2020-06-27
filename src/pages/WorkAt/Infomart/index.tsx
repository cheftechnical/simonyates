import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';

export default function Infomart() {
	return (
		<DefaultLayout title="Work at Infomart" top="work">
			<Container>
				<Grid container>
					<Grid item xs={1}>[logo]</Grid>
					<Grid item xs={6}>[infomart placeholder]</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>[nav]</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
