import React from "react";

import classes from "./AcceptIcon.module.css";

const AcceptIcon = ({ onClick, height }) => {
  return (
    <svg
      className={classes["accept"]}
      onClick={onClick}
      height={height ? height : "3vh"}
      viewBox="1 1 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
    </svg>
  );
};

export default AcceptIcon;
