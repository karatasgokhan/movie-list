import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default function DropdownMenu(content) {
  return (
    <ul className="dropdown-menu-container">
      {content?.content?.content.map((item, index) => {
        return (
          <li
            style={
              content?.content?.header
                ? { color: "#fff" }
                : { color: "#000", fontWeight: "400" }
            }
            className="dropdown-menu-block"
            key={index}
          >
            {item.head}
            {!content?.content?.header ? (
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
