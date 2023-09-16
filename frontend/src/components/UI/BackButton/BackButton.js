import React from "react";

import classes from "./BackButton.module.css";

import LeftArrowIcon from "../../../assets/svg/LeftArrowIcon";

const BackButton = ({ onClick }) => {
  return (
    <div className={classes["back-button"]} onClick={onClick}>
      <LeftArrowIcon height={"3vh"} />
      <p>Back</p>
    </div>
  );
};

export default BackButton;
