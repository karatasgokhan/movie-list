import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container, Row, Col } from "react-grid-system";

import {
  useGetTheDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
  useGetTheCreditsApiQuery,
} from "../store/apis/TheMovieApi";

import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import Poster from "../components/Poster/Poster";
import DetailInfo from "../components/DetailInfo/DetailInfo";

export default function Detail() {
  const { id } = useParams();
  const [backgroundImage, setBackgroundImage] = useState("");
  const imageBackPath = "https://image.tmdb.org/t/p/original";
  const selectedSwitch = JSON.parse(localStorage.getItem("switch"));

  const { data, isLoading } = useGetTheDetailApiQuery(
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

  useEffect(() => {
    setBackgroundImage(`${imageBackPath}${data?.backdrop_path}`);
  }, [data]);

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
        {isLoading && releaseIsLoading && creditsIsLoading ? (
          <SkeletonTheme
            width="100%"
            height="60vh"
            baseColor="#032541"
            highlightColor="#053861"
          >
            <Skeleton />
          </SkeletonTheme>
        ) : (
          <div
            className="detail-wrapper"
            style={{
              backgroundImage: "url(" + backgroundImage + ")",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="detail-container">
              <div className="detail-block">
                <Container>
                  <Row>
                    <Col sm={3}>
                      <Poster path={data?.poster_path} />
                    </Col>
                    <Col sm={9}>
                      <DetailInfo
                        data={data}
                        releaseDatesData={releaseDatesData}
                        creditsData={creditsData}
                        selectedSwitch={selectedSwitch}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
