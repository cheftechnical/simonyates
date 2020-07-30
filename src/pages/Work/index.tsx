import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import {Container} from '@material-ui/core';
import Content from './WorkContent';

export default function Work() {
	return (
		<DefaultLayout title="Work" top="work">
			<Container>
				<Content/>
			</Container>
		</DefaultLayout>
	);
};
