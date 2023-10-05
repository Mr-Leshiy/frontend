import React, { useState } from "react";

import classes from "./EventsPage.module.css";

import { useCardanoWalletContext } from "../../hooks/WalletContext";
import { useModalHandler } from "../../hooks/ModalHandler";

import EventsList from "./EventsList/EventsList";
import EventFilter from "../UI/EventFilter/EventFilter";
import CreateEvent from "./CreateEvent/CreateEvent";
import Button from "../UI/Button/Button";
import Page from "../UI/Page/Page";
import PageTitle from "../UI/PageTitle/PageTitle";

const MODALS = {
  createEvent: "createEvent",
};

const EventsPage = () => {
  const { isConnected } = useCardanoWalletContext();
  const [filterOptions, setFilterOptions] = useState({ title: "" });
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  const handleFilter = (newFilterOptions) => {
    setFilterOptions(newFilterOptions);
  };

  const inlineStyles = {
    pointerEvents: isConnected() ? "auto" : "none",
    opacity: isConnected() ? "1" : "0.5",
    display: "flex",
    padding: "1.1vh 0px",
  };
  return (
    <>
      <CreateEvent
        modalIsOpen={modalsIsOpen[MODALS.createEvent]}
        closeModal={closeModal(MODALS.createEvent)}
      />

      <Page>
        <PageTitle title="Your Events" />

        <div style={inlineStyles}>
          <div className={classes["events-filter"]}>
            <EventFilter onFilter={handleFilter} />
          </div>
          <Button
            className={classes["create-event-button"]}
            onClick={openModal(MODALS.createEvent)}
          >
            + Create Event
          </Button>
        </div>

        {isConnected() ? (
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
