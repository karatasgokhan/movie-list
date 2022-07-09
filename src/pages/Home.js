import React, { useState } from "react";

import { useGetTheMovieListApiQuery } from "../store/apis/TheMovieApi";

export default function Home() {
  const [searchField, setSearchField] = useState("");
  const { data } = useGetTheMovieListApiQuery("", {
    refetchOnMountOrArgChange: true,
  });

  console.log("data", data);
  console.log("searchField", searchField);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <>
      <section
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(var(--darkBlue), 0.8) 0%, rgba(var(--darkBlue), 0) 100%), url("/assets/img/subHeader.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "300px",
          maxHeight: "360px",
          display: "flex",
        }}
        className="search-root"
      >
        <div className="search-wrapper">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search-block">
            <label>
              <input
                type="text"
                placeholder="Search for a movie, tv show, person......"
                onChange={handleChange}
              />
            </label>
            <input className="search-button" type="submit" value="Search" />
          </div>
        </div>
      </section>
      <section className="content-root">
        <div className="content-wrapper">
          <div className="content-contaier">
            <div className="content-block"></div>
          </div>
        </div>
      </section>
    </>
  );
}
