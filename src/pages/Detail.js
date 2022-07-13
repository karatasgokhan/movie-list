import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import getDetailBackgroundColor from "../helper/detailBackgroundColor";

import {
  useGetTheDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
  useGetTheCreditsApiQuery,
  useGetTheTVRatingsApiQuery,
  useGetTheProvidersApiQuery,
  useGetTheVideosApiQuery,
} from "../store/apis/TheMovieApi";

import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import Poster from "../components/Poster/Poster";
import DetailInfo from "../components/DetailInfo/DetailInfo";

export default function Detail() {
  const { id } = useParams();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [backgroundImage, setBackgroundImage] = useState("");
  const imageBackPath = "https://image.tmdb.org/t/p/original";
  const imageBackPathMobil =
    "https://image.tmdb.org/t/p/w1000_and_h450_multi_faces";
  const selectedSwitch = JSON.parse(localStorage.getItem("switch"));

  const { data, isLoading } = useGetTheDetailApiQuery(
    {
      id: id,
      type: selectedSwitch.name,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { data: videosData } = useGetTheVideosApiQuery(
    {
      id: id,
      type: selectedSwitch.name,
    },
    { refetchOnMountOrArgChange: true }
  );

  const { data: releaseDatesData, isLoading: releaseIsLoading } =
    useGetTheMovieReleaseDatesApiQuery(id, {
      refetchOnMountOrArgChange: true,
    });

  const { data: ratingsData, isLoading: ratingsIsLoading } =
    useGetTheTVRatingsApiQuery(id, {
      refetchOnMountOrArgChange: true,
    });

  const { data: creditsData, isLoading: creditsIsLoading } =
    useGetTheCreditsApiQuery(
      {
        id: id,
        type: selectedSwitch.name,
      },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  const { data: providersData, isLoading: providersIsLoading } =
    useGetTheProvidersApiQuery(
      {
        id: id,
        type: selectedSwitch.name,
      },
      {
        refetchOnMountOrArgChange: true,
      }
    );

  useEffect(() => {
    document.title = `${
      selectedSwitch.name === "movie"
        ? data?.original_title
        : data?.original_name
    }(${
      selectedSwitch.name === "movie"
        ? data?.release_date?.split("-")[0]
        : data?.first_air_date?.split("-")[0]
    })`;
  }, [
    data?.original_title,
    data?.release_date,
    data?.original_name,
    selectedSwitch,
    data?.first_air_date,
  ]);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowSize.innerWidth > 992) {
      setBackgroundImage(`${imageBackPath}${data?.backdrop_path}`);
    } else {
      setBackgroundImage(`${imageBackPathMobil}${data?.backdrop_path}`);
    }
  }, [data, windowSize.innerWidth]);

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

  console.log("data", data);

  return (
    <>
      <div className="detail-root">
        <div className="dropdown-detail-root">
          <div className="dropdown-detail-wrapper">
            <DropdownMenu content={menuContent} detail={true} />
          </div>
        </div>
        {isLoading &&
        releaseIsLoading &&
        creditsIsLoading &&
        ratingsIsLoading &&
        providersIsLoading ? (
          <SkeletonTheme
            width="100%"
            height="60vh"
            baseColor="#032541"
            highlightColor="#053861"
          >
            <Skeleton />
          </SkeletonTheme>
        ) : windowSize.innerWidth > 992 ? (
          <div
            className="detail-wrapper"
            style={{
              backgroundImage: "url(" + backgroundImage + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div
              className="detail-container"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(${getDetailBackgroundColor(
                  data?.vote_average * 10
                )}, 1) 150px, rgba(${getDetailBackgroundColor(
                  data?.vote_average * 10
                )}, 0.84) 100%)`,
              }}
            >
              <div className="detail-block">
                <div className="detail-item">
                  <Poster
                    providersData={providersData}
                    production={data?.production_countries[0]?.iso_3166_1}
                    mobil={false}
                    path={data?.poster_path}
                  />

                  <DetailInfo
                    data={data}
                    releaseDatesData={releaseDatesData}
                    creditsData={creditsData}
                    ratingsData={ratingsData}
                    videosData={videosData}
                    selectedSwitch={selectedSwitch}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="detail-wrapper">
            <div className="detail-container">
              <div className="detail-block">
                <div className="detail-item">
                  <div
                    className="top-block"
                    style={{
                      backgroundImage: "url(" + backgroundImage + ")",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className="top-item"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(31.5, 31.5, 10.5, 1) 20%, rgba(31.5, 31.5, 10.5, 0) 50%)",
                      }}
                    >
                      <Poster
                        providersData={providersData}
                        production={data?.production_countries[0]?.iso_3166_1}
                        mobil={true}
                        path={data?.poster_path}
                      />
                    </div>
                  </div>
                  <div className="bottom-block">
                    <DetailInfo
                      data={data}
                      releaseDatesData={releaseDatesData}
                      creditsData={creditsData}
                      ratingsData={ratingsData}
                      videosData={videosData}
                      selectedSwitch={selectedSwitch}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
