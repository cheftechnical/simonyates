import * as React from 'react';
import DefaultLayout from '../../../layouts/Default';
import {Container, Grid} from '@material-ui/core';

export default function JibDesignAndAdvertising() {
	return (
		<DefaultLayout title="Work at Jib Design &amp; Advertising" top="work">
			<Container>
				<Grid container>
					<Grid item xs={1}>[logo]</Grid>
					<Grid item xs={6}>[jib placeholder]</Grid>
					<Grid item xs={2}/>
					<Grid item xs={3}>[nav]</Grid>
				</Grid>
			</Container>
		</DefaultLayout>
	);
};
