import React from "react";

import classes from "./TextArea.module.css";

const TextArea = ({ rows, maxLength, defaultValue, onChange, readOnly }) => {
  return (
    <div className={classes["container"]}>
      <textarea
        rows={rows}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={(event) => {
          if (onChange) {
            onChange(event.target.value);
          }
        }}
        readOnly={readOnly}
        className={classes["text-area"]}
      />
    </div>
  );
};

export default TextArea;
