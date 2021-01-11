import {BaseVisualization} from '../../libs/BaseVisualization';
import {color} from '../../../../styling/Color';
import * as d3 from 'd3';
import {degToRad} from '../../libs/trig';
import {Visualization} from '../../libs/Visualization';

export class MyBezierArcD3 extends BaseVisualization implements Visualization {
	drawChart() {
		// Move (0,0) to the center of the svg element
		const translate = {
			x: this.width / 2,
			y: this.height / 2,
		};
		const transform = `translate(${translate.x}, ${translate.y})`;

		// Calculate the distance between each tick
		this.tickDistance = this.calculateTickDistance(this.radius, 10);

		// Create the chart
		this.createChart('#BezierArc', this.width, this.height);

		// Add the background
		this.addBackground();

		// Add the dot grid
		this.addDotGrid(this.padding, this.tickDistance, this.width, this.height);

		// Add start
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', 2 * this.tickDistance)
			.attr('cy', -4 * this.tickDistance)
			.attr('r', 5)
			.attr('stroke', color.grey['900'])
			.attr('fill', 'none');

		// Add end
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', -4 * this.tickDistance)
			.attr('cy', 2 * this.tickDistance)
			.attr('r', 5)
			.attr('stroke', color.grey['900'])
			.attr('fill', 'none');

		// Add control point 1
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', 2 * this.tickDistance)
			.attr('cy', -2 * this.tickDistance)
			.attr('r', 5)
			.attr('stroke', color.grey['900'])
			.attr('fill', 'none');

		// Add control point 2
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', -2 * this.tickDistance)
			.attr('cy', 2 * this.tickDistance)
			.attr('r', 5)
			.attr('stroke', color.grey['900'])
			.attr('fill', 'none');

		// Add control point 1 line
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[2 * this.tickDistance, -4 * this.tickDistance],
				[2 * this.tickDistance, -2 * this.tickDistance],
			]))
			.attr('stroke', color.blue[500]);

		// Add control point 2 line
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[-4 * this.tickDistance, 2 * this.tickDistance],
				[-2 * this.tickDistance, 2 * this.tickDistance],
			]))
			.attr('stroke', color.blue[500]);

		// Add the projected arc
		this.svg.append('path')
			.attr('transform', `translate(${translate.x - (4 * this.tickDistance)}, ${ translate.y - (4 * this.tickDistance)})`)
			.attr('class', 'my-arc')
			.attr('cx', -2 * this.tickDistance)
			.attr('cy', -2 * this.tickDistance)
			.attr('d', d3.arc()
				.innerRadius(6 * this.tickDistance)
				.outerRadius(6 * this.tickDistance)
				.startAngle(degToRad(90))
				.endAngle(degToRad(180))
			)
			.attr('stroke-width', 2)
			.attr('stroke', color.grey['900']);
	}
}