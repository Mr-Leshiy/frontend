import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./EventsPage.module.css";
import PageTitle from "../UI/PageTitle/PageTitle.js";
import EventsList from "./EventsList/EventsList";
import EventFilter from "../UI/EventFilter/EventFilter";
import CreateEvent from "./CreateEvent/CreateEvent";
import Button from "../UI/Button/Button";

const EventsPage = () => {
  const { isConnected } = useCardano();
  const [filterOptions, setFilterOptions] = useState({ title: "" });
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFilter = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  const inlineStyles = {
    pointerEvents: isConnected ? "auto" : "none",
    opacity: isConnected ? "1" : "0.5",
    display: "flex",
    padding: "10px 0px",
  };
  return (
    <>
      <CreateEvent modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <div className={classes["events-page"]}>
        <PageTitle title="Your Events" />

        <div style={inlineStyles}>
          <div className={classes["events-filter"]}>
            <EventFilter isEnabled={isConnected} onFilter={handleFilter} />
          </div>
          <Button
            className={classes["create-event-button"]}
            onClick={openModal}
          >
            + Create Event
          </Button>
        </div>

        {isConnected ? (
          <EventsList filterOptions={filterOptions} />
        ) : (
          <div className={classes["inform-message"]}>
            <h2>Please connect your wallet</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default EventsPage;
