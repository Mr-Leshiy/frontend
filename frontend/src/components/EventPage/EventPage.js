import React, { useState } from "react";

import classes from "./EventPage.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventsContext } from "../../hooks/EventsContext";

import ArrowLeftLogo from "../../assets/svg/arrow-left.svg";
import EditLogo from "../../assets/svg/edit.svg";
import ImageLogo from "../../assets/svg/image.svg";

import Page from "../UI/Page/Page";
import EventCard from "./EventCard/EventCard";
import InputFormModal, {
  InputTypes,
  Input,
} from "../UI/InputFormModal/InputFormModal";

const EventPage = ({ eventIndex }) => {
  const { events, setEvents } = useEventsContext();
  const { setActivePage } = usePageContext();
  const [editTitleModalIsOpen, setEditTitleModalIsOpen] = useState(false);
  const [editImageModalIsOpen, setEditImageModalIsOpen] = useState(false);
  const [editDescriptionModalIsOpen, setEditDescriptionModalIsOpen] =
    useState(false);

  const openEditTitleModal = () => setEditTitleModalIsOpen(true);
  const closeEditTitleModal = () => setEditTitleModalIsOpen(false);

  const openEditImageModal = () => setEditImageModalIsOpen(true);
  const closeEditImageModal = () => setEditImageModalIsOpen(false);

  const openEditDescriptionModal = () => setEditDescriptionModalIsOpen(true);
  const closeEditDescriptionModal = () => setEditDescriptionModalIsOpen(false);

  const event = events[eventIndex];
  console.log(event);

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  const editTitleComponent = () => {
    const inputs = [
      new Input(
        "Event title",
        "title",
        InputTypes.TEXT,
        "Title",
        50,
        true,
        event.title,
      ),
    ];

    const onSubmitHandler = (eventValue) => {
      setEvents((events) => {
        events[eventIndex].title = eventValue.title;
        return events;
      });
    };

    return (
      <InputFormModal
        modalIsOpen={editTitleModalIsOpen}
        closeModal={closeEditTitleModal}
        submitButtonText="Edit"
        inputs={inputs}
        submitHandler={onSubmitHandler}
      />
    );
  };

  const editImageComponent = () => {
    const inputs = [
      new Input("Event image", "image", InputTypes.IMAGE, "Image", 0, true),
    ];

    const onSubmitHandler = (eventValue) => {
      setEvents((events) => {
        events[eventIndex].image = eventValue.image;
        console.log(events[eventIndex]);
        return events;
      });
    };

    return (
      <InputFormModal
        modalIsOpen={editImageModalIsOpen}
        closeModal={closeEditImageModal}
        submitButtonText="Edit"
        inputs={inputs}
        submitHandler={onSubmitHandler}
      />
    );
  };

  const editDescriptionComponent = () => {
    const inputs = [
      new Input(
        "Event description",
        "description",
        InputTypes.TEXT,
        "Description",
        1000,
        true,
        event.description,
      ),
    ];

    const onSubmitHandler = (eventValue) => {
      setEvents((events) => {
        events[eventIndex].description = eventValue.description;
        return events;
      });
    };

    return (
      <InputFormModal
        modalIsOpen={editDescriptionModalIsOpen}
        closeModal={closeEditDescriptionModal}
        submitButtonText="Edit"
        inputs={inputs}
        submitHandler={onSubmitHandler}
      />
    );
  };

  return (
    <>
      {editTitleComponent()}
      {editImageComponent()}
      {editDescriptionComponent()}

      <div className={classes["container"]}>
        <div className={classes["tab"]}>
          <div className={classes["back-button"]} onClick={handleBackClick}>
            <img src={ArrowLeftLogo} alt="" />
            <p>Back</p>
          </div>
        </div>

        <div className={classes["event-page"]}>
          <Page
            title={
              <p
                onClick={openEditTitleModal}
                className={classes["event-page-title"]}
              >
                {event.title}
              </p>
            }
          >
            <div className={classes["event-page-content"]}>
              <div className={classes["event-info"]}>
                <div className={classes["event-info-image"]}>
                  <img
                    onClick={openEditImageModal}
                    src={event.image ? event.image : ImageLogo}
                    alt=""
                  />
                </div>

                <div className={classes["event-info-title"]}>
                  <h4>Description</h4>
                  <img
                    onClick={openEditDescriptionModal}
                    src={EditLogo}
                    alt=""
                  />
                </div>
                <div className={classes["event-info-description"]}>
                  {event.description}
                </div>
              </div>

              <div className={classes["event-card"]}>
                <EventCard eventIndex={eventIndex} />
              </div>
            </div>
          </Page>
        </div>
      </div>
    </>
  );
};

export default EventPage;
