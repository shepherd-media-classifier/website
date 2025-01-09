import React from "react";
import Button from "../Button/Button";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="info-cta">
        <picture>
          <source
            srcSet={
              new URL("../../assets/arweave-logo_light.svg", import.meta.url)
                .href
            }
            media="(prefers-color-scheme: light)"
          />
          <img
            src={
              new URL("../../assets/arweave-logo_light.svg", import.meta.url)
                .href
            }
            alt="arweave logo"
            width={18}
          />
        </picture>
        <p>
          <b>Generate your own content moderation policies.</b> For the content
          you would like to store on your Arweave node.
        </p>
      </div>
      <div>
        <Button variant="secondary">
          {" "}
          <p>↳ Visit Github</p>
        </Button>
      </div>
    </div>
  );
};

export default InfoBar;
