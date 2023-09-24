import React, { useEffect } from "react";

import classes from "./TicketPage.module.css";

import { useCardanoWalletContext } from "../../hooks/CardanoWallet";
import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventsContext } from "../../hooks/EventsContext";
import { useEventImagesContext } from "../../hooks/EventImagesContext";
import { useModalHandler } from "../../hooks/ModalHandler";
import { generateTickets } from "../../lib/Events";

import ImageIcon from "../../assets/svg/ImageIcon";

import Page from "../UI/Page/Page";
import EventCard from "../EventCard/EventCard";
import InputFormModal, {
  InputTypes,
  Input,
} from "../UI/InputFormModal/InputFormModal";
import Button from "../UI/Button/Button";
import BackButton from "../UI/BackButton/BackButton";
import EventDescription from "../EventDescription/EventDescription";

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

const TicketPage = ({ ticket }) => {
  const { eventImages, fetchEventImage } = useEventImagesContext();
  const { setActivePage } = usePageContext();
  const { modalsIsOpen, openModal, closeModal } = useModalHandler(MODALS);

  const event = ticket.event;

  // load image
  useEffect(() => {
    if (event.image) {
      fetchEventImage(event.image);
    }
  }, [event.image, fetchEventImage]);

  const handleBackClick = () => {
    setActivePage({ type: Pages.tickets, props: {} });
  };

  return (
    <>
      <Page>
        <div className={classes["tab"]}>
          <BackButton onClick={handleBackClick} />
        </div>

        <div className={classes["ticket-page"]}>
          <div className={classes["ticket-page-title"]}>
            <h1>{event.title}</h1>
          </div>

          <div className={classes["ticket-page-content"]}>
            <div className={classes["event-info"]}>
              <div className={classes["event-info-image"]}>
                {eventImages[event.image] ? (
                  <img src={eventImages[event.image]} alt="" />
                ) : (
                  <ImageIcon />
                )}
              </div>

              <div className={classes["event-info-description"]}>
                <EventDescription event={event} />
              </div>
            </div>

            <div className={classes["event-info-left-tab"]}>
              <div className={classes["event-info-card"]}>
                {/* <EventCard eventIndex={eventIndex} /> */}
              </div>

              <div className={classes["buttons"]}></div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default TicketPage;
