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
    <div className={classes["event-page"]}>
      <div className={classes["back-button"]} onClick={handleBackClick}>
        <img src={ArrowLeft} alt="" />
        <p>Back</p>
      </div>

      <Page title={props.event.title}>
        <div className={classes["event-page-content"]}>
          <div className={classes["event-info"]}>
            <h4>Description</h4>
            <div className={classes["event-info-description"]}>
              Join us for an unforgettable evening of music, dance, and
              entertainment. This event will showcase talented artists from
              around the world, bringing together different cultures and styles.
              Experience the energy and excitement as performers take the stage
              and captivate the audience with their mesmerizing performances.
              Don't miss out on this incredible event filled with creativity,
              passion, and joy. Get your tickets now and be a part of this
              magical celebration!
            </div>
          </div>

          <div className={classes["event-card"]}>
            <EventCard event={props.event} />
          </div>
        </div>
      </Page>
    </div>
  );
};

export default EventPage;
