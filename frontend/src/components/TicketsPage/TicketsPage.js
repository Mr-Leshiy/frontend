import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./TicketsPage.module.css";
import TicketsList from "./TicketsList/TicketsList.js";
import FilteringTab from "./FilteringTab/FilteringTab.js";

const TicketsPage = (props) => {
  const { isConnected } = useCardano();
  const [filterOptions, setFilterOptions] = useState({ title: "" });

  const handleFilter = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  return (
    <div className={classes["tickets-page"]}>
      <FilteringTab isEnabled={isConnected} onFilter={handleFilter} />
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
