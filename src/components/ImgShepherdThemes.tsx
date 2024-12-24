import { Box, Card } from "grommet";
import React from "react";

export const ImgShepherdThemed = () => (
  <picture>
    <source
      srcSet={new URL('../assets/Shepherd_logo_light.svg', import.meta.url).href}
      media="(prefers-color-scheme: light)"
    />
    <img
      src={new URL("../assets/Shepherd_logo.svg", import.meta.url).href}
      alt="shepherd logo"
      width="50px"
    />
  </picture>
);
