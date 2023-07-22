import * as d3 from 'd3';
import {Visualization} from '../../../libs/Visualization';
import {BaseVisualization, } from '../../../libs/BaseVisualization';
import {color} from '../../../../../styling/Color';
import {degToRad, radToDeg} from '../../../libs/trig';

export class CircleBasicsD3 extends BaseVisualization implements Visualization {
	// Properties
	angleDegrees: number = 0;
	angleLineDistance: number = 0;
	needleAt = {
		x1: 0,
		y1: 0,
		x2: 0,
		y2: 0
	};
	yAxisDirection: number = -1;

	// Events
	onChange: any;

	// Elements
	angleLine: any;        // The line representing the angle
	coordinateLabel: any;  // The label of the current coordinates
	draggableNode: any;    // The node that the user can click on to drag
	needle: any;           // The lien representing the needle
	needleNode: any;       // The circle representing the tip of the needle


	/**
	 * Draw the chart
	 * @param data
	 */
	drawChart() {
		// Move (0,0) to the center of the svg element
		const translate = {
			x: this.width / 2,
			y: this.height / 2,
		};
		const transform = `translate(${translate.x}, ${translate.y})`;

		const ticksPerRadius = 10;

		// Create the new chart
		this.createChart('#sincos', this.width, this.height);

		// Draw the dot grid
		this.angleLineDistance = this.tickDistance * 1.5;

		// Calculate the distance between each tick of the x/y axis
		this.tickDistance = this.calculateTickDistance(this.radius, ticksPerRadius);

		this.addDotGrid(this.padding, ticksPerRadius, this.tickDistance, this.width, this.height);

		// Draw the cross-hairs
		const lineGenerator = d3.line();
		// const xAxis = lineGenerator([[0 - this.radius, 0], [this.radius, 0]]);
		const xAxis = lineGenerator([
			[0 - this.radius, 0],
			[this.radius, 0.5], // there is a weird anti-alias bug that caused the xAxis to not render in Chrome, but making the line slightly skewed fixes this
		])
		const yAxis = lineGenerator([[0, -this.radius], [0, this.radius]]);

		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', xAxis)
			.attr('class', 'crisp')
			.attr('stroke-width', 1)
			.attr('stroke', color.grey['200']);

		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', yAxis)
			.attr('class', 'crisp')
			.attr('stroke-width', 1)
			.attr('stroke', color.grey['200']);

		// Draw the axis ticks ticks
		const tickLength = 5;
		for (let i = -10; i <= 10; i++) {
			// X-Axis
			this.svg.append('path')
				.attr('transform', transform)
				.attr('d', d3.line()([
					[i * this.tickDistance, tickLength + 1],
					[i * this.tickDistance, -tickLength]
				]))
				.attr('class', 'crisp')
				.attr('stroke', color.grey['100']);

			// Y-Axis
			this.svg.append('path')
				.attr('transform', transform)
				.attr('d', d3.line()([
					[tickLength - 1, i * this.tickDistance],
					[-tickLength, i * this.tickDistance]
				]))
				.attr('class', 'crisp')
				.attr('stroke', color.grey['100']);
		}

		// Draw the circle
		this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', 0)
			.attr('cy', 0)
			.attr('r', this.radius)
			.attr('stroke', color.grey['500'])
			.attr('fill', 'none');

		// Render label at 0°...270°
		const axisPadding = 8;
		const degreeTextFill = color.grey['500'];

		// 0°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', this.radius + axisPadding)
			.attr('y', 3)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(1, 0)');
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', this.radius - axisPadding - 16 - 3) // actual width of label, 8=fudge
			.attr('y', (21 / 2) - 4) // actual height, 4=fudge
			.attr('font-size', '16px')
			.attr('fill', degreeTextFill)
			.text('0°');

		// 270°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - (26 / 2)) // actual label width
			.attr('y', this.radius + axisPadding + (16 / 2)) // actual label height
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(0, 1)');
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - (32 / 2)) // actual label width
			.attr('y', this.radius - axisPadding - (21 / 2)) // actual label height
			.attr('font-size', '16px')
			.attr('fill', degreeTextFill)
			.text('270°');

