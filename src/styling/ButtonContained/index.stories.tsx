import * as React from 'react';
import ButtonContained from './index';
import SendIcon from '@material-ui/icons/Send';

export default {title: 'Style Guide/ButtonContained'};

export const _default = () => <ButtonContained>Label</ButtonContained>;
export const _withIcon = () => <ButtonContained endIcon={<SendIcon style={{fontSize: '16px'}}/>}>Enabled</ButtonContained>