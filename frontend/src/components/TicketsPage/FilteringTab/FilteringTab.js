import React, { useState } from "react";

import classes from "./FilteringTab.module.css";

const FilteringTab = (props) => {
  const [textValue, setTextValue] = useState("");

  const onChange = (e) => {
    const filterOptions = {
      title: e.target.value,
    };
    setTextValue(filterOptions.title);
    props.onFilter(filterOptions);
  };

  const inlineStyles = {
    pointerEvents: props.isEnabled ? "auto" : "none",
    opacity: props.isEnabled ? "1" : "0.5",
  };
  return (
    <div style={inlineStyles} className={classes["tickets-tab"]}>
      <input
        className={classes["title-input"]}
        type="text"
        value={textValue}
        placeholder="Search title"
        onChange={onChange}
      />
    </div>
  );
};

export default FilteringTab;
