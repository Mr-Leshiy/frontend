import React, { useState, useEffect } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./EventPage.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventsContext } from "../../hooks/EventsContext";
import { postEventImage, getEventImage, publishEvent } from "../../lib/Events";

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

const editTitleComponent = (
  title,
  eventIndex,
  setEvents,
  modalsIsOpen,
  closeModal,
) => {
  const inputs = [
    new Input(
      "Event title",
      "title",
      InputTypes.TEXT,
      true,
      "Title",
      title,
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
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      submitButtonText="Edit"
      inputs={inputs}
      submitHandler={onSubmitHandler}
    />
  );
};

const editImageComponent = (
  eventIndex,
  setEvents,
  modalsIsOpen,
  closeModal,
) => {
  const inputs = [new Input("Event image", "image", InputTypes.IMAGE, true)];

  const onSubmitHandler = async (value) => {
    let id = await postEventImage(value.image);
    if (id) {
      setEvents((events) => {
        events[eventIndex].image = id;
        return events;
      });
    }
  };

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      submitButtonText="Edit"
      inputs={inputs}
      submitHandler={onSubmitHandler}
    />
  );
};

const editDescriptionComponent = (
  description,
  eventIndex,
  setEvents,
  modalsIsOpen,
  closeModal,
) => {
  const inputs = [
    new Input(
      "Event description",
      "description",
      InputTypes.TEXT,
      true,
      "Description",
      description,
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
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      submitButtonText="Edit"
      inputs={inputs}
      submitHandler={onSubmitHandler}
    />
  );
};

const EventPage = ({ eventIndex }) => {
  const { stakeAddress } = useCardano();
  const { events, setEvents } = useEventsContext();
  const { setActivePage } = usePageContext();
  const [eventImage, setEventImage] = useState(null);
  const [modalsIsOpen, setModalsIsOpen] = useState({
    editTitle: false,
    editImage: false,
    editDescription: false,
  });

  const openModal = (modalType) => () =>
    setModalsIsOpen((prev) => ({ ...prev, [modalType]: true }));
  const closeModal = (modalType) => () =>
    setModalsIsOpen((prev) => ({ ...prev, [modalType]: false }));

  const event = events[eventIndex];

  // load image
  useEffect(() => {
    const fetchEventImage = async () => {
      const image = await getEventImage(event.image);
      if (image) {
        setEventImage(image);
      }
    };
    if (event.image) {
      fetchEventImage();
    }
  });

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  const handleDeleteClick = () => {
    setEvents((events) => {
      events.splice(eventIndex, 1);
      return events;
    });
    handleBackClick();
  };

  const handlePublishClick = async () => {
    await publishEvent(stakeAddress, event);
    setEvents((events) => {
      events[eventIndex].published = true;
      return events;
    });
    handleBackClick();
  };

  const isActiveCursorStyles = {
    cursor: !event.published ? "pointer" : "auto",
  };

  return (
    <>
      {editTitleComponent(
        event.title,
        eventIndex,
        setEvents,
        modalsIsOpen.editTitle,
        closeModal("editTitle"),
      )}
      {editImageComponent(
        eventIndex,
        setEvents,
        modalsIsOpen.editImage,
        closeModal("editImage"),
      )}
      {editDescriptionComponent(
        event.description,
        eventIndex,
        setEvents,
        modalsIsOpen.editDescription,
        closeModal("editDescription"),
      )}

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
                onClick={!event.published ? openModal("editTitle") : null}
                className={classes["event-page-title"]}
                style={isActiveCursorStyles}
              >
                {event.title}
              </p>
            }
          >
            <div className={classes["event-page-content"]}>
              <div className={classes["event-info"]}>
                <div
                  className={classes["event-info-image"]}
                  style={isActiveCursorStyles}
                >
                  <img
                    onClick={!event.published ? openModal("editImage") : null}
                    src={eventImage ? eventImage : ImageLogo}
                    alt=""
                  />
                </div>

                <div className={classes["event-info-title"]}>
                  <h4>Description</h4>

                  {!event.published ? (
                    <img
                      onClick={openModal("editDescription")}
                      src={EditLogo}
                      alt=""
                    />
                  ) : null}
                </div>
                <div className={classes["event-info-description"]}>
                  {event.description}
                </div>
              </div>

              <div className={classes["event-card"]}>
                <EventCard eventIndex={eventIndex} />
              </div>
            </div>

            {!event.published ? (
              <div className={classes["delete-submit-buttons"]}>
                <Button onClick={handlePublishClick}>Publish</Button>
                <Button onClick={handleDeleteClick}>Delete</Button>
              </div>
            ) : null}
          </Page>
        </div>
      </div>
    </>
  );
};

export default EventPage;
