import * as React from 'react';
import Typography from '../../styling/Typography';
import CenterVertically from '../../components/CenterVertically/CenterVertically';

export default function Content() {
	return (
		<CenterVertically>
			<Typography group="primary" variant="h1" weight="regular" >
				Hi, I&rsquo;m Simon Yates.<br/>
				I couldn&rsquo;t fit everything into LinkedIn,<br/>
				so I made a&nbsp;website.
			</Typography>
		</CenterVertically>
	);
};
