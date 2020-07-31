import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import {Message} from './Message';
import {makeStyles} from '@material-ui/core/styles';
import ButtonContained from '../../styling/ButtonContained';
import MyTextField from '../../styling/MyTextField';

interface Props {
	onSubmit: (data: Message) => void;
}

const useStyles = makeStyles((theme) => ({
	button: {
		marginTop: theme.spacing(16 / 8)
	}
}));

export default function ContactForm(props: Props) {
	const classes = useStyles();

	const {onSubmit} = props;
	const {control, handleSubmit, errors} = useForm<Message>();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					as={<MyTextField
						error={!!errors.name}
						helperText={errors.name ? 'This name field is required' : undefined}
						placeholder="Name"
					/>}
					name="name"
					control={control}
					rules={{required: true}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.emailAddress}
						helperText={errors.emailAddress ? 'Your email address is required' : undefined}
						placeholder="Email"
					/>}
					name="emailAddress"
					control={control}
					type="email"
					rules={{required: true}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.subject}
						helperText={errors.subject ? 'The subject field is required' : undefined}
						placeholder="Subject"
					/>}
					name="subject"
					control={control}
					rules={{required: true}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.body}
						multiline
						helperText={errors.body ? 'This name field is required' : undefined}
						placeholder="Message"
						rows={7}
					/>}
					name="body"
					control={control}
					rules={{required: true}}
				/>

				<ButtonContained
					className={classes.button}
					endIcon={<SendIcon style={{fontSize: '16px'}}/>}
					type="submit"
				>
					Send
				</ButtonContained>

				{errors.name && <span>This name field is required</span>}
				{errors.emailAddress && <span>This email address is required</span>}
			</form>
		</div>
	);
};
