import React from "react";
import Button from "../Button/Button";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <p>
        <b>Generate your own content moderation policies.</b> For the content
        you would like to store on your Arweave node.
      </p>
      <div>
        <Button variant="secondary"> ↳ Visit Github</Button>
      </div>
    </div>
  );
};

export default InfoBar;
