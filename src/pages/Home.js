import React from "react";
import Search from "../components/Search/Search";

export default function Home() {
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
