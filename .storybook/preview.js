import * as React from 'react';
import {addDecorator} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import DefaultTheme from '../src/styling/DefaultTheme';

addDecorator(storyFn => <Router><DefaultTheme>{storyFn()}</DefaultTheme></Router>);
