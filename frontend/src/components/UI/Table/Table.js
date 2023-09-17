import React from "react";

import classes from "./Table.module.css";

export class HeadElemenet {
  constructor(name, onClick) {
    this.name = name;
    this.onClick = onClick;
  }

  buildComponent() {
    return (
      <th>
        <div>
          <p onClick={this.onClick}>{this.name}</p>
        </div>
      </th>
    );
  }
}

export class RowElement {
  constructor(key, onClick, values) {
    this.key = key;
    this.onClick = onClick;
    this.values = values;
  }

  buildComponent() {
    const values = this.values.map((value) => {
      return <td>{value}</td>;
    });

    return (
      <tr key={this.key} onClick={this.onClick}>
        {values}
      </tr>
    );
  }
}

const Table = ({ head, rows }) => {
  head = head.map((element) => {
    return element.buildComponent();
  });
  rows = rows.map((element) => {
    return element.buildComponent();
  });
  return (
    <table className={classes["table"]}>
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
