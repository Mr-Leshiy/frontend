import React from "react";

import classes from "./EditIcon.module.css";

const EditIcon = ({ onClick, height }) => {
  return (
    <svg
      className={classes["edit"]}
      onClick={onClick}
      height={height ? height : "3vh"}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="m16.4745 5.40801 2.1172 2.11723m-.7559-3.98235-5.7272 5.72716c-.2955.29557-.497.67201-.579 1.08185l-.5296 2.6481 2.6481-.5296c.4098-.082.7863-.2835 1.0818-.579l5.7272-5.72717c.7239-.72386.7239-1.89747 0-2.62133s-1.8975-.72387-2.6213-.00001z" />
        <path d="m19 15v3c0 1.1046-.8954 2-2 2h-11c-1.10457 0-2-.8954-2-2v-11c0-1.10457.89543-2 2-2h3" />
      </g>
    </svg>
  );
};

export default EditIcon;
