import * as React from 'react';
import Figure from './index';

export default {title: 'Components/Figure'};

export const _default = () => <Figure
	alt="Example Figure"
	src="/images/featured/events/example/example.png"
/>;

export const _withCaption = () => <Figure
	alt="Example Figure"
	caption="Here is the caption to the image"
	src="/images/featured/events/example/example.png"
/>;

export const _withCaptionAndMissingImage = () => <Figure
	alt="Example Figure"
	caption="Here is the caption to the image"
	src="/this-image-doesnt-exist.png"
/>;
