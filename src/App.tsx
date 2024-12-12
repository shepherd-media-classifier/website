import React from "react";
// import {
//   Anchor,
//   Box,
//   Button,
//   Card,
//   CardBody,
//   Footer,
//   Header,
//   Heading,
//   Page,
//   PageContent,
//   Text,
// } from "grommet";
import { ImgShepherdThemed } from "./components/ImgShepherdThemes";
import { FooterHot } from "./components/FooterHot";
import { CodeBox } from "./components/CodeBox";

function App() {
  return (
    <>
      <div className="full-page">
        <div className="content-container">
          <div className="row header-container">
            <div className="logo-container border-container primary-background-container">
              <ImgShepherdThemed />
              <span className="shepherd-font">Shepherd</span>
            </div>
            <div className="accent-content-container header-padding column border-container primary-background-container">
              <h1>Current Version: Shepherd 1.231</h1>
              <p>
                Generate your own content moderation policies for the content
                you would like to store on your Arweave node.
              </p>
              <p>This is the github to start using Shepherd.</p>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="column border-container primary-background-container regular-padding">
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
              <div className="column border-container primary-background-container regular-padding">
                <h2>Getting Started</h2>
                <p>
                  To help you get started, @ArweaveTeam provides an NSFW content
                  filter which you can load by adding the following to your
                  Arweave start command:
                </p>
                <CodeBox>
                  transaction_blacklist_url http://shepherd-v.com/nsfw.txt
                </CodeBox>
                <p>
                  It uses a simple plugin architecture so that you are in
                  control of what is filtered, and makes creating your own
                  filters easier through the use of these plugins.
                </p>
              </div>
            </div>
            <div className="column" style={{ width: "90%" }}>
              <div className="column regular-padding primary-background-container border-container">
                <div>
                  <h2>
                    <u>Your</u> Nodes
                  </h2>
                  <h2>
                    <u>Your</u> Content Moderation
                  </h2>
                </div>
                <p>
                  <i>Shepherd</i> puts the control over content you want to
                  filter fully in your hands.
                </p>
                <p>
                  It handles all of the raw content from the weave data, filters
                  out non-media and most invalid data, and passes it on to your
                  filter plugin.
                </p>
                <p>
                  What content you decide to filter is up to you and your moral
                  and legal compliance needs.
                </p>
                <p>
                  Your filter plug-in is fully customizable and allows you to
                  filter anything you can build an AI classification filter for,
                  or even use simpler filters such as blacklist/whitelist for a
                  particular app’s content media.
                </p>
              </div>
              <div className="column button-container primary-background-container border-container">
                <button>Start</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Page kind="wide">
        <PageContent direction="row-responsive">
          <ImgShepherdThemed />
          <Card pad={"medium"}>
            <Heading level={3}>Welcome to Shepherd!</Heading>
            <Text textAlign="justify">s
              Shepherd is a simple tool that allows you to generate your own
              content moderation policies for the content you would like to
              store on your Arweave node. Click here{" "}
              <Anchor
                href="https://github.com/shepherd-media-classifier/shepherd/tree/stable-single-machine#readme"
                label="github"
              />{" "}
              to start using Shepherd.
            </Text>
            <Heading level={3}>Overview</Heading>
            <Text textAlign="justify">
              Shepherd is a framework to build content moderation systems. The
              output of shepherd is a transaction id list that you can load with
              an Arweave node, in order to protect your node from storing and
              serving unwanted material. It uses a simple plugin architecture so
              that you are in control of what is filtered, and makes creating
              your own filters easier through the use of these plugins.
            </Text>
            <Heading level={3}>Your nodes, your content moderation</Heading>
            <Text textAlign="justify">
              Shepherd puts the control over content you want to filter fully in
              your hands. It handles all of the raw content from the weave data,
              filters out non-media and most invalid data, and passes it on to
              your filter plugin. What content you decide to filter is up to you
              and your moral and legal compliance needs. Your filter plug-in is
              fully customizable and allows you to filter anything you can build
              an AI classification filter for, or even use simpler filters such
              as blacklist/whitelist for a particular app’s content media.
            </Text>
            <Heading level={3}>Getting started quickly</Heading>
            <Text textAlign="justify">
              To help you get started, @ArweaveTeam provides an NSFW content
              filter which you can load by adding the following to your Arweave
              start command:
            </Text>
            <CodeBox>
              transaction_blacklist_url http://shepherd-v.com/nsfw.txt
            </CodeBox>
            <Text textAlign="justify">
              This content filter will be updated periodically in order to
              assure compliance with the legal stipulations of the jurisdictions
              where @ArweaveTeam operates: Germany and the United Kingdom. While
              the NSFW content filter will incorporate contents as law
              enforcement in the above jurisdictions requires, you are
              encouraged to ensure your own legal compliance in the
              jurisdictions where you operate in.
            </Text>
          </Card>
        </PageContent>
      </Page> */}
    </>
  );
}

export default App;
