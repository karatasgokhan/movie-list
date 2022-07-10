import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-grid-system";

import {
  useGetTheMovieDetailApiQuery,
  useGetTheMovieReleaseDatesApiQuery,
} from "../store/apis/TheMovieApi";

import DropdownMenu from "../components/DropdownMenu/DropdownMenu";

export default function MovieDetail() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const imageBackPath = "https://image.tmdb.org/t/p/original";
  const imagePosterPath = "https://image.tmdb.org/t/p/w500";

  const { data } = useGetTheMovieDetailApiQuery("43539", {
    refetchOnMountOrArgChange: true,
  });

  const { data: releaseDatesData } = useGetTheMovieReleaseDatesApiQuery(
    "43539",
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const certificationInfo = releaseDatesData?.results.filter(
    (f) => f.iso_3166_1 === data?.production_countries[0].iso_3166_1
  )[0].release_dates[0].certification;

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
                    <div className="left-block">
                      <div className="image-block">
                        <img
                          src={`${imagePosterPath}${data?.poster_path}`}
                          alt="Movie Footer"
                        />
                      </div>
                      <div className="text-block">
                        <div className="image-item">
                          <picture>
                            <source
                              media="(min-width: 641px)"
                              srcSet="/assets/img/streaming.webp"
                              type="image/webp"
                            />
                            <img
                              src="/assets/img/streaming.png"
                              alt="Now Streaming on puhutv"
                            />
                          </picture>
                        </div>
                        <div className="text-item">
                          <h4 className="streaming-text">Now Streaming</h4>
                          <h3 className="streaming-text">Watch Now</h3>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={8}>
                    <div className="right-block">
                      <div className="title-item">
                        <div className="title">
                          <h2>
                            {data?.original_title}
                            <span>({data?.release_date.split("-")[0]})</span>
                          </h2>
                        </div>
                        <div className="title-info">
                          <span className="certification">
                            {certificationInfo}
                          </span>
                          <span className="release">
                            {data?.release_date} (
                            {data?.production_countries[0].iso_3166_1})
                          </span>
                          <span className="genres">
                            {data?.genres.map((item, index) => {
                              return <span key={index}> {item.name}</span>;
                            })}
                          </span>
                          <span className="runtime">
                            {`${Math.floor(data?.runtime / 60)}h${
                              data?.runtime % 60
                            }m`}
                          </span>
                        </div>
                      </div>
                      <div className="score-item"></div>
                      <div className="info-item"></div>
                    </div>
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
