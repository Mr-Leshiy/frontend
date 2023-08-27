import React from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./CreateEventPage.module.css";
import PageTitle from "../UI/PageTitle/PageTitle.js";
import BackgroundAnimation from "../UI/BackgroundAnimation/BackgroundAnimation";
import CreateEventTab from "./CreateEventTab/CreateEventTab";

const CreateEventPage = () => {
  const { isConnected } = useCardano();

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
  };

  return (
    <div className={classes["create-event-page"]}>
      <BackgroundAnimation />
      <PageTitle title="Create Your Event" />
      <div style={inlineStyles}>
        <CreateEventTab />
      </div>
    </div>
  );
};

export default CreateEventPage;
