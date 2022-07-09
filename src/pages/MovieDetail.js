import React from "react";

import DropdownMenu from "../components/DropdownMenu/DropdownMenu";

export default function MovieDetail() {
  const menuContent = {
    header: false,
    content: [
      {
        head: "Overview",
        dropdown: [
          { value: "Main" },
          { value: "Alternative Titles" },
          { value: "Cast & Crew" },
          { value: "Release Dates" },
          { value: "Translations" },
          { value: "Watch Now" },
          { value: "Changes" },
          { value: "Report" },
          { value: "Edit" },
        ],
      },
      {
        head: "Media",
        dropdown: [
          { value: "Backdrops" },
          { value: "Logos" },
          { value: "Posters" },
          { value: "Videos" },
        ],
      },
      {
        head: "Fandom",
        dropdown: [{ value: "Discussions" }, { value: "Reviews" }],
      },
      {
        head: "Share",
        dropdown: [
          { value: "Share Link" },
          { value: "Facebook" },
          { value: "Twitter" },
        ],
      },
    ],
  };

  return (
    <>
      <div className="detail-root">
        <div className="dropdown-detail-root">
          <div className="dropdown-detail-wrapper">
            <DropdownMenu content={menuContent} />
          </div>
        </div>
        <div className="detail-wrapper">
          <div className="detail-container">
            <div className="detail-block"></div>
          </div>
        </div>
      </div>
    </>
  );
}
