import React, { useEffect } from "react";
import Search from "../components/Search/Search";

export default function Home() {
  useEffect(() => {
    document.title = "The Movie Database(TMDB)";
  }, []);
  return (
    <>
      <Search />
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
