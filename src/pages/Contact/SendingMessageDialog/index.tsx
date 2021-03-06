import * as React from 'react';
import {Dialog} from '@material-ui/core';
import {Message} from '../Message';
import ContentRecaptcha from './ContentRecaptcha';
import ContentSuccessful from './ContentSuccessful';

interface Props {
	defaultFragment?: 'recaptcha' | 'success';
	isOpen: boolean;
	message?: Message;
	onClose: () => void;
}

const defaultProps = {
	defaultFragment: 'recaptcha'
}

export default function SendingMessageDialog(props: Props) {
	const {defaultFragment, isOpen, message, onClose} = {...defaultProps, ...props};

	const [content, setContent] = React.useState(defaultFragment);

	const currentContent = React.useMemo(() => {
		switch (content) {
			case 'recaptcha':
				return (
					<ContentRecaptcha
						message={message}
						onClose={onClose}
						onSuccess={() => setContent('success')}
					/>
				);
			case 'success':
				return (<ContentSuccessful/>);
		}
	}, [content, message, onClose]);

	return (
		<Dialog
			fullWidth
			aria-labelledby="sending-message-dialog-title"
			maxWidth="sm"
			onClose={onClose}
			open={isOpen}
		>
			{currentContent}
		</Dialog>
	)
};
