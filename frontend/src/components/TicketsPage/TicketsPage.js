import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./TicketsPage.module.css";
import TicketsList from "./TicketsList/TicketsList.js";
import PageTitle from "../UI/PageTitle/PageTitle";
import EventFilter from "../UI/EventFilter/EventFilter";

const TicketsPage = (props) => {
  const { isConnected } = useCardano();
  const [filterOptions, setFilterOptions] = useState({ title: "" });

  const handleFilter = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
    padding: "10px 0px",
  };
  return (
    <div className={classes["tickets-page"]}>
      <PageTitle title="Your Tickets Collection" />
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
    </div>
  );
};

export default TicketsPage;
