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
    new Input({
      description: "Event title",
      name: "title",
      type: InputTypes.TEXT,
      isRequired: true,
      placeholder: "Title",
      maxLength: 50,
    }),
    new Input({
      description: "Event start date",
      name: "startDate",
      type: InputTypes.DATE,
      isRequired: true,
    }),
    new Input({
      description: "Event end date",
      name: "endDate",
      type: InputTypes.DATE,
      isRequired: true,
    }),
    new Input({
      description: "Event location",
      name: "location",
      type: InputTypes.TEXT,
      isRequired: true,
      placeholder: "Location",
      maxLength: 50,
    }),
    new Input({
      description: "Event website",
      name: "website",
      type: InputTypes.TEXT,
      isRequired: false,
      placeholder: "Website link",
      maxLength: 50,
    }),
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
