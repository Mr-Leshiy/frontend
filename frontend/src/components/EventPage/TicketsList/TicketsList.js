import React from "react";

import classes from "./TicketsList.module.css";

import Table, { HeadElemenet } from "../../UI/Table/Table";
import Button from "../../UI/Button/Button";

const TicketsList = ({}) => {
  const head = [new HeadElemenet("id", null)];

  return (
    <>
      <div className={classes["tab"]}>
        <Button>Generate tickets</Button>
      </div>
      <div className={classes["tickets-list"]}>
        <Table head={head} />
      </div>
    </>
  );
};

export default TicketsList;
