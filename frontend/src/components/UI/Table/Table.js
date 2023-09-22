import React from "react";

import classes from "./Table.module.css";

export class HeadElemenet {
  constructor(name, onClick) {
    this.name = name;
    this.onClick = onClick;
  }

  buildComponent(index) {
    return (
      <th key={index}>
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

  buildComponent(index) {
    const values = this.values.map((value, i) => {
      return <td key={i}>{value}</td>;
    });

    return (
      <tr key={index} onClick={this.onClick}>
        {values}
      </tr>
    );
  }
}

const Table = ({ head, rows }) => {
  head = head
    ? head.map((element, i) => {
        return element.buildComponent(i);
      })
    : [];
  rows = rows
    ? rows.map((element, i) => {
        return element.buildComponent(i);
      })
    : [];
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
