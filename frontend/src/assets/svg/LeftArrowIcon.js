import React from "react";

const LeftArrowIcon = ({ height }) => {
  return (
    <svg
      fill="none"
      height={height ? height : "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m0 0h48v48h-48z" fill="#fff" fillOpacity=".01" />
      <g
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      >
        <path d="m5.79891 24h35.99999" />
        <path d="m17.7988 36-11.99997-12 11.99997-12" />
      </g>
    </svg>
  );
};

export default LeftArrowIcon;
