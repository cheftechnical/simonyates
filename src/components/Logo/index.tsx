import * as React from 'react';

interface Props {
	brand: string;
	variant: string;
}

const basePath = '/logos/';

export default function Logo(props: Props) {
	const {brand, variant} = props;

	const {alt, src} = React.useMemo(() => {
		const src = `${basePath}${brand}/${brand}--${variant}.svg`;

		switch (brand) {
			case 'linkedin':
				return {alt: 'LinkedIn logo', src: src};
			case 'twitter':
				return {alt: 'Twitter logo', src: src};
			default:
				return {alt: '', src: ''};
		}
	}, [brand, variant]);

	return (
		<img alt={alt} src={src}/>
	);
};
