import * as React from 'react';
import NoMatch from "./index";
import {BrowserRouter as Router} from 'react-router-dom';

export default {title: 'Pages/404 Page Not Found'};

export const _default = () => <Router><NoMatch/></Router>;
