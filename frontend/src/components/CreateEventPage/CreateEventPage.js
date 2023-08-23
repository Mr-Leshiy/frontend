import React from "react";

import classes from "./CreateEventPage.module.css";
import PageTitle from "../UI/PageTitle/PageTitle";

const CreateEventPage = () => {
  return <div className={classes["create-event-page"]}>
    <PageTitle title="Create Your Event" />
  </div>;
};

export default CreateEventPage;
