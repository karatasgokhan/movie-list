import React, { useRef, useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import * as ROUTES from "../../constants/routePath";

export default function Header() {
  let headerRoot = useRef();
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        headerRoot.current.classList.remove("header-remove");
      } else if (y < window.scrollY) {
        headerRoot.current.classList.add("header-remove");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const rightMenuContent = [
    {
      value: <FontAwesomeIcon icon={faPlus} />,
      search: false,
    },
    { value: <div className="translate-item">EN</div>, search: false },

    {
      value: <div className="circle">G</div>,
      search: false,
    },
    {
      value: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      search: true,
    },
  ];

  const leftMenuContent = [
    {
      head: "Movies",
      dropdown: [
        { value: "Popular" },
        { value: "Now playing" },
        { value: "Upcoming" },
        { value: "Top Rated" },
      ],
    },
    {
      head: "Tv Shows",
      dropdown: [
        { value: "Popular" },
        { value: "Airing Today" },
        { value: "On Tv" },
        { value: "Top Rated" },
      ],
    },
    {
      head: "People",
      dropdown: [{ value: "Popular People" }],
    },
    {
      head: "More",
      dropdown: [
        { value: "Discussions" },
        { value: "Leardboard" },
        { value: "Support" },
        { value: "API" },
      ],
    },
  ];

  return (
    <header ref={headerRoot} className="header-root">
      <div className="header-wrapper">
        <div className="header-container">
          <div className="left-block">
            <NavLink to={ROUTES.HOME} className="logo-item">
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet="/assets/img/logo.webp"
                  type="image/webp"
                />
                <img src="/assets/img/logo.png" alt="Movie" />
              </picture>
            </NavLink>
            <ul className="menu-item">
              {leftMenuContent.map((item, index) => {
                return (
                  <li key={index}>
                    {item.head}
                    <div className="dropdown">
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
          </div>
          <div className="right-block">
            <ul className="menu-item">
              {rightMenuContent.map((item, index) => {
                return (
                  <li className={`${item.search ? "search" : ""}`} key={index}>
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
