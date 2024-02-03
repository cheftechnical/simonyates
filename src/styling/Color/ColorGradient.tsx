// import * as React from 'react';
// import {Grid} from '@material-ui/core';

import { Grid } from "@mui/material";

type ColorStyle = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

interface Props {
  name: string;
  style: ColorStyle;
}

interface ColorGradientProps {
  hex: string;
  name: string;
}

function ColorGradientBar(colorGradientProps: ColorGradientProps) {
  const { hex, name } = colorGradientProps;

  if (!hex) {
    return (
      <Grid container>
        <Grid item xs={9}>
          {name}
        </Grid>
        <Grid item xs={3}>
          &ndash;
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid container>
      <Grid item xs={9} style={{ backgroundColor: hex }}>
        {name}
      </Grid>
      <Grid item xs={3}>
        {hex}
      </Grid>
    </Grid>
  );
}

export default function ColorGradient(props: Props) {
  const { name, style } = props;

  return (
    <div>
      <Grid container>
        <Grid item style={{ backgroundColor: style["500"] }} xs={9}>
          {name}
          <br />
          500*
        </Grid>
      </Grid>
      <div style={{ width: "100%" }}>
        {Object.entries(style).map((item, index) => (
          <ColorGradientBar hex={item[1]} key={index} name={item[0]} />
        ))}
      </div>
    </div>
  );
}
