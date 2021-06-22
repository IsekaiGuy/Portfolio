import React, { useState } from "react";
import meSmall from "../images/Triangle2.png";

import styled from "styled-components";
import { motion } from "framer-motion";
import { ZFade } from "../animations";

import InfinityGauntlet from "react-thanos-snap";

const PhotoSnap2 = ({ neonChanger }) => {
  const [snap, setSnap] = useState(false);

  const NeonHandler = () => {
    setSnap(!snap);
    return neonChanger(!snap);
  };

  return (
    <Container>
      <InfinityGauntlet style={{ zIndex: 20, width: "100%" }} snap={snap}>
        <Me src={meSmall} alt="My Photo" />
      </InfinityGauntlet>
      <Link
        href="/"
        style={!snap ? { display: "none" } : { display: "inline" }}
        variants={ZFade}
        initial={snap ? "hidden" : "show"}
        animate={snap ? "show" : "hidden"}
      >
        Link
      </Link>
      <button onClick={() => NeonHandler()}>
        {snap ? "Bring Me Back!" : "Source Code"}
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: none;
  flex-direction: column;
  padding: 0 1rem 0 4rem;
  width: 55vw;
  min-height: 100%;

  button {
    width: 70%;
    cursor: pointer;
    border-radius: 10px;
    background: none;
    border: 3px solid;
    font: inherit;
    line-height: 1;
    z-index: 30;
    margin-top: 100%;
    padding: 0.8em 2em;
    font-size: 1.1rem;
    border-color: orangered;
    font-family: "Montserrat", sans-serif;
    text-shadow: 1px 1px black;
    color: peachpuff;
    font-weight: bold;
    filter: drop-shadow(3px 3px 2px navy);
    align-self: center;

    &:hover {
      box-shadow: 0 0.5em 0.5em -0.4em orangered;
      transform: translateY(-0.25em);
      border-color: red;
      color: orangered;
    }

    &:active {
      transform: translateY(0.25em);
      box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
        -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
        inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
        inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    margin-left: 20vw;
    padding: 4rem 1rem 4rem 4rem;
  }

  @media screen and (max-width: 800px) {
    width: 63vw;
    padding: 4rem 1rem 4rem 0rem;
  }

  @media screen and (max-width: 500px) {
    button {
      font-size: 3vw;
    }
  }
`;

const Me = styled.img`
  width: 100%;
  position: relative;
`;

const Link = styled(motion.a)`
  justify-self: center;
  align-self: center;
  width: fit-content;
  z-index: 2;
  position: absolute;
  top: 35%;
  left: 53%;
  cursor: pointer;
  font-size: 3vh;
  color: peachpuff;
  text-shadow: 1px 1px 1px orange;

  @media screen and (max-width: 1000px) {
    top: 805%;
    left: 48%;
  }

  @media screen and (max-width: 900px) {
    top: 790%;
  }

  @media screen and (max-width: 850px) {
    top: 735%;
  }

  @media screen and (max-width: 800px) {
    top: 720%;
  }

  @media screen and (max-width: 700px) {
    top: 670%;
  }

  @media screen and (max-width: 650px) {
    top: 860%;
  }

  @media screen and (max-width: 600px) {
    top: 860%;
  }

  @media screen and (max-width: 500px) {
    top: 790%;
  }

  @media screen and (max-width: 450px) {
    top: 805%;
  }

  @media screen and (max-width: 400px) {
    top: 775%;
  }

  @media screen and (max-width: 370px) {
    top: 770%;
  }
`;

export default PhotoSnap2;
