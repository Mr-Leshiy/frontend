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
import Button from "../UI/Button/Button";

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

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  const handleDeleteClick = () => {
    setEvents((events) => {
      events.splice(eventIndex, 1);
      return events;
    });
    handleBackClick();
  }

  const editTitleComponent = () => {
    const inputs = [
      new Input(
        "Event title",
        "title",
        InputTypes.TEXT,
        true,
        "Title",
        event.title,
        50,
      ),
    ];

    const onSubmitHandler = (value) => {
      setEvents((events) => {
        events[eventIndex].title = value.title;
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
    const inputs = [new Input("Event image", "image", InputTypes.IMAGE, true)];

    const onSubmitHandler = (value) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setEvents((events) => {
          events[eventIndex].image = reader.result;
          return events;
        });
      });
      reader.readAsDataURL(value.image);
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
        true,
        "Description",
        event.description,
        1000,
      ),
    ];

    const onSubmitHandler = (value) => {
      setEvents((events) => {
        events[eventIndex].description = value.description;
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

            <div onClick={handleDeleteClick} className={classes["delete-submit-buttons"]}>
              <Button>Delete</Button>
            </div>
          </Page>
        </div>
      </div>
    </>
  );
};

export default EventPage;
