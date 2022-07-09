import React from "react";
import Search from "../components/Search/Search";

import { useGetTheMovieListApiQuery } from "../store/apis/TheMovieApi";

export default function Home() {
  const { data } = useGetTheMovieListApiQuery("", {
    refetchOnMountOrArgChange: true,
  });

  console.log("data", data);

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
