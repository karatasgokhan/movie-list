import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu(props) {
  return (
    <ul className="dropdown-menu-container">
      {props?.content?.content.map((item, index) => {
        return (
          <li
            style={
              props?.content?.header
                ? { color: "#fff" }
                : { color: "#000", fontWeight: "400" }
            }
            className="dropdown-menu-block"
            key={index}
          >
            {item.head}
            {!props?.content?.header ? (
              <FontAwesomeIcon icon={faSortDown} />
            ) : (
              ""
            )}
            <div className="dropdown-menu-item">
              <ul>
                {item.dropdown.map((item2, index2) => {
                  return <li key={index2}>{item2.value}</li>;
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
