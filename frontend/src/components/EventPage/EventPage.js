import React, { useEffect } from "react";

import classes from "./EventPage.module.css";

import { useCardanoWalletContext } from "../../hooks/CardanoWallet";
import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventsContext } from "../../hooks/EventsContext";
import { useEventImagesContext } from "../../hooks/EventImagesContext";
import { useModalHandler } from "../../hooks/ModalHandler";
import {
  postEventImage,
  publishEvent,
  generateTickets,
} from "../../lib/Events";

import EditIcon from "../../assets/svg/EditIcon/EditIcon";
import ImageIcon from "../../assets/svg/ImageIcon";

import Page from "../UI/Page/Page";
import EventCard from "./EventCard/EventCard";
import InputFormModal, {
  InputTypes,
  Input,
} from "../UI/InputFormModal/InputFormModal";
import Button from "../UI/Button/Button";
import BackButton from "../UI/BackButton/BackButton";
import EventDescription from "../EventDescription/EventDescription";

const editTitleModal = (
  title,
  eventIndex,
  setEvents,
  modalsIsOpen,
  closeModal,
) => {
  const inputs = [
    new Input(InputTypes.TEXT, {
      description: "Event title",
      name: "title",
      required: true,
      placeholder: "Title",
      defaultValue: title,
      maxLength: 50,
    }),
  ];

  const onSubmitHandler = ([title]) => {
    setEvents((events) => {
      events[eventIndex].title = title;
      return [...events];
    });
  };

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      submitButtonText="Apply"
      inputs={inputs}
      submitHandler={onSubmitHandler}
    />
  );
};

const editImageModal = (eventIndex, setEvents, modalsIsOpen, closeModal) => {
  const inputs = [
    new Input(InputTypes.IMAGE, {
      description: "Event image",
      name: "image",
      required: true,
    }),
  ];

  const onSubmitHandler = async ([image]) => {
    let { id } = await postEventImage(image);
    if (id) {
      setEvents((events) => {
        events[eventIndex].image = id;
        return [...events];
      });
    }
  };

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      submitButtonText="Apply"
      inputs={inputs}
      submitHandler={onSubmitHandler}
    />
  );
};

const generateTicketsModal = (
  modalsIsOpen,
  closeModal,
  stakeAddress,
  event,
) => {
  const onSubmitHandler = async ([ticketsAmount]) => {
    await generateTickets(stakeAddress, ticketsAmount, event);
  };

  const inputs = [
    new Input(InputTypes.NUMBER, {
      description: "Tickets amount",
      name: "ticketsAmount",
      required: true,
      placeholder: 0,
      min: 0,
      step: 1,
    }),
  ];

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      inputs={inputs}
      submitHandler={onSubmitHandler}
      submitButtonText="Generate"
    />
  );
};

const MODALS = {
  editTitle: "editTitle",
  editImage: "editImage",
  generateTickets: "generateTickets",
};

const EventPage = ({ eventIndex }) => {
  const { stakeAddress } = useCardanoWalletContext();
  const { events, setEvents } = useEventsContext();
  const { eventImages, fetchEventImage } = useEventImagesContext();
  const { setActivePage } = usePageContext();
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  const event = events[eventIndex];

  // load image
  useEffect(() => {
    if (event.image) {
      fetchEventImage(event.image);
    }
  }, [event.image, fetchEventImage]);

  const handleBackClick = () => {
    setActivePage({ type: Pages.events, props: {} });
  };

  const onSubmitDescription = (description) => {
    setEvents((events) => {
      events[eventIndex].description = description;
      return [...events];
    });
  };

  const handleDeleteClick = () => {
    setEvents((events) => {
      events.splice(eventIndex, 1);
      return [...events];
    });
    handleBackClick();
  };

  const handlePublishClick = async () => {
    await publishEvent(stakeAddress, event);
    handleDeleteClick();
  };

  const isActiveCursorStyles = {
    cursor: !event.published ? "pointer" : "auto",
  };

  return (
    <>
      {editTitleModal(
        event.title,
        eventIndex,
        setEvents,
        modalsIsOpen[MODALS.editTitle],
        closeModal(MODALS.editTitle),
      )}
      {editImageModal(
        eventIndex,
        setEvents,
        modalsIsOpen[MODALS.editImage],
        closeModal(MODALS.editImage),
      )}
      {generateTicketsModal(
        modalsIsOpen[MODALS.generateTickets],
        closeModal(MODALS.generateTickets),
        stakeAddress,
        event,
      )}

      <Page>
        <div className={classes["tab"]}>
          <BackButton onClick={handleBackClick} />
        </div>

        <div className={classes["event-page"]}>
          <div className={classes["event-page-title"]}>
            <h1>{event.title}</h1>
            {!event.published ? (
              <EditIcon onClick={openModal(MODALS.editTitle)} />
            ) : null}
          </div>

          <div className={classes["event-page-content"]}>
            <div className={classes["event-info"]}>
              <div className={classes["event-info-container"]}>
                <div
                  className={classes["event-info-image"]}
                  style={isActiveCursorStyles}
                  onClick={
                    !event.published ? openModal(MODALS.editImage) : null
                  }
                >
                  {eventImages[event.image] ? (
                    <img src={eventImages[event.image]} alt="" />
                  ) : (
                    <ImageIcon />
                  )}
                </div>

                <div className={classes["event-info-card"]}>
                  <EventCard eventIndex={eventIndex} />
                </div>
              </div>

              <div className={classes["event-info-description"]}>
                <EventDescription
                  event={event}
                  onSubmit={onSubmitDescription}
                />
              </div>
            </div>

            <div className={classes["buttons"]}>
              {!event.published ? (
                <>
                  <div className={classes["button"]}>
                    <Button onClick={handlePublishClick}>Publish</Button>
                  </div>
                  <div className={classes["button"]}>
                    <Button onClick={handleDeleteClick}>Delete</Button>
                  </div>
                </>
              ) : (
                <div className={classes["button"]}>
                  <Button onClick={openModal(MODALS.generateTickets)}>
                    Generate tickets
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default EventPage;
