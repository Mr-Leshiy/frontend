import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./TicketsPage.module.css";

import TicketsList from "./TicketsList/TicketsList.js";
import EventFilter from "../UI/EventFilter/EventFilter";
import Page from "../UI/Page/Page";

const TicketsPage = (props) => {
  const { isConnected } = useCardano();
  const [filterOptions, setFilterOptions] = useState({ title: "" });

  const handleFilter = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
    padding: "1.1vh 0",
  };
  return (
    <Page title="Your Tickets Collection">
      <div style={inlineStyles}>
        <EventFilter isEnabled={isConnected} onFilter={handleFilter} />
      </div>
      {isConnected ? (
        <TicketsList filterOptions={filterOptions} />
      ) : (
        <div className={classes["inform-message"]}>
          <h2>Please connect your wallet</h2>
        </div>
      )}
    </Page>
  );
};

export default TicketsPage;
