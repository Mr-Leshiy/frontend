import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./EventsPage.module.css";
import PageTitle from "../UI/PageTitle/PageTitle.js";
import ControlPannelTab from "./ControlPannelTab/ControlPannelTab";

const EventsPage = () => {
  const { isConnected } = useCardano();
  // const [filterOptions, setFilterOptions] = useState({ title: "" });

  const handleFilter = (newFilterOptions) => {
    // setFilterOptions(newFilterOptions);
  };

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
  };

  return (
    <div className={classes["events-page"]}>
      <PageTitle title="Your Events" />
      <ControlPannelTab isEnabled={isConnected} onFilter={handleFilter} />
      {isConnected ? (
        <></>
      ) : (
        <div className={classes["inform-message"]}>
          <h2>Please connect your wallet</h2>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
