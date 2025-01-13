import React from "react";

interface ImgShepherdThemedProps {
  size: number;
}

export const ImgShepherdThemed: React.FC<ImgShepherdThemedProps> = ({
  size,
}) => (
  <picture className="shepherd-logo">
    <source
      srcSet={
        new URL("../assets/Shepherd_logo_light.svg", import.meta.url).href
      }
      media="(prefers-color-scheme: light)"
    />
    <img
      src={new URL("../assets/Shepherd_logo_light.svg", import.meta.url).href}
      alt="shepherd logo"
      width={size}
    />
  </picture>
);
