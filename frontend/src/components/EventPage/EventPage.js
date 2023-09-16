import React, { useState, useEffect } from "react";
import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";

import classes from "./EventPage.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventsContext } from "../../hooks/EventsContext";
import { postEventImage, getEventImage, publishEvent } from "../../lib/Events";

import EditIcon from "../../assets/svg/EditIcon/EditIcon";
import ImageLogo from "../../assets/svg/image.svg";

import Page from "../UI/Page/Page";
import EventCard from "./EventCard/EventCard";
import InputFormModal, {
  InputTypes,
  Input,
} from "../UI/InputFormModal/InputFormModal";
import Button from "../UI/Button/Button";
import BackButton from "../UI/BackButton/BackButton";

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
          <BackButton onClick={handleBackClick} />
        </div>

        <div className={classes["event-page"]}>
          <Page
            title={
              <>
                <div
                  onClick={!event.published ? openModal("editTitle") : null}
                  className={classes["event-page-title"]}
                >
                  {event.title}
                </div>
                {!event.published ? (
                  <EditIcon onClick={openModal("editTitle")} />
                ) : null}
              </>
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

                  <div className={classes["description-edit-button"]}>
                    {!event.published ? (
                      <EditIcon onClick={openModal("editDescription")} />
                    ) : null}
                  </div>
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
