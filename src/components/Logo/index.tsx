import * as React from 'react';

interface Props {
	brand:
		'genworth-canada' |
		'infomart' |
		'jib-design-and-advertising' |
		'linkedin' |
		'mayo-clinic' |
		'rbc' |
		'twitter' |
		'uncharted-software';
	variant: string;
	width?: number | string;
}

const basePath = '/logos';

export default function Logo(props: Props) {
	const {brand, variant, width} = props;

	const {alt, src} = React.useMemo(() => {
		switch (brand) {
			case 'genworth-canada':
				return {
					alt: 'Genworth Canada logo',
					src: `${basePath}/${brand}/genworth-canada--color--598x598.jpg`
				};
			case 'infomart':
				return {
					alt: 'Infomart logo',
					src: `${basePath}/${brand}/infomart--color--400x82.png`
				};
			case 'jib-design-and-advertising':
				return {
					alt: 'Jib Design & Advertising logo',
					src: ''
				};
			case 'linkedin':
				return {
					alt: 'LinkedIn logo',
					src: `${basePath}/${brand}/${brand}--${variant}.svg`
				};
			case 'mayo-clinic':
				return {
					alt: 'Mayo Clinic logo',
					src: `${basePath}/${brand}/mayo-clinic--color--200x200.png`
				};
			case 'rbc':
				return {
					alt: 'Royal Bank of Canada (RBC) logo',
					src: `${basePath}/${brand}/rbc--color--208x270.png`
				}
			case 'twitter':
				return {
					alt: 'Twitter logo',
					src: `${basePath}/${brand}/${brand}--${variant}.svg`
				};
			case 'uncharted-software':
				return {
					alt: 'Uncharted Software logo',
					src: `${basePath}/${brand}/uncharted-software--color--400x400.png`
				};
			default:
				return {
					alt: '',
					src: ''
				};
		}
	}, [brand, variant]);

	const thisWidth = width || '100%';

	return (
		<img alt={alt} src={src} width={thisWidth}/>
	);
};
