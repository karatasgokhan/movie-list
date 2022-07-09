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
      <section className="search-root">
        <div className="search-wrapper">
          <h2>Welcome.</h2>
          <h3>
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
          <div className="search-block">
            <label htmlFor="">
              <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" />
          </div>
        </div>
      </section>
    </>
  );
}
