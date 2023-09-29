import React, { useEffect } from "react";

import classes from "./TicketPage.module.css";

import { usePageContext, Pages } from "../../hooks/PageContext";
import { useEventImagesContext } from "../../hooks/EventImagesContext";
import { useModalHandler } from "../../hooks/ModalHandler";

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

const sendTicketModal = (modalsIsOpen, closeModal) => {
  const onSubmitHandler = async ([address]) => {
    // await generateTickets(stakeAddress, ticketsAmount, event);
  };

  const inputs = [
    new Input(InputTypes.TEXT, {
      description: "Receiver's account address",
      name: "accountAddress",
      required: true,
    }),
  ];

  return (
    <InputFormModal
      modalIsOpen={modalsIsOpen}
      closeModal={closeModal}
      inputs={inputs}
      submitHandler={onSubmitHandler}
      submitButtonText="Send"
    />
  );
};

const MODALS = {
  sendTicket: "sendTicket",
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
      {sendTicketModal(
        modalsIsOpen[MODALS.sendTicket],
        closeModal(MODALS.sendTicket),
      )}

      <Page>
        <div className={classes["tab"]}>
          <BackButton onClick={handleBackClick} />
        </div>

        <div className={classes["ticket-page"]}>
          <div className={classes["ticket-page-title"]}>
            <h1>{event.title}</h1>
            <a className={classes["ticket-page-title-id"]} href={null}>
              {"#" + ticket.id}
            </a>
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
                <EventCard event={event} />
              </div>

              <div className={classes["buttons"]}>
                <div className={classes["button"]}>
                  <Button onClick={openModal(MODALS.sendTicket)}>
                    Send ticket
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default TicketPage;
