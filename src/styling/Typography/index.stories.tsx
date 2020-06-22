import * as React from 'react';
import Typography from './index';

export default {title: 'Style Guide/Typography'};

export const _default = () => (
	<div>
		Primary &mdash; Tiempo
		<table>
			<tr>
				<td>Headline 1</td>
				<td><Typography element="h1" variant="primary">Tiempo Regular / H1 (54px)</Typography></td>
			</tr>
			<tr>
				<td>Headline 2</td>
				<td><Typography element="h2" variant="primary">Tiempo Regular / H2 (34px)</Typography></td>
			</tr>
			<tr>
				<td>Headline 3</td>
				<td><Typography element="h3" variant="primary">Tiempo Regular / H3 (24px)</Typography></td>
			</tr>
			<tr>
				<td>Body</td>
				<td><Typography element="body" variant="primary">Tiempo Regular / Body (16px)</Typography></td>
			</tr>
			<tr>
				<td>Subtitle</td>
				<td><Typography element="subtitle" variant="primary">Tiempo Regular / Subtitle (14px)</Typography></td>
			</tr>
			<tr>
				<td>Button</td>
				<td><Typography element="button" variant="primary">Tiempo Regular / Button (14px)</Typography></td>
			</tr>
			<tr>
				<td>Button 2</td>
				<td><Typography element="button2" variant="primary">Tiempo Medium / Body (16px)</Typography></td>
			</tr>
			<tr>
				<td>Caption</td>
				<td><Typography element="caption" variant="primary">Tiempo Regular / Caption (12px)</Typography></td>
			</tr>
		</table>

		Secondary &mdash; Apercu
		<table>
			<tr>
				<td>Heading 3</td>
				<td><Typography element="h3" variant="secondary">Apercu Light / H3 (24px)</Typography></td>
			</tr>
			<tr>
				<td>Body</td>
				<td><Typography element="body" variant="secondary">Apercu Regular / Body (16px)</Typography></td>
			</tr>
			<tr>
				<td>Subtitle</td>
				<td><Typography element="subtitle" variant="secondary">Apercu Regular / Subtitle (14px)</Typography></td>
			</tr>
			<tr>
				<td>Caption</td>
				<td><Typography element="caption" variant="secondary">Apercu Regular / Caption (12px)</Typography></td>
			</tr>
		</table>
	</div>
);
