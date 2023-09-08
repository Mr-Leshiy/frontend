import React from "react";

import classes from "./EventPage.module.css";
import Page from "../UI/Page/Page";
import { usePageContext, Pages } from "../../hooks/PageContext";
import ArrowLeft from "../../assets/arrow-left.svg";
import EventCard from "./EventCard/EventCard";

const EventPage = (props) => {
  const { setActivePage } = usePageContext();

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  return (
    <div>
      <div className={classes["back-button"]} onClick={handleBackClick}>
        <img src={ArrowLeft} alt="" />
        <p>Back</p>
      </div>
      <Page title={props.event.title}>
        <EventCard event={props.event} />
      </Page>
    </div>
  );
};

export default EventPage;
