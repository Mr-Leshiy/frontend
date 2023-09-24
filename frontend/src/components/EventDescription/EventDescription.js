import React, { useState } from "react";

import classes from "./EventDescription.module.css";

import EditIcon from "../../assets/svg/EditIcon/EditIcon";

import TextArea from "../UI/TextArea/TextArea";
import AcceptIcon from "../../assets/svg/AcceptIcon/AcceptIcon";

const EventDescription = ({ event, onSubmit }) => {
  const [eventDescription, setEventDescription] = useState(event.description);
  const [isEditing, setIsEditing] = useState(false);

  const onChange = (description) => {
    setEventDescription(description);
  };

  const onAccept = () => {
    onSubmit(eventDescription);
    setIsEditing(false);
  };

  const onEdit = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className={classes["description"]}>
        <h4>Description</h4>

        {!event.published ? (
          <div className={classes["edit-button"]}>
            {isEditing ? (
              <AcceptIcon onClick={onAccept} />
            ) : (
              <EditIcon onClick={onEdit} />
            )}
          </div>
        ) : null}
      </div>
      <TextArea
        rows={10}
        maxLength={1000}
        defaultValue={event.description}
        onChange={onChange}
        readOnly={!isEditing}
      ></TextArea>
    </>
  );
};

export default EventDescription;
