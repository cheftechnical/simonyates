import * as React from 'react';
import {Button, TextField} from '@material-ui/core';
import {useForm} from 'react-hook-form';

type Inputs = {
	name: string,
	emailAddress: string,
	subject: string,
	body: string,
};

interface Message {
	name: string;
	emailAddress: string;
	subject: string;
	body: string;
}

const defaultMessage: Message = {
	name: '',
	emailAddress: '',
	subject: '',
	body: '',
};

export default function ContactForm() {

	const {register, handleSubmit, watch, errors} = useForm<Inputs>();
	const onSubmit = (data: Inputs) => console.log(data);

	const [message, setMessage] = React.useState(defaultMessage);
	const [isSending, setIsSending] = React.useState(false);

	console.log(watch('name'));
	console.log(errors);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input name="name" defaultValue="my name goes here" ref={register({ required: true })} />
				<input name="emailAddress" defaultValue="my email address goes here" type="email" ref={register({ required: true })} />

				{/*<TextField*/}
				{/*	fullWidth*/}
				{/*	required*/}
				{/*	label="Name"*/}
				{/*	name="name"*/}
				{/*	// ref={register({required: true})}*/}
				{/*	ref={register}*/}
				{/*	// onChange={handleChange}*/}
				{/*	// value={message.name}*/}
				{/*/>*/}
				{/*<TextField*/}
				{/*	fullWidth*/}
				{/*	required*/}
				{/*	label="Email"*/}
				{/*	name="emailAddress"*/}
				{/*	onChange={handleChange}*/}
				{/*	// ref={register({required: true})}*/}
				{/*	type="email"*/}
				{/*	value={message.emailAddress}*/}
				{/*/>*/}
				{/*<TextField*/}
				{/*	fullWidth*/}
				{/*	required*/}
				{/*	label="Subject"*/}
				{/*	name="subject"*/}
				{/*	onChange={handleChange}*/}
				{/*	// ref={register({required: true})}*/}
				{/*	value={message.subject}*/}
				{/*/>*/}
				{/*<TextField*/}
				{/*	fullWidth*/}
				{/*	multiline*/}
				{/*	required*/}
				{/*	label="Message"*/}
				{/*	name="body"*/}
				{/*	onChange={handleChange}*/}
				{/*	// ref={register({required: true})}*/}
				{/*	value={message.body}*/}
				{/*/>*/}
				<Button type="submit" variant="contained">Send</Button>

				{errors.name && <span>This field is required</span>}
			</form>
		</div>
	);
};
