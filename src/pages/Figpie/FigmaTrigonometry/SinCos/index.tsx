import * as React from 'react';
import * as d3 from 'd3';
import {withStyles} from '@material-ui/core';
import {degToRad, radToDeg} from './trig';
import {color} from '../../../../styling/Color';

interface Props {
	classes: any;
	onChange: (angleDegrees: number) => void;
	value: number;
}

const styles = () => ({
	root: {
		backgroundColor: color.grey['50'],
		fontSize: 0, // this is very important, otherwise you'll get a weird gap at the bottom,

		'& .crisp': {
			shapeRendering: 'crispEdges',
		}
	}
})

class SinCos extends React.Component<Props> {
	svg: any;
	padding: number = (8 * 8);
	width: number = 500;
	height: number = 500;
	radius: number = (Math.min(this.width, this.height) - (2 * this.padding)) / 2;

	// elements
	needle: any;
	needleNode: any;
	needleX2: number = 0;
	needleY2: number = 0;

	draggableNode: any;

	angleDegrees: number = 0;

	constructor(props: Props) {
		super(props);

		this.state = {}
	}

	/**
	 * When the component has mounted...
	 */
	componentDidMount() {
		console.log('componentDidMount');
		this.drawChart(this.props.value);
	}

	/**
	 * When the component updates...
	 */
	componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
		if (this.props.value !== prevProps.value) {
			this.updateChart(this.props.value);
		}
	}

	/**
	 * Render the chart
	 */
	drawChart(data: any) {
		// Move (0,0) to the center of the svg element
		const translate = {
			x: this.width / 2,
			y: this.height / 2,
		};
		const transform = `translate(${translate.x}, ${translate.y})`;

		// Create the new chart
		this.svg = d3.select('#sincos')
			.append('svg')
			.attr('width', this.width)
			.attr('height', this.height);

		// Draw the dot grid
		const horizontalTicksPerRadius = 10;
		const tickDistance = this.radius / horizontalTicksPerRadius;

		for (let x = this.padding - tickDistance; x <= (this.width - (2 * tickDistance)); x += tickDistance) {
			for (let y = this.padding - tickDistance; y <= (this.height - (2 * tickDistance)); y += tickDistance) {
				this.svg.append('line')
					.attr('x1', x)
					.attr('y1', y)
					.attr('x2', x + 1)
					.attr('y2', y)
					.attr('class', 'crisp')
					.attr('stroke-width', 1)
					.attr('stroke', color.grey['300'])
			}
		}

		// Draw the cross-hairs
		const lineGenerator = d3.line();
		const xAxis = lineGenerator([[-this.radius, 0], [this.radius, 0]]);
		const yAxis = lineGenerator([[0, -this.radius], [0, this.radius]]);

		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', xAxis)
			.attr('class', 'crisp')
			.attr('stroke', color.grey['200']);

		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', yAxis)
			.attr('class', 'crisp')
			.attr('stroke', color.grey['200']);

		// Draw the horizontal ticks
		const tickLength = 5;
		for (let i = -10; i <= 10; i++) {
			// X-Axis
			this.svg.append('path')
				.attr('transform', transform)
				.attr('d', d3.line()([
					[i * tickDistance, tickLength + 1],
					[i * tickDistance, -tickLength]
				]))
				.attr('class', 'crisp')
				.attr('stroke', color.grey['100']);

			// Y-Axis
			this.svg.append('path')
				.attr('transform', transform)
				.attr('d', d3.line()([
					[tickLength - 1, i * tickDistance],
					[-tickLength, i * tickDistance]
				]))
				.attr('class', 'crisp')
				.attr('stroke', color.grey['100']);
		}

		// Draw the circle
		const arc = d3.arc()
			.innerRadius(0)
			.outerRadius(this.radius)
			.startAngle(degToRad(0))
			.endAngle(degToRad(360));

		// Draw a circle
		this.svg.append('path')
			.attr('transform', transform)
			.attr('d', arc as unknown as string)
			.attr('stroke', color.grey['500'])
			.attr('fill', 'none')
		// .attr('fill', color.white);


		// Render label at 0°...270°
		const axisPadding = 8;

		// 0°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', this.radius + axisPadding)
			.attr('y', 3)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(1, 0)');

		// 270°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', -12)
			.attr('y', this.radius + axisPadding + 12)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(0, -1)');

		// 180°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', 0 - this.radius - axisPadding - 36)
			.attr('y', 3)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(-1, 0)');

		// 90°
		this.svg.append('text')
			.attr('transform', transform)
			.attr('x', -12)
			.attr('y', 0 - this.radius - axisPadding)
			.attr('font-size', '12px')
			.attr('fill', color.grey['900'])
			.text('(0, 1)');

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
			.attr('stroke', color.blue['500'])
			.attr('stroke-width', 1)
			.style('cursor', 'pointer')
			.call(d3.drag()
				.on('start', dragStarted)
				.on('drag', dragging)
				.on('end', dragEnded)
			);

		function dragStarted(this: any) {
			d3.select(this)
				.attr('opacity', '0.75')
				.attr('stroke', color.grey['100']);
		}

		const that = this;

		function dragging(this: any, event: any, d: any) {
			// console.log('dragged', dragged);

			// Calculate the new position first
			// d.x = event.x;
			// d.y = event.y;
			// d3.select(this).raise().attr("transform", d => "translate(" + [event.x, event.y] + ")") // <-- works
			d3.select(this).raise()
				.attr('cx', event.x - (that.width / 2))
				.attr('cy', event.y - (that.width / 2));

			// Calculate the needle

			// Calculate the (x,y) position of the draggable point
			const props = {
				width: 500,
				height: 500,
			};
			const point = {
				x: event.x - (props.width / 2),
				y: event.y - (props.height / 2),
			}
			// console.log(`actual: ${event.x}, ${event.y}`);
			// console.log(`point: (${point.x}, ${point.y})`)

			const adjacent = point.x;
			const opposite = point.y;
			const radians = Math.atan(opposite / adjacent);
			const degrees = radToDeg(radians);

			// If we are in negative territory, flip the values
			const newValue = (point.x < 0)
				? degrees - 180
				: degrees;

			// Update the needle
			that.updateChart(newValue);
		}

		function dragEnded(this: any, event: any, d: any) {
			d3.select(this).raise()
				.attr('cx', that.needleX2)
				.attr('cy', that.needleY2)
				.attr('opacity', '0.0')
				.attr('stroke', color.blue['500']);

			// Raise the event
			that.props.onChange(Math.round(that.angleDegrees));
		}

	}

	updateChart(value: number) {
		this.angleDegrees = value;

		const theta = degToRad(this.angleDegrees);

		const x1 = 0;
		this.needleX2 = Math.cos(theta) * this.radius;

		const y1 = 0;
		this.needleY2 = Math.sin(theta) * this.radius;

		const lineGenerator = d3.line();
		const needleData = lineGenerator([[x1, y1], [this.needleX2, this.needleY2]]);

		this.needle.attr('d', needleData);
		this.needleNode.attr('cx', this.needleX2);
		this.needleNode.attr('cy', this.needleY2);
	}

	/**
	 * Render the component
	 */
	render() {
		const {classes} = this.props;

		return (
			<div className={classes.root} id="sincos"/>
		)
	}
}

export default withStyles(styles)(SinCos);
