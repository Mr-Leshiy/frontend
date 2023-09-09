import React from "react";

import classes from "./EventPage.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";

import ArrowLeftLogo from "../../assets/svg/arrow-left.svg";
import EditLogo from "../../assets/svg/edit.svg";
import ImageLogo from "../../assets/svg/image.svg";

import Page from "../UI/Page/Page";
import EventCard from "./EventCard/EventCard";

const EventPage = ({ event }) => {
  const { setActivePage } = usePageContext();

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  return (
    <div className={classes["container"]}>
      <div className={classes["tab"]}>
        <div className={classes["back-button"]} onClick={handleBackClick}>
          <img src={ArrowLeftLogo} alt="" />
          <p>Back</p>
        </div>
      </div>

      <div className={classes["event-page"]}>
        <Page
          title={<p className={classes["event-page-title"]}>{event.title}</p>}
        >
          <div className={classes["event-page-content"]}>
            <div className={classes["event-info"]}>
              <div className={classes["event-info-image"]}>
                <img src={event.image ? event.image : ImageLogo} alt="" />
              </div>

              <div className={classes["event-info-title"]}>
                <h4>Description</h4>
                <img src={EditLogo} alt="" />
              </div>
              <div className={classes["event-info-description"]}>
                {event.description}
              </div>
            </div>

            <div className={classes["event-card"]}>
              <EventCard event={event} />
            </div>
          </div>
        </Page>
      </div>
    </div>
  );
};

export default EventPage;
