import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';
import {Message} from './Message';
import {makeStyles} from '@material-ui/core/styles';
import ButtonContained from '../../styling/ButtonContained';
import MyTextField from '../../styling/MyTextField';

// @source https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const regexEmailAddress = /\S+@\S+\.\S+/

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
						helperText={errors.name?.message ? errors.name.message.toString() : undefined}
						placeholder="Name"
					/>}
					name="name"
					control={control}
					rules={{
						required: 'Your name is required'
					}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.emailAddress}
						helperText={errors.emailAddress?.message ? errors.emailAddress.message.toString() : undefined}
						placeholder="Email"
						InputProps={{type: "text"}}
					/>}
					name="emailAddress"
					control={control}
					type="email"
					rules={{
						required: 'Your email address is required',
						pattern: {
							value: regexEmailAddress,
							message: 'You must provide a valid email address'
						}
					}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.subject}
						helperText={errors.subject?.message ? errors.subject.message.toString() : undefined}
						placeholder="Subject"
					/>}
					name="subject"
					control={control}
					rules={{
						required: 'A subject is required'
					}}
				/>
				<Controller
					as={<MyTextField
						error={!!errors.body}
						multiline
						helperText={errors.body?.message ? errors.body.message.toString() : undefined}
						placeholder="Message"
						rows={7}
					/>}
					name="body"
					control={control}
					rules={{
						required: 'A message is required'
					}}
				/>

				<ButtonContained
					className={classes.button}
					endIcon={<SendIcon style={{fontSize: '16px'}}/>}
					type="submit"
				>
					Send
				</ButtonContained>

			</form>
		</div>
	);
};
