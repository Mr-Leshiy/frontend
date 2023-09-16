import React, { useState } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./EventsPage.module.css";

import EventsList from "./EventsList/EventsList";
import EventFilter from "../UI/EventFilter/EventFilter";
import CreateEvent from "./CreateEvent/CreateEvent";
import Button from "../UI/Button/Button";
import Page from "../UI/Page/Page";
import PageTitle from "../UI/PageTitle/PageTitle";

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
    padding: "1.1vh 0px",
  };
  return (
    <>
      <CreateEvent modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Page>
        <PageTitle title="Your Events" />

        <div style={inlineStyles}>
          <div className={classes["events-filter"]}>
            <EventFilter onFilter={handleFilter} />
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
      </Page>
    </>
  );
};

export default EventsPage;
