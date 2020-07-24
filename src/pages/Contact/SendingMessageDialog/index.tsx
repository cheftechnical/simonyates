import * as React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core';
import {Message} from '../Message';
import axios from 'axios';
import RecaptchaFragment from './RecaptchaFragment';
import SuccessfulFragment from './SuccessfulFragment';
import {makeStyles} from '@material-ui/core/styles';
import rem from '../../../styling/rem';

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
					<RecaptchaFragment
						message={message}
						onClose={onClose}
						onSuccess={() => setContent('success')}
					/>
				);
			case 'success':
				return (<SuccessfulFragment/>);
		}
	}, [content, message]);

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
