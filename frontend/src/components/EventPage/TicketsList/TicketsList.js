import React from "react";

import classes from "./TicketsList.module.css";

import Table, { HeadElemenet } from "../../UI/Table/Table";

const TicketsList = ({}) => {
  const head = [new HeadElemenet("id", null)];

  return (
    <>
      <div className={classes["tickets-list"]}>
        <Table head={head} />
      </div>
    </>
  );
};

export default TicketsList;
