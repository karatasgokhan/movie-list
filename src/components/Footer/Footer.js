import React from "react";
import { NavLink } from "react-router-dom";

import * as ROUTES from "../../constants/routePath";

export default function Footer() {
  const rightMenuContent = [
    {
      head: "THE BASICS",
      content: [
        { value: "About TMDB" },
        { value: "Contact Us" },
        { value: "Support Forums" },
        { value: "API" },
        { value: "System Status" },
      ],
    },
    {
      head: "GET INVOLVED",
      content: [
        { value: "Contribution Bible" },
        { value: "Add New Movie" },
        { value: "Add New TV Show" },
      ],
    },
    {
      head: "COMMUNITY",
      content: [
        { value: "Guidelines" },
        { value: "Discussions" },
        { value: "Leaderboard" },
        { value: "Twitter" },
      ],
    },
    {
      head: "LEGAL",
      content: [
        { value: "Terms of Use" },
        { value: "API Terms of Use" },
        { value: "Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="footer-root">
      <div className="footer-wrapper">
        <div className="left-block">
          <NavLink to={ROUTES.HOME} className="logo-item">
            <picture>
              <source
                media="(min-width: 641px)"
                srcSet="/assets/img/footer.webp"
                type="image/webp"
              />
              <img src="/assets/img/footer.png" alt="Footer Logo" />
            </picture>
          </NavLink>
        </div>
        <div className="right-block">
          <div className="menu-block">
            {rightMenuContent.map((item, index) => {
              return (
                <div key={index} className="menu-item">
                  <h4>{item.head}</h4>
                  <ul>
                    {item.content.map((item2, index2) => {
                      return <li key={index2}>{item2.value}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
