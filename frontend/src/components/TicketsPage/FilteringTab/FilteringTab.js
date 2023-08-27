import React, { useState } from "react";

import classes from "./FilteringTab.module.css";
import Button from "../../UI/Button/Button";

const FilteringTab = (props) => {
  const [textValue, setTextValue] = useState("");

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
    <div style={inlineStyles} className={classes["tickets-tab"]}>
      <input
        className={classes["title-input"]}
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Button className={classes["filter-button"]} onClick={handleFilterClick}>
        Filter
      </Button>
    </div>
  );
};

export default FilteringTab;
