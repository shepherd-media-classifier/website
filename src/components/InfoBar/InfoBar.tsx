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
        <p className="info-content">
          <b>Generate your own content moderation policies.</b>{" "}
          <span className="secondary-info-content">
            For the content you would like to store on your Arweave node.
          </span>
        </p>
      </div>
      <div>
        <a href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme">
          <Button variant="secondary">
            {" "}
            <p>↳ Visit Github</p>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
