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
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: inline;
  }

  @media screen and (max-width: 700px) {
    top: 7vh;
  }

  @media screen and (max-width: 500px) {
    top: 20vh;
  }
`;

export default LowscaleBg;
