import React from "react";
import styled from "styled-components";
import lowscale1 from "../videos/lowscale1.webm";

const LowscaleBg = () => {
  return (
    <VideoBg
      key={lowscale1}
      className="videoTag"
      autoPlay
      loop
      muted
      playsinline
    >
      <source src={lowscale1} type="video/mp4" />
    </VideoBg>
  );
};

const VideoBg = styled.video`
  display: none;
  position: fixed;
  z-index: 1;
  top: -10vh;
  left: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: block;
    top: -5vh;
  }

  @media screen and (max-width: 900px) {
    top: 0;
    transform: scale(1.2);
  }

  @media screen and (max-width: 750px) {
    top: 5vh;
  }

  @media screen and (max-width: 700px) {
    top: 6vh;
    transform: scale(1.3);
  }

  @media screen and (max-width: 600px) {
    transform: scale(1.5);
  }

  @media screen and (max-width: 500px) {
    transform: scale(1.8);
  }

  @media screen and (max-width: 400px) {
    top: 15vh;
  }
`;

export default LowscaleBg;
