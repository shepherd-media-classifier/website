import React, { useEffect, useState } from "react";
import { ImgShepherdThemed } from "./components/ImgShepherdThemes";
import { FooterHot } from "./components/FooterHot";
import { CodeBox } from "./components/CodeBox";
import { handleCopyToClipboard } from "./helperFunctions/copyToClipboard";

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
        <a href="https://arweave.org">
          <img
            className="arweave-logo"
            src={new URL("./assets/arweave_logo.svg", import.meta.url).href}
            alt="copy"
            width={120}
          />
        </a>
        <div className="content-container">
          <div className="row header-container">
            <div className="logo-container container primary-background-container">
              <ImgShepherdThemed />
              <span className="shepherd-font">Shepherd</span>
            </div>
            <div className="accent-content-container header-padding column container primary-background-container main-gap">
              <h1>
                Current Version: <u>Shepherd {version}</u>
              </h1>
              <p>
                Generate your own content moderation policies for the content
                you would like to store on your Arweave node.
              </p>
              <p>
                This is the{" "}
                <a href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme">
                  <u className="blue">github</u>
                </a>{" "}
                to start using Shepherd.
              </p>
            </div>
          </div>
          <div className="row body-content">
            <div className="column">
              <div className="column container primary-background-container regular-padding main-gap">
                <h2>Overview</h2>
                <p>
                  <i>Shepherd</i> is a framework to build content moderation
                  systems.
                </p>
                <p>
                  The output of shepherd is a transaction ID list that you can
                  load with an Arweave node, in order to protect your node from
                  storing and serving unwanted material.
                </p>
                <p>
                  It uses a simple plugin architecture so that you are in
                  control of what is filtered, and makes creating your own
                  filters easier through the use of these plugins.
                </p>
              </div>
              <div className="column container primary-background-container regular-padding main-gap">
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
                  <img
                    src={new URL("./assets/Copy.svg", import.meta.url).href}
                    alt="copy"
                    width={15}
                  />
                </div>
                <p>
                  It uses a simple plugin architecture so that you are in
                  control of what is filtered, and makes creating your own
                  filters easier through the use of these plugins.
                </p>
              </div>
            </div>
            <div className="column responsive-width">
              <div className="column regular-padding primary-background-container container main-gap">
                <div>
                  <h2>
                    <u>Your</u> Nodes
                  </h2>
                  <h2>
                    <u>Your</u> Content Moderation
                  </h2>
                </div>
                <div className="main-gap">
                  <p>
                    <i>Shepherd</i> puts the control over content you want to
                    filter fully in your hands.
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
              <div className="column button-container primary-background-container container">
                <a
                  href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme"
                  style={{ zIndex: "2" }}
                >
                  <button>Github</button>
                </a>
                <img
                  className="arweave-bg"
                  src={new URL("./assets/arweave_bg.svg", import.meta.url).href}
                  alt="copy"
                  width={450}
                  style={{ zIndex: "1" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
