import * as React from 'react';
import DefaultLayout from '../../layouts/Default';
import Hero from './Hero';
import Stats from './Stats';
import LifeAsAMaker from './LifeAsAMaker';
import ModelTrainsRobotsAndApple from './ModelTrainsRobotsAndApple';
import CookingArduinoAndPhotography from './CookingArduinoAndPhotography';
import PhotoGallery from './PhotoGallery';

export default function About() {
    return (
        <DefaultLayout title="About" top="about">
            <Hero/>
            <Stats/>
            <LifeAsAMaker/>
            <ModelTrainsRobotsAndApple/>
            <CookingArduinoAndPhotography/>
            <PhotoGallery/>
        </DefaultLayout>
    );
};
