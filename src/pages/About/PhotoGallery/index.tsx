import * as React from 'react';
import Typography from '../../../styling/Typography';
import Photos from './Photos';
import MyContainer from '../../../styling/MyContainer';

export default function PhotoGallery() {
  return (
    <MyContainer>
      <Typography group="primary" variant="body" weight="regular">
        In case you&rsquo;re curious, here are some of my photos from traveling
      </Typography>

      <Photos/>
    </MyContainer>
  );
};
