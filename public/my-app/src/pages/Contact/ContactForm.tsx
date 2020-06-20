import * as React from 'react';
import {Button, TextField} from '@material-ui/core';
import {Controller, useForm} from 'react-hook-form';
import SendIcon from '@material-ui/icons/Send';

type Message = {
	name: string,
	emailAddress: string,
	subject: string,
	body: string,
};

interface Props {
	onSubmit: (data: Message) => void;
}

export default function ContactForm(props: Props) {

	const {onSubmit} = props;
	const {control, handleSubmit, errors} = useForm<Message>();

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					as={<TextField
						fullWidth
						required
						placeholder="Name"
					/>}
					name="name"
					control={control}
					rules={{required: true}}
				/>
				<Controller
					as={<TextField
						fullWidth
						required
						helperText="hola"
						placeholder="Email"
					/>}
					name="emailAddress"
					control={control}
					type="email"
					rules={{required: true}}
				/>
				<Controller
					as={<TextField
						fullWidth
						required
						placeholder="Subject"
					/>}
					name="subject"
					control={control}
					rules={{required: true}}
				/>
				<Controller
					as={<TextField
						fullWidth
						multiline
						required
						placeholder="Message"
						rows={5}
					/>}
					name="body"
					control={control}
					rules={{required: true}}
				/>

				<Button
					endIcon={<SendIcon/>}
					type="submit"
					variant="contained"
				>
					Send
				</Button>

				{errors.name && <span>This name field is required</span>}
				{errors.emailAddress && <span>This email address is required</span>}
			</form>
		</div>
	);
};
