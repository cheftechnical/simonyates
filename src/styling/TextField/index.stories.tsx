import * as React from 'react';
import {TextField} from '@material-ui/core';

export default {title: 'Style Guide/TextField'};

export const _default = () => <TextField fullWidth value="Default"/>;
export const _disabled = () => <TextField disabled fullWidth value="Disabled"/>;
