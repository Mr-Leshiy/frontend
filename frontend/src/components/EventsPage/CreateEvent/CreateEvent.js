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
    new Input(InputTypes.TEXT, {
      description: "Event title",
      name: "title",
      required: true,
      placeholder: "Title",
      maxLength: 50,
    }),
    new Input(InputTypes.DATE, {
      description: "Event start date",
      name: "startDate",
      required: true,
    }),
    new Input(InputTypes.DATE, {
      description: "Event end date",
      name: "endDate",
      required: true,
    }),
    new Input(InputTypes.TEXT, {
      description: "Event location",
      name: "location",
      required: true,
      placeholder: "Location",
      maxLength: 50,
    }),
    new Input(InputTypes.TEXT, {
      description: "Event website",
      name: "website",
      required: false,
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
