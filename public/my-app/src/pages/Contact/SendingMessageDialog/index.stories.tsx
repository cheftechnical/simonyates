import * as React from 'react';
import SendingMessageDialog from './index';
import {Message} from '../Message';

const message: Message = {
	name: 'John Doe',
	emailAddress: 'john.doe@example.com',
	subject: 'Subject placeholder',
	body: 'Body placeholder'
}

export default {title: 'Pages/Contact/SendingMessageDialog'}

export const _default = () => <SendingMessageDialog isOpen={false} message={message}/>;
export const _withOpen = () => <SendingMessageDialog isOpen={true} message={message}/>;
