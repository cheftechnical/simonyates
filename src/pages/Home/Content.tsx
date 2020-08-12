/**
 * This component will render the welcome text and consider widows/orphans at various viewport sizes.
 */
import * as React from 'react';
import Typography from '../../styling/Typography';
import CenterVertically from '../../components/CenterVertically/CenterVertically';
import {Hidden} from '@material-ui/core';

export default function Content() {

	return (
		<CenterVertically>
			<Hidden only={[/*'xs',*/ 'sm', 'md', 'lg', 'xl']}>
				<Typography group="primary" variant="h1" weight="regular" >
					Hi, I&rsquo;m Simon&nbsp;Yates.<br/>
					I couldn&rsquo;t fit everything into LinkedIn,
					so I made a&nbsp;website.
				</Typography>
				{/*[a]*/}
			</Hidden>

			<Hidden only={['xs', /*'sm',*/ 'md', 'lg', 'xl']}>
				<Typography group="primary" variant="h1" weight="regular" >
					Hi, I&rsquo;m Simon Yates.<br/>
					I couldn&rsquo;t fit everything into LinkedIn,
					so&nbsp;I&nbsp;made&nbsp;a&nbsp;website.
				</Typography>
				{/*[b]*/}
			</Hidden>

			<Hidden only={['xs', 'sm', /*'md',*/ 'lg', 'xl']}>
				<Typography group="primary" variant="h1" weight="regular" >
					Hi, I&rsquo;m Simon Yates.<br/>
					I couldn&rsquo;t fit everything into LinkedIn,
					so&nbsp;I made a&nbsp;website.
				</Typography>
				{/*[c]*/}
			</Hidden>

			<Hidden only={['xs', 'sm', 'md', /*'lg', 'xl'*/]}>
				<Typography group="primary" variant="h1" weight="regular" >
					Hi, I&rsquo;m Simon Yates.<br/>
					I couldn&rsquo;t fit everything into&nbsp;LinkedIn,<br/>
					so I made a&nbsp;website.
				</Typography>
				{/*[d]*/}
			</Hidden>
		</CenterVertically>
	);
};
