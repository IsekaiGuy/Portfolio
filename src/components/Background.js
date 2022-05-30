import styled from "styled-components";
import { Suspense, lazy, memo } from "react";

// Videos
import sample1 from "../videos/1.webm";
import sample2 from "../videos/2.webm";

const LowscaleBg = lazy(() => import("./LowscaleBg"));

const Background = ({ bgVideo }) => {
  return (
    <>
      <VideoBg
        style={{ visibility: bgVideo ? "visible" : "hidden" }}
        key={sample1}
        className="videoTag"
        autoPlay
        loop
        muted
        playsinline
      >
        <source src={sample1} type="video/mp4" />
      </VideoBg>
      <VideoBg
        style={{ visibility: bgVideo ? "hidden" : "visible" }}
        key={sample2}
        className="videoTag"
        autoPlay
        loop
        muted
        playsinline
      >
        <source src={sample2} type="video/mp4" />
      </VideoBg>
      <Suspense
        fallback={
          <h2 style={{ position: "absolute", top: "5%", left: "5%" }}>
            Loading, please wait...
          </h2>
        }
      >
        <LowscaleBg />
      </Suspense>
    </>
  );
};

const VideoBg = styled.video`
  position: fixed;
  z-index: 1;
  top: -10vh;
  left: 0;
  width: 100vw;

  @media screen and (max-width: 1200px) {
    top: -5vh;
  }

  @media screen and (max-width: 1100px) {
    top: 0vh;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default memo(Background);
