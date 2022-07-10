import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-grid-system";

import {
  useGetTheMovieDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
  useGetTheMovieCreditsApiQuery,
} from "../store/apis/TheMovieApi";

import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
import Poster from "../components/Poster/Poster";
import DetailInfo from "../components/DetailInfo/DetailInfo";

export default function MovieDetail() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const imageBackPath = "https://image.tmdb.org/t/p/original";

  const { data } = useGetTheMovieDetailApiQuery("43539", {
    refetchOnMountOrArgChange: true,
  });

  const { data: releaseDatesData } = useGetTheMovieReleaseDatesApiQuery(
    "43539",
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const { data: creditsData } = useGetTheMovieCreditsApiQuery("43539", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    document.title = `${data?.original_title}(${
      data?.release_date.split("-")[0]
    })`;
  }, [data?.original_title, data?.release_date]);

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
                  <Col sm={4}>
                    <Poster path={data?.poster_path} />
                  </Col>
                  <Col sm={8}>
                    <DetailInfo
                      data={data}
                      releaseDatesData={releaseDatesData}
                      creditsData={creditsData}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
