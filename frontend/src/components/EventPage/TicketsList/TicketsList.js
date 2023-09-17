import React, { useState } from "react";

import classes from "./TicketsList.module.css";

import { useModalHandler } from "../../../hooks/ModalHandler";

import Table, { HeadElemenet } from "../../UI/Table/Table";
import Button from "../../UI/Button/Button";
import InputFormModal, {
  InputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const generateTicketsModal = (modalsIsOpen, closeModal) => {
  const inputs = [
    new Input(InputTypes.NUMBER, {
      description: "Number of tickets",
      name: "numberOfTickets",
      required: true,
      placeholder: 0,
      min: 0,
      step: 1,
    }),
  ];

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      inputs={inputs}
      submitButtonText="Generate"
    />
  );
};

const MODALS = {
  generateTickets: "generateTickets",
};

const TicketsList = ({}) => {
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  const head = [new HeadElemenet("id", null)];

  return (
    <>
      {generateTicketsModal(
        modalsIsOpen[MODALS.generateTickets],
        closeModal(MODALS.generateTickets),
      )}

      <div className={classes["tab"]}>
        <Button onClick={openModal(MODALS.generateTickets)}>
          Generate tickets
        </Button>
      </div>
      <div className={classes["tickets-list"]}>
        <Table head={head} />
      </div>
    </>
  );
};

export default TicketsList;
