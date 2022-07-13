import React, { useRef, useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import Hamburger from "hamburger-react";

import * as ROUTES from "../../constants/routePath";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

export default function Header() {
  let headerRoot = useRef();
  const [openMobilMenu, setOpenMobilMenu] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        headerRoot?.current?.classList?.remove("header-remove");
      } else if (y < window.scrollY) {
        headerRoot?.current.classList?.add("header-remove");
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
      value: <FontAwesomeIcon icon={faBell} />,
      search: false,
    },
    {
      value: <div className="circle">G</div>,
      search: false,
    },

    {
      value: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      search: true,
    },
  ];

  const leftMenuContent = {
    header: true,
    content: [
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
    ],
  };

  return (
    <header ref={headerRoot} className="header-root">
      <div className="header-wrapper">
        <div className="header-container">
          <div className="hamburger-menu-container">
            <Hamburger
              toggled={openMobilMenu}
              toggle={setOpenMobilMenu}
              color="#fff"
              distance="sm"
              size={20}
              label="Show menu"
            />
            {openMobilMenu && (
              <div className="hamburger-menu">
                <DropdownMenu content={leftMenuContent} detail={false} />
              </div>
            )}
          </div>
          <div className="left-block desktop">
            <NavLink to={ROUTES.HOME} className="logo-item">
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet="/assets/img/logo.webp"
                  type="image/webp"
                />
                <img src="/assets/img/logo.png" alt="Header Logo" />
              </picture>
            </NavLink>
            <DropdownMenu content={leftMenuContent} detail={false} />
          </div>
          <div className="left-block mobil">
            <NavLink to={ROUTES.HOME} className="logo-item">
              <picture>
                <source
                  media="(min-width: 641px)"
                  srcSet="/assets/img/footer.webp"
                  type="image/webp"
                />
                <img src="/assets/img/footer.png" alt="Header Mobil Logo" />
              </picture>
            </NavLink>
          </div>
          <div className="right-block">
            <ul>
              {rightMenuContent.map((item, index) => {
                return (
                  <li
                    className={`${item.search ? "search" : ""}${
                      index === 0 || index === 1 ? "mobil" : ""
                    }`}
                    key={index}
                  >
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
