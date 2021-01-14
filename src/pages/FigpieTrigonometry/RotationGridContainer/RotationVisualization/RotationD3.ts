import * as d3 from 'd3';
import {BaseVisualization} from '../../libs/BaseVisualization';
import {Visualization} from '../../libs/Visualization';
import {color} from '../../../../styling/Color';
import {degToRad} from '../../libs/trig';

export class RotationD3 extends BaseVisualization implements Visualization {
	color = {
		circleContour: color.grey['100'],
		vectorLine: color.grey['500'],
	};

	point = {
		s: {
			x: 0,
			y: 0,
		},
		c1: {
			x: 0,
			y: 0,
		},
		c2: {
			x: 0,
			y: 0,
		},
		e: {
			x: 0,
			y: 0,
		},
	};

	zeroAt = {
		x: 0,
		y: 0,
	};

	drawChart() {
		// (0,0) should be the center
		this.zeroAt = {
			x: this.width / 2,
			y: this.height / 2,
		};
		const transform = `translate(${this.zeroAt.x}, ${this.zeroAt.y})`;

		// Calculate the point coordinates
		this.point = this.calculatePoints(360, 270);


		// Create the chart
		this.createChart('#RotationD3', this.width, this.height);

		// Add the background
		this.addBackground();

		// Add the circle
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('r', this.radius)
			.attr('fill', 'none')
			.attr('stroke', this.color.circleContour)
			.attr('stroke-width', 1);

		// ---[ Add the slice ]----

		// (p0->p1)
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[0, 0],
				[this.point.s.x, this.point.s.y]
			]))
			.attr('stroke', this.color.vectorLine);

		// (p0->p4)
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[0, 0],
				[this.point.e.x, this.point.e.y]
			]))
			.attr('stroke', this.color.vectorLine);

		// p1->p2 control line
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[this.point.s.x, this.point.s.y],
				[this.point.c1.x, this.point.c1.y]
			]))
			.attr('stroke', this.color.vectorLine);

		// p4->p3 control line
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[this.point.e.x, this.point.e.y],
				[this.point.c2.x, this.point.c2.y]
			]))
			.attr('stroke', this.color.vectorLine);

		// arc
		this.svg.append('path')
			.attr('transform', transform)
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('d', d3.arc()
				.innerRadius(this.radius)
				.outerRadius(this.radius)
				.startAngle(degToRad(90))
				.endAngle(degToRad(180))
			)
			.attr('stroke-width', 1)
			.attr('stroke', this.color.vectorLine);
	}
}