import * as React from 'react';
import ColorGradient from './ColorGradient';
import {color} from './Color';

export default {title: 'Style Guide/Colors'};

export const _default = () => (
	<div>
		<table width="100%">
			<tbody>
				<tr>
					<td>Grey</td>
					<td>
						<ColorGradient name="Grey" style={color.grey}/>
					</td>
				</tr>
				<tr>
					<td>Lime</td>
					<td>
						<ColorGradient name="Lime" style={color.lime}/>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);
