import React, { useState } from "react";

import classes from "./TicketsPage.module.css";

import { useCardanoWalletContext } from "../../hooks/CardanoWallet";

import TicketsList from "./TicketsList/TicketsList.js";
import EventFilter from "../UI/EventFilter/EventFilter";
import Page from "../UI/Page/Page";
import PageTitle from "../UI/PageTitle/PageTitle";

const TicketsPage = (props) => {
  const { isConnected } = useCardanoWalletContext();
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
    <Page>
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
    </Page>
  );
};

export default TicketsPage;
