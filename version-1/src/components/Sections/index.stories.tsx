import * as React from 'react';
import Sections from './index';
import Section from '../Section';
import {SectionItem} from './SectionItem';

export default {title: 'Components/Sections'};

const handleChange = (sectionItems: SectionItem[]) => {
	console.log('handled items:', sectionItems);
};

export const _default = () => (
	<Sections onChange={handleChange}>
		<Section id="section-1" name="Section 1"/>
		<Section id="section-2" name="Section 2"/>
	</Sections>
);
