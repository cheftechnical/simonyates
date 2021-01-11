import {BaseVisualization} from '../../libs/BaseVisualization';
import {color} from '../../../../styling/Color';
import * as d3 from 'd3';
import {degToRad, radToDeg} from '../../libs/trig';
import {Visualization} from '../../libs/Visualization';

interface Coordinate {
	x: number;
	y: number;
}

export class MyBezierArcD3 extends BaseVisualization implements Visualization {
	sCircle: any;
	sText: any;
	eCircle: any;
	eText: any;
	c1Circle: any;
	c1Text: any;
	c1Line: any;
	c2Circle: any;
	c2Text: any;
	c2Line: any;

	draggableNode: any;
	arc: any;

	axisPadding = 8;
	labelHeight = 21;

	drawChart() {
		// Calculate the radius
		this.radius = this.width - (2 * this.padding);

		// Calculate the distance between each tick
		const ticksPerRadius = 5;
		this.tickDistance = this.calculateTickDistance(this.radius, ticksPerRadius);

		// Move (0,0) to the center of the svg element
		const center = {
			x: this.width / 2,
			y: this.height / 2,
		};
		const transform = `translate(${center.x - (2.5 * this.tickDistance)}, ${center.y - (2.5 * this.tickDistance)})`;

		// Create the chart
		this.createChart('#BezierArc', this.width, this.height);

		// Add the background
		this.addBackground();

		// Add the dot grid
		this.addDotGrid(this.padding, ticksPerRadius, this.tickDistance, this.width, this.height);

		// Add the axis lines
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[0, 0],
				[this.radius, 0]
			]))
			.attr('class', 'crisp')
			.attr('stroke-width', 1)
			.attr('stroke', color.grey['200']);
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[0, 0],
				[0, this.radius]
			]))
			.attr('class', 'crisp')
			.attr('stroke-width', 1)
			.attr('stroke', color.grey['200']);

		// Calculate the points
		const endAngle = 270;
		const points = this.calculatePoints(360, endAngle);


		const pointRadius = 7;
		const pointWidth = 2;
		// const axisPadding = 8;
		// const labelHeight = 21;
		const strokeFixed = color.grey['300'];
		const strokeInteractive = color.blue['500'];
		const strokeCalculated = color.grey['500'];

		// Add start
		this.sCircle = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', points.s.x)
			.attr('cy', points.s.y)
			.attr('r', pointRadius)
			.attr('fill', 'none')
			.attr('stroke', strokeFixed)
			.attr('stroke-width', pointWidth);
		this.sText = this.svg.append('text')
			.attr('transform', transform)
			.attr('x', points.s.x + this.axisPadding)
			.attr('y', points.s.y + this.labelHeight)
			.attr('fill', strokeFixed)
			.attr('font-size', '16px')
			.text('S');

		// Add end
		this.eCircle = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', points.e.x)
			.attr('cy', points.e.y)
			.attr('r', pointRadius)
			.attr('fill', 'none')
			.attr('stroke', strokeInteractive)
			.attr('stroke-width', pointWidth)
			.style('cursor', 'pointer');
		this.eText = this.svg.append('text')
			.attr('transform', transform)
			.attr('x', points.e.x + this.axisPadding)
			.attr('y', points.e.y + this.labelHeight)
			.attr('fill', color.grey['900'])
			.attr('font-size', '16px')
			.text('E');

		// Add control point 1
		this.c1Circle = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', points.c1.x)
			.attr('cy', points.c1.y)
			.attr('r', 5)
			.attr('fill', 'none')
			.attr('stroke', strokeCalculated);
		this.c1Text = this.svg.append('text')
			.attr('transform', transform)
			.attr('x', points.c1.x + this.axisPadding)
			.attr('y', points.c1.y + this.labelHeight)
			.attr('font-size', '16px')
			.attr('fill', strokeCalculated)
			.text('C1');

		// Add control point 2
		this.c2Circle = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', points.c2.x)
			.attr('cy', points.c2.y)
			.attr('r', 5)
			.attr('stroke', color.grey['900'])
			.attr('fill', 'none');
		this.c2Text = this.svg.append('text')
			.attr('transform', transform)
			.attr('x', points.c2.x + this.axisPadding)
			.attr('y', points.c2.y + this.labelHeight)
			.attr('font-size', '16px')
			.attr('fill', color.grey['900'])
			.text('C2');

		// Add control point 1 line
		this.c1Line = this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[points.s.x, points.s.y],
				[points.c1.x, points.c1.y],
			]))
			.attr('stroke', color.blue[500]);

		// Add control point 2 line
		this.c2Line = this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[points.e.x, points.e.y],
				[points.c2.x, points.c2.y],
			]))
			.attr('stroke', color.blue[500]);

		// Add the projected arc
		this.arc = this.svg.append('path')
			.attr('transform', transform)
			.attr('class', 'my-arc')
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('d', d3.arc()
				.innerRadius(this.radius)
				.outerRadius(this.radius)
				.startAngle(degToRad(90))
				.endAngle(degToRad(180))
			)
			.attr('stroke-width', 2)
			.attr('stroke', color.grey['500']);

		// Draw the draggable node
		this.draggableNode = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', points.e.x)
			.attr('cy', points.e.y)
			.attr('r', 15)
			.attr('fill', 'white')
			.attr('opacity', '0.0')
			.attr('stroke', color.grey['200'])
			.attr('stroke-width', 2)
			.style('cursor', 'pointer')
			.on('mouseover', function (this: any) {
				d3.select(this).raise().attr('opacity', '.75');
			})
			.on('mouseout', function (this: any) {
				d3.select(this).raise().attr('opacity', '0.0');
			})
			.call(d3.drag()
				.on('start', dragStarted)
				.on('drag', dragging)
				.on('end', dragEnded)
			);

		const that = this;

		function dragStarted(this: any) {
			d3.select(this)
				.attr('opacity', '0.75')
				.attr('stroke', color.lime['500']);
		}

		function dragging(this: any, event: any) {
			const {height, width} = that;

			const center = {
				x: width / 2,
				y: height / 2,
			}

			// Calculate the new position of the draggable touch point (this match needs to match the transform)
			const touchPoint: Coordinate = {
				x: event.x - (center.x - (2.5 * that.tickDistance)),
				y: event.y - (center.y - (2.5 * that.tickDistance)),
			};
			d3.select(this).raise()
				.attr('cx', touchPoint.x)
				.attr('cy', touchPoint.y);

			// Calculate the endAngle
			const yAxisDirection = -1;
			const adjacent = touchPoint.x;
			const opposite = touchPoint.y * yAxisDirection;
			const radians = Math.atan(opposite / adjacent);
			const degrees = radToDeg(radians);

			const endAngle = ((): number => {
				if (touchPoint.x < 0) {
					return 270;
				}

				if (touchPoint.y < 0) {
					return 0;
				}

				return 360 + degrees
			})();

			that.updateChart(endAngle);
		}

		function dragEnded(this: any) {
			that.resetDragTouchPoint();
		}
	}

	calculateC1(): Coordinate {
		const angle0 = 360;
		const angle1 = 270;
		const varPhi = degToRad(angle0 - angle1);

		const f = this.calculateF(varPhi);

		return {
			x: this.radius,
			y: this.radius * f,
		}
	}

	calculatePoints(angle0: number, angle1: number) {
		const varPhi = degToRad(angle0 - angle1);
		const f = this.calculateF(varPhi);

		const s: Coordinate = {
			x: this.radius,
			y: 0,
		};

		const e: Coordinate = {
			x: this.radius * Math.cos(varPhi),
			y: this.radius * Math.sin(varPhi),
		};

		const c1: Coordinate = {
			x: this.radius,
			y: this.radius * f,
		};

		const c2: Coordinate = {
			x: this.radius * (Math.cos(varPhi) + f * Math.sin(varPhi)),
			y: this.radius * (Math.sin(varPhi) - f * Math.cos(varPhi)),
		}

		return {
			s,
			e,
			c1,
			c2,
		};
	}

	calculateF(varPhi: number): number {
		return (4 / 3) * Math.tan(varPhi / 4);
	}

	resetDragTouchPoint(): void {
		this.draggableNode
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('stroke', color.grey['200']);
	}

	updateChart(endAngle: number) {
		// Reverse the circle (to work with d3's circle)
		const arcEndAngle = (360 - endAngle) + 90;

		this.arc.attr('d', d3.arc()
			.innerRadius(this.radius)
			.outerRadius(this.radius)
			.startAngle(degToRad(90))
			.endAngle(degToRad(arcEndAngle)));

		// Calculate the points
		const points = this.calculatePoints(360, endAngle);

		// End
		this.eCircle
			.attr('cx', points.e.x)
			.attr('cy', points.e.y);
		this.eText
			.attr('x', points.e.x + this.axisPadding)
			.attr('y', points.e.y + this.labelHeight);

		// Control 2
		this.c2Circle
			.attr('cx', points.c2.x)
			.attr('cy', points.c2.y);
		this.c2Line
			.attr('d', d3.line()([
				[points.e.x, points.e.y],
				[points.c2.x, points.c2.y],
			]));
		this.c2Text
			.attr('x', points.c2.x + this.axisPadding)
			.attr('y', points.c2.y + this.labelHeight)

		// Control 1
		this.c1Circle
			.attr('cx', points.c1.x)
			.attr('cy', points.c1.y);
		this.c1Line
			.attr('d', d3.line()([
				[points.s.x, points.s.y],
				[points.c1.x, points.c1.y],
			]));
		this.c1Text
			.attr('x', points.c1.x + this.axisPadding)
			.attr('y', points.c1.y + this.labelHeight);
	}
}