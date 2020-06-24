import * as React from 'react';
import Typography from './index';
import DefaultTheme from '../DefaultTheme';

export default {title: 'Style Guide/Typography'};

export const _default = () => (
	<DefaultTheme>
		Primary &mdash; Tiempo
		<table width="100%">
			<thead>
				<tr>
					<td width="25%">Name</td>
					<td width="25%"/>
					<td width="25%"/>
					<td width="25%"/>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Headline 1</td>
					<td><Typography element="h1" variant="primary" weight="regular">H1 &ndash; Regular 54</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Headline 2</td>
					<td><Typography element="h2" variant="primary" weight="regular">H2 &ndash; Regular 34</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Headline 3</td>
					<td><Typography element="h3" variant="primary" weight="regular">H3 &ndash; Regular 24</Typography></td>
					<td><Typography element="h3" variant="primary" weight="medium">H3 &ndash; Medium 24</Typography></td>
					<td><Typography element="h3" variant="primary" weight="semibold">H3 &ndash; Semibold 24</Typography></td>
				</tr>
				<tr>
					<td>Headline 4</td>
					<td><Typography element="h4" variant="primary" weight="medium">H4 &ndash; Medium 16</Typography></td>
					<td><Typography element="h4" variant="primary" weight="semibold">H4 &ndash; Semibold</Typography></td>
					<td>Tiempo Bold?</td>
				</tr>
				<tr>
					<td>Body</td>
					<td><Typography element="body" variant="primary" weight="regular">Body &ndash; Regular 16</Typography></td>
					<td><Typography element="body" variant="primary" weight="semibold">Body &ndash; Semibold 16</Typography></td>
				</tr>
				<tr>
					<td>Subtitle</td>
					<td><Typography element="subtitle" variant="primary" weight="regular">Subtitle &ndash; Regular 14</Typography></td>
					<td/>
					<td/>
				</tr>
				{/*<tr>*/}
				{/*	<td>Button Text Button</td>*/}
				{/*	<td><Typography element="button" variant="primary" weight="regular">Button &ndash; Regular 14</Typography></td>*/}
				{/*	<td><Typography element="button" variant="primary" weight="bold">Button &ndash; Bold 14</Typography></td>*/}
				{/*	<td/>*/}
				{/*</tr>*/}
				{/*<tr>*/}
				{/*	<td>Button 2 (contained button)</td>*/}
				{/*	<td><Typography element="button2" variant="primary" weight="regular">Button 2 &ndash; Medium 16</Typography></td>*/}
				{/*	<td/>*/}
				{/*	<td/>*/}
				{/*</tr>*/}
				<tr>
					<td>Caption</td>
					<td><Typography element="caption" variant="primary" weight="regular">Caption &ndash; Regular 12</Typography></td>
				</tr>
			</tbody>
		</table>

		Secondary &mdash; Apercu
		<table width="100%">
			<thead>
				<tr>
					<td width="25%">Name</td>
					<td width="25%"/>
					<td width="25%"/>
					<td width="25%"/>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Heading 3</td>
					<td><Typography element="h3" variant="secondary" weight="light">H3 &ndash; Light 24</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Body</td>
					<td><Typography element="body" variant="secondary" weight="regular">Body &ndash; Regular 16</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Subtitle</td>
					<td><Typography element="subtitle" variant="secondary" weight="regular">Subtitle &ndash; Regular 14</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Caption</td>
					<td><Typography element="caption" variant="secondary" weight="regular">Caption &ndash; Regular 12</Typography></td>
					<td/>
					<td/>
				</tr>
			</tbody>
		</table>
	</DefaultTheme>
);
