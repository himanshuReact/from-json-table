import React, { useState } from "react";
import * as importData from "../data";
import "./styles.css";

const Table = () => {
  const [data, setData] = useState(importData[0]);

  const getHeaders = () => {
    const header = [];
    Object.keys(data).map((key, index) => {
      console.log("key", key);
      header.push(<th>{key}</th>);
      return header;
    });
    console.log(header);
    return header;
  };

  const getSubHeaders = () => {
    const subHeader = [];
    let subs = Object.values(data)[0];
    console.log("sub", subs);

    Object.keys(subs).map((elem) => {
      // con;
      return subHeader.push(<td>{elem}</td>);
    });
    return subHeader;
  };

  const getTableValues = () => {
    const subHeader = [];
    Object.values(data).map((elem) => {
      Object.values(elem).map((elem) => {
        console.log("elem", elem);
        return subHeader.push(<td>{elem}</td>);
      });
    });
    return subHeader;
  };

  console.log("data", data);

  return (
    <div className="display__board">
      <div className="header__name"> Pointers in different fields</div>
      <div className="table__main">
        <table>
          <tr>
            <thead>{getHeaders()}</thead>
          </tr>
          <tr>
            <div>{getSubHeaders()}</div>
          </tr>
          <tr>
            <div>{getTableValues()}</div>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
