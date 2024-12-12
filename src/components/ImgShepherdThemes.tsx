import { Box, Card } from "grommet";
import React from "react";

export const ImgShepherdThemed = () => (
  <picture>
    <img
      src={new URL("../assets/shepherd_logo.svg", import.meta.url).href}
      alt="shepherd logo"
      width="45px"
    />
  </picture>
);
