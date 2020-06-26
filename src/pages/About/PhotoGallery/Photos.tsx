import * as React from 'react';
import {Grid} from '@material-ui/core';
import Image from '../../../components/Image';

export default function Photos() {
	return (
		<div>
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/jean.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-1.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-2.png"/>
				</Grid>
				<Grid item xs={3}>
					<Image alt="Jean-nis Joplin" src="/images/about/photo-gallery/mexico-3.png"/>
				</Grid>
			</Grid>
		</div>
	);
};