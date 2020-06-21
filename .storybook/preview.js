import * as React from 'react';
import {addDecorator} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';

addDecorator(storyFn => <Router>{storyFn()}</Router>);
