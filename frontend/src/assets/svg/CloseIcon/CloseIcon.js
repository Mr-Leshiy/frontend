import React from "react";

import classes from "./CloseIcon.module.css";

const CloseIcon = ({ onClick, height }) => {
  return (
    <svg
      className={classes["close"]}
      onClick={onClick}
      height={height ? height : "3vh"}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m1082.2 896.6 410.2-410c51.5-51.5 51.5-134.6 0-186.1s-134.6-51.5-186.1 0l-410.2 410-410.1-410.1c-51.5-51.5-134.6-51.5-186.1 0s-51.5 134.6 0 186.1l410.2 410-410.2 410c-51.5 51.5-51.5 134.6 0 186.1 51.6 51.5 135 51.5 186.1 0l410.2-410 410.2 410c51.5 51.5 134.6 51.5 186.1 0 51.1-51.5 51.1-134.6-.5-186.2z" />
    </svg>
  );
};

export default CloseIcon;
