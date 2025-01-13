import React from "react";
import { ImgShepherdThemed } from "./ImgShepherdThemes";
import { handleCopyToClipboard } from "../helperFunctions/copyToClipboard";
import { CodeBox } from "./CodeBox";
import Button from "./Button/Button";

interface SidebarProps {
  version: string;
}

const Sidebar: React.FC<SidebarProps> = ({ version }) => {
  return (
    <aside className="side-bar-wrapper">
      <div className="column side-bar">
        <div className="column side-bar-inner">
          <ImgShepherdThemed size={140} />
          <div className="code-copy-content">
            <p>
              Get started with a <b>NSFW Filter</b> to add to your Arweave start
              command:{" "}
            </p>
            <div
              className="code-wrapper"
              onClick={() =>
                handleCopyToClipboard(
                  "transaction_blacklist_url http://shepherd-v.com/nsfw.txt"
                )
              }
            >
              <CodeBox>
                transaction_blacklist_url http://shepherd-v.com/nsfw.txt
              </CodeBox>
            </div>
          </div>
          <div className="button-wrapper">
            <a href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme">
              {" "}
              <Button variant="accent">
                <picture className="github-logo">
                  <source
                    srcSet={
                      new URL(
                        "../assets/github-logo_light.svg",
                        import.meta.url
                      ).href
                    }
                    media="(prefers-color-scheme: light)"
                  />
                  <img
                    src={
                      new URL(
                        "../assets/github-logo_light.svg",
                        import.meta.url
                      ).href
                    }
                    alt="github logo"
                    width={20}
                  />
                </picture>
                <p>Github</p>
              </Button>{" "}
            </a>
            <a href="https://arweave.org">
              <Button>
                {" "}
                <p>Arweave.org</p>
              </Button>
            </a>
          </div>
          <div className="bottom-sidebar">
            <span className="current-version">current version: {version}</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
