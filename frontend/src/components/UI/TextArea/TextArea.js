import React from "react";

import classes from "./TextArea.module.css";

const TextArea = ({ rows, maxlength, defaultValue, onChange, readOnly }) => {
  return (
    <div className={classes["container"]}>
      <textarea
        rows={rows}
        maxlength={maxlength}
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
