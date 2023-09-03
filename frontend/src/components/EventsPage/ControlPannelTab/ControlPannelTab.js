import React, { useState } from "react";

import classes from "./ControlPannelTab.module.css";
import Button from "../../UI/Button/Button";
import CreateEvent from "../CreateEvent/CreateEvent";

const ControlPannelTab = (props) => {
  const [textValue, setTextValue] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFilterClick = () => {
    const filterOptions = {
      title: textValue,
    };

    props.onFilter(filterOptions);
  };

  const inlineStyles = {
    pointerEvents: props.isEnabled ? "auto" : "none",
    opacity: props.isEnabled ? "1" : "0.5",
  };
  return (
    <>
      <CreateEvent modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div style={inlineStyles} className={classes["control-pannel-tab"]}>
        <input
          className={classes["title-input"]}
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <Button
          className={classes["filter-button"]}
          onClick={handleFilterClick}
        >
          Filter
        </Button>
        <Button className={classes["create-event-button"]} onClick={openModal}>
          + Create Event
        </Button>
      </div>
    </>
  );
};

export default ControlPannelTab;
