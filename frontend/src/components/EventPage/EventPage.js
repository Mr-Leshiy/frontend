import React from "react";

// import classes from "./EventPage.module.css";
import Page from "../UI/Page/Page";

const EventPage = (props) => {
  return <Page title={props.event.title}></Page>;
};

export default EventPage;
