import * as React from 'react';
import {Container} from '@material-ui/core';
import Typography from '../../../styling/Typography';
import Photos from './Photos';

export default function PhotoGallery() {
	return (
		<Container>
			<Typography group="primary" variant="body" weight="regular">
				In case you&rsquo;re curious, here are some of my photos from traveling
			</Typography>
			<Photos/>
		</Container>
	);
};
