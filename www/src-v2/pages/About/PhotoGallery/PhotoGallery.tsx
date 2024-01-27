import MyContainer from '../../../styling/MyContainer/MyContainer';
import Photos from './Photos';
import {Typography} from "@mui/material";

export default function PhotoGallery() {
  return (
    <MyContainer>
      {/*<Typography group="primary" variant="body" weight="regular">*/}
      <Typography component="p" variant="primaryBody">
        In case you&rsquo;re curious, here are some of my photos from traveling
      </Typography>

      <Photos/>
    </MyContainer>
  );
};