		// 180°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - this.radius - axisPadding - 36)
			.attr('y', 3)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(-1, 0)');
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - this.radius + axisPadding + 8) // actual label width
			.attr('y', (21 / 2) - 4) // actual height, 4=fudge
			.attr('font-size', '16px')
			.attr('fill', degreeTextFill)
			.text('180°');

		// 90°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', -12)
			.attr('y', 0 - this.radius - axisPadding)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(0, -1)');
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - (25 / 2) + 3) // actual label width, 3=fudge
			.attr('y', 0 - this.radius + axisPadding + (25) - 3) // actual height, 4=fudge
			.attr('font-size', '16px')
			.attr('fill', degreeTextFill)
			.text('90°');

		// Draw the needle
		this.needle = this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.line()([
				[0, 0],
				[this.radius, 0]
			]))
			.attr('stroke', color.blue['500']);

		// Draw the simple node
		this.needleNode = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', this.radius)
			.attr('cy', 0)
			.attr('r', 7)
			.attr('fill', 'none')
			// .attr('fill', 'white')
			.attr('stroke', color.blue['500'])
			.attr('stroke-width', 2)
			.style('cursor', 'pointer');

		// Draw the draggable node
		this.draggableNode = this.svg.append('circle')
			.attr('transform', transform)
			.attr('cx', this.radius)
			.attr('cy', 0)
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

		// Draw the label of the current (x,y) coordinates
		this.coordinateLabel = this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0)
			.attr('y', 0)
			.attr('font-size', '14px')
			.attr('fill', color.blue['500'])
			.text(`(x, y)`);

		// Draw the angle line
		this.angleLine = this.svg.append('path')
			.attr('transform', transform)
			.attr('d', d3.arc()
				.innerRadius(this.angleLineDistance)
				.outerRadius(this.angleLineDistance)
				.startAngle(degToRad(0))
				.endAngle(degToRad(0))
			)
			.attr('stroke', color.grey['300'])
			.attr('fill', 'none');


		const that = this;

		function dragStarted(this: any) {
			d3.select(this)
				.attr('opacity', '0.75')
				.attr('stroke', color.lime['500']);
		}

		function dragging(this: any, event: any, d: any) {
			const {height, width} = that;
			const yAxisDirection = that.yAxisDirection;

			// Calculate the new position of the draggable touch point
			const touchPoint = {
				x: event.x - (width / 2),
				y: event.y - (height / 2),
			}
			d3.select(this).raise()
				.attr('cx', touchPoint.x)
				.attr('cy', touchPoint.y);

			// Calculate the target direction to the touch point
			const adjacent = touchPoint.x;
			const opposite = touchPoint.y * yAxisDirection;
			const radians = Math.atan(opposite / adjacent);
			const degrees = radToDeg(radians);

			// THE FOLLOWING CRAPPY CODE WAS WRITTEN WHEN I WAS REALLY TIRED
			// I NEED TO FIX THIS DISASTER!

			// If we are in negative territory, flip the values
			const newValue = (touchPoint.x < 0)
				? 180 + degrees
				: degrees;

			const newValue2 = (newValue < 0)
				? 360 + newValue
				: newValue;

			// const newValue = (touchPoint.x < 0)
			// 	? 360 + degrees
			// 	: degrees;
			// const newValue = degrees;
			// console.log('newValue', newValue);

			// Update the needle
			// const newValue = degrees;
			that.updateChart(newValue2);
		}

		function dragEnded(this: any) {
			that.resetDragTouchPoint();

			// Raise the onChange event
			// that.props.onChange(Math.round(that.angleDegrees));

			that.onChange(Math.round(that.angleDegrees))
		}
	}

	updateChart(newValue: number) {
		// const {yAxisDirection} = this.props;
		const yAxisDirection = this.yAxisDirection;
		// console.log('yAxisDirection [369]:', yAxisDirection);

		// Update the global property
		this.angleDegrees = newValue;

		// Calculate the needle position
		const theta = degToRad(this.angleDegrees);
		this.needleAt = {
			x1: 0,
			y1: 0,
			x2: Math.cos(theta) * this.radius,
			y2: Math.sin(theta) * this.radius * yAxisDirection,
		}
		const lineGenerator = d3.line();
		const needleData = lineGenerator([
			[this.needleAt.x1, this.needleAt.y1],
			[this.needleAt.x2, this.needleAt.y2]
		]);
		this.needle
			.attr('d', needleData);
		this.needleNode
			.attr('cx', this.needleAt.x2)
			.attr('cy', this.needleAt.y2);

		// Calculate the angle line
		const angleLine = {
			startAngle: 90,
			endAngle: 90 - newValue,
		};
		this.angleLine.attr('d', d3.arc()
			.innerRadius(this.angleLineDistance)
			.outerRadius(this.angleLineDistance)
			.startAngle(degToRad(angleLine.startAngle))
			.endAngle(degToRad(angleLine.endAngle))
		);

		// Calculate the label position
		const indent = 8 * 3
		const labelCenter = {
			x: Math.cos(theta) * (this.radius - indent),
			y: Math.sin(theta) * (this.radius - indent) * yAxisDirection,
		}
		const labelValue = {
			x2: (this.needleAt.x2 / this.radius).toFixed(3),
			y2: (this.needleAt.y2 / this.radius).toFixed(3),
		}
		this.coordinateLabel
			.text(`__ (${labelValue.x2}, ${labelValue.y2})`)
			.attr('x', labelCenter.x)
			.attr('y', labelCenter.y);
	}

	/**
	 * Returns the drag touch point to the needle position
	 */
	resetDragTouchPoint() {
		this.draggableNode
			.attr('cx', this.needleAt.x2)
			.attr('cy', this.needleAt.y2)
			.attr('stroke', color.grey['200']);
	}
}