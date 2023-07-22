import * as React from 'react';
import {Button} from '@material-ui/core';

export default {title: 'Style Guide/Buttons/Text'};

export const _default = () => <Button variant="text">Enabled</Button>;

export const _disabled = () => <Button disabled variant="text">Disabled</Button>;
