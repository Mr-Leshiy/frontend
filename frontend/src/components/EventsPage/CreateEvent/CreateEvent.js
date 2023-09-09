import React from "react";

import { useEventsContext, Event } from "../../../hooks/EventsContext";

import InputFormModal, {
  InputTypes,
  Input,
} from "../../UI/InputFormModal/InputFormModal";

const CreateEvent = ({ modalIsOpen, closeModal }) => {
  const { setEvents } = useEventsContext();

  const onSubmitHandler = (eventValue) => {
    setEvents((events) => {
      return [
        ...events,
        new Event(
          eventValue.title,
          eventValue.startDate,
          eventValue.endDate,
          eventValue.location,
          eventValue.website,
        ),
      ];
    });
  };

  const inputs = [
    new Input("Event title", "title", InputTypes.TEXT, "Title", 50, true),
    new Input("Event start date", "startDate", InputTypes.DATE, "", "", true),
    new Input("Event end date", "endDate", InputTypes.DATE, "", "", true),
    new Input(
      "Event location",
      "location",
      InputTypes.TEXT,
      "Location",
      50,
      true,
    ),
    new Input(
      "Event website",
      "website",
      InputTypes.TEXT,
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
