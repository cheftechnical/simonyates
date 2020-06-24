import * as React from 'react';
import {Button} from '@material-ui/core';

export default {title: 'Style Guide/Buttons/Contained'};

export const _default = () => <Button variant="contained">Enabled</Button>;

export const _disabled = () => <Button disabled variant="contained">Disabled</Button>;
