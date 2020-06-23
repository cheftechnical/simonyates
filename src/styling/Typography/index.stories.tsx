import * as React from 'react';
import Typography from './index';
import DefaultTheme from '../DefaultTheme';

export default {title: 'Style Guide/Typography'};

export const _default = () => (
	<DefaultTheme>
		Primary &mdash; Tiempo
		<table>
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
					<td><Typography element="h1" variant="primary">H1 &ndash; Regular 54</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Headline 2</td>
					<td><Typography element="h2" variant="primary">H2 &ndash; Regular 34</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Headline 3</td>
					<td><Typography element="h3" variant="primary">H3 &ndash; Regular 24</Typography></td>
					<td><Typography element="h3" variant="primary" weight="medium">H3 &ndash; Medium 24</Typography></td>
					<td><Typography element="h3" variant="primary" weight="semibold">H3 &ndash; Semibold 24</Typography></td>
				</tr>
				<tr>
					<td>Headline 4</td>
					<td><Typography element="h4" variant="primary">H4 &ndash; Medium 16</Typography></td>
					<td><Typography element="h4" variant="primary" weight="medium">H4 &ndash; Semibold</Typography></td>
					<td>Tiempo Bold?</td>
				</tr>
				<tr>
					<td>Body</td>
					<td><Typography element="body" variant="primary">Body &ndash; Regular 16</Typography></td>
					<td><Typography element="body" variant="primary" weight="semibold">Body &ndash; Semibold 16</Typography></td>
				</tr>
				<tr>
					<td>Subtitle</td>
					<td><Typography element="subtitle" variant="primary">Subtitle &ndash; Regular 14</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Button Text Button</td>
					<td><Typography element="button" variant="primary">Button &ndash; Regular 14</Typography></td>
					<td><Typography element="button" variant="primary" weight="bold">Button &ndash; Bold 14</Typography></td>
					<td/>
				</tr>
				<tr>
					<td>Button 2 (contained button)</td>
					<td><Typography element="button2" variant="primary">Button 2 &ndash; Medium 16</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Caption</td>
					<td><Typography element="caption" variant="primary">Caption &ndash; Regular 12</Typography></td>
				</tr>
			</tbody>
		</table>

		Secondary &mdash; Apercu
		<table>
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
					<td><Typography element="h3" variant="secondary">H3 &ndash; Light 24</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Body</td>
					<td><Typography element="body" variant="secondary">Body &ndash; Regular 16</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Subtitle</td>
					<td><Typography element="subtitle" variant="secondary">Subtitle &ndash; Regular 14</Typography></td>
					<td/>
					<td/>
				</tr>
				<tr>
					<td>Caption</td>
					<td><Typography element="caption" variant="secondary">Caption &ndash; Regular 12</Typography></td>
					<td/>
					<td/>
				</tr>
			</tbody>
		</table>
	</DefaultTheme>
);
