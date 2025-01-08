import React, { useEffect, useState } from "react";
import { ImgShepherdThemed } from "./components/ImgShepherdThemes";
import { CodeBox } from "./components/CodeBox";
import { handleCopyToClipboard } from "./helperFunctions/copyToClipboard";
import Button from "./components/Button/Button";
import { ImgGlobeArweaveShepherd } from "./components/ImgGlobeArweaveShepherd";
import InfoBar from "./components/InfoBar/InfoBar";

function App() {
  const [version, setVersion] = useState("...");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/shepherd-media-classifier/shepherd/refs/heads/master/package.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setVersion(data.version);
      })
      .catch((error) => {
        console.error("Failed to fetch version:", error);
        setVersion("Error fetching version");
      });
  }, []);

  return (
    <>
      <div className="full-page">
        {/* <a href="https://arweave.org">
              <picture>
                <source
                  srcSet={
                    new URL("./assets/arweave_logo_light.svg", import.meta.url)
                      .href
                  }
                  media="(prefers-color-scheme: light)"
                />
                <img
                  src={
                    new URL("./assets/arweave_logo.svg", import.meta.url).href
                  }
                  alt="arweave"
                  width={100}
                />
              </picture>
              </a> */}

        <div className="body-wrapper">
          <div className="column side-bar">
            <div className="top-sidebar">
              <ImgShepherdThemed size={140} />
              <div className="code-copy-content">
                <p>
                  Get started with a <b>NSFW Filter</b> to add to your Arweave
                  start command:{" "}
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
                <Button variant="accent">
                  <picture className="github-logo">
                    <source
                      srcSet={
                        new URL(
                          "./assets/github-logo_light.svg",
                          import.meta.url
                        ).href
                      }
                      media="(prefers-color-scheme: light)"
                    />
                    <img
                      src={
                        new URL("./assets/Shepherd_logo.svg", import.meta.url)
                          .href
                      }
                      alt="github logo"
                      width={20}
                    />
                  </picture>
                  <p>Github</p>
                </Button>{" "}
                <Button>
                  {" "}
                  <p>Arweave.org</p>
                </Button>
              </div>
            </div>
            <div className="bottom-sidebar">
              <span className="current-version">
                current version: {version}
              </span>
            </div>
          </div>
          <div className="main-wrapper">
            <InfoBar />
            <div className="column main-container">
              <div className="column content-container ">
                <h2>Overview</h2>
                <p>
                  <a
                    href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme"
                    style={{ zIndex: "2", cursor: "pointer" }}
                  >
                    <i>shepherd</i>{" "}
                  </a>
                  is a framework to build content moderation systems.
                </p>
                <p>
                  The output of shepherd is a transaction ID list that you can
                  load with an Arweave node, in order to protect your node from
                  storing and serving unwanted material.
                </p>
                <div className="illustration-container">
                  <ImgGlobeArweaveShepherd width={"100%"} />
                </div>
                <p>
                  It uses a simple plugin architecture so that you are in
                  control of what is filtered, and makes creating your own
                  filters easier through the use of these plugins.
                </p>
              </div>
              <div className="column content-container ">
                <h2>Getting Started</h2>
                <p>
                  To help you get started, @ArweaveTeam provides an NSFW content
                  filter which you can load by adding the following to your
                  Arweave start command:
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
                <p>
                  It uses a simple plugin architecture so that you are in
                  control of what is filtered, and makes creating your own
                  filters easier through the use of these plugins.
                </p>
              </div>
              <div className="column content-container ">
                <h2>Your Nodes Your Content Moderation</h2>

                <div className="">
                  <p>
                    <a
                      href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme"
                      style={{ zIndex: "2", cursor: "pointer" }}
                    >
                      <i>shepherd</i>{" "}
                    </a>{" "}
                    puts the control over content you want to filter fully in
                    your hands.
                  </p>
                  <p>
                    It handles all of the raw content from the weave data,
                    filters out non-media and most invalid data, and passes it
                    on to your filter plugin.
                  </p>
                  <p>
                    What content you decide to filter is up to you and your
                    moral and legal compliance needs.
                  </p>
                  <p>
                    Your filter plug-in is fully customizable and allows you to
                    filter anything you can build an AI classification filter
                    for, or even use simpler filters such as blacklist/whitelist
                    for a particular app’s content media.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
