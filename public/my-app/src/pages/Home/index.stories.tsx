import * as React from 'react';
import Home from './index';
import {BrowserRouter as Router} from 'react-router-dom';

export default {title: 'Pages/Homepage'};

export const _default = () => <Router><Home/></Router>;
