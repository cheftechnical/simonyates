import * as React from 'react';
import About from "./index";
import {BrowserRouter as Router} from 'react-router-dom';

export default {title: 'Pages/About'};

export const _default = () => <Router><About/></Router>;