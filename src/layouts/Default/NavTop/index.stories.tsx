import * as React from 'react';
import NavTop from './index';
import {BrowserRouter as Router} from "react-router-dom";

export default {title: 'Components/NavTop'};

export const _default = () =>  <NavTop/>;
export const withWorkSelected = () => <NavTop selected="work"/>
export const withFeaturedSelected = () => <NavTop selected="featured"/>
export const withAboutSelected = () => <NavTop selected="about"/>
export const withContactSelected = () => <NavTop selected="contact"/>
