import * as React from 'react';
import NavTop from './index';
import {BrowserRouter as Router} from "react-router-dom";

export default {title: 'Components/NavTop'};

export const _default = () =>  <Router><NavTop/></Router>;
export const withWorkSelected = () => <Router><NavTop selected="work"/></Router>
export const withFeaturedSelected = () => <Router><NavTop selected="featured"/></Router>
export const withAboutSelected = () => <Router><NavTop selected="about"/></Router>
export const withContactSelected = () => <Router><NavTop selected="contact"/></Router>
