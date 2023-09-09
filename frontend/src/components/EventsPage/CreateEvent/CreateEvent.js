import React from "react";

import { useEventsContext, Event } from "../../../hooks/EventsContext";

import InputFormModal, {
  InpputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const CreateEvent = ({ modalIsOpen, closeModal }) => {
  const { setEvents } = useEventsContext();

  const onSubmitHandler = (eventValue) => {
    setEvents((events) => {
      const startDate = new Date(
        `${eventValue.startDate}T${eventValue.startTime}`,
      );
      const endDate = new Date(`${eventValue.endDate}T${eventValue.endTime}`);
      return [
        ...events,
        new Event(
          eventValue.title,
          startDate,
          endDate,
          eventValue.location,
          eventValue.website,
        ),
      ];
    });
  };

  const inputs = [
    new Input("Event title", "title", InpputTypes.TEXT, "Title", 50, true),
    new Input("Event start", "start", InpputTypes.DATE, "", "", true),
    new Input("Event end", "end", InpputTypes.DATE, "", "", true),
    new Input(
      "Event location",
      "location",
      InpputTypes.TEXT,
      "Location",
      50,
      true,
    ),
    new Input(
      "Event website",
      "website",
      InpputTypes.TEXT,
      "Website link",
      50,
      false,
    ),
  ];

  return (
    <InputFormModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      inputs={inputs}
      submitHandler={onSubmitHandler}
      submitButtonText="Create"
    />
  );
};

export default CreateEvent;
