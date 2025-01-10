import React from "react";

interface ImgGlobeArweaveShepherdProps {
  width: string;
}

export const ImgGlobeArweaveShepherd: React.FC<
  ImgGlobeArweaveShepherdProps
> = ({ width }) => (
  <picture className="shepherd-logo">
    <source
      srcSet={
        new URL(
          "../assets/arweave-shepherd-globe-illustration_light.svg",
          import.meta.url
        ).href
      }
      media="(prefers-color-scheme: light)"
    />
    <img
      src={
        new URL(
          "../assets/arweave-shepherd-globe-illustration_dark.svg",
          import.meta.url
        ).href
      }
      alt="shepherd logo"
      width={width}
    />
  </picture>
);
