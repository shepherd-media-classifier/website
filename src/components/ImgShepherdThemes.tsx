import { Box, Card } from "grommet";
import React from "react";

export const ImgShepherdThemed = () => (
  <picture>
    <img
      src={new URL("../assets/Shepherd_logo.svg", import.meta.url).href}
      alt="shepherd logo"
      width="50px"
    />
  </picture>
);
