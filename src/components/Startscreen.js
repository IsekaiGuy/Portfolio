import React, { Suspense } from "react";
import { HashLink } from "react-router-hash-link";

import Btn from "../components/Btn";

import myphoto from "../images/NeonMe.png";
import myphoto2 from "../images/NeonMe2.png";
import bg from "../images/Background2.png";

import lowscaleNeon from "../images/NeonMelowscale.png";
import lowscaleNeon2 from "../images/NeonMe2lowscale.png";
import loading from "../images/Loading.png";

import sample1 from "../videos/1.webm";
import sample2 from "../videos/2.webm";

import styled from "styled-components";
import { motion } from "framer-motion";
import { FadeIn } from "../animations";

const LowscaleBg = React.lazy(() => import("./LowscaleBg"));

const Startscreen = ({ bgVideo, snap }) => {
  return (
    <Container>
      <ImageContainer>
        <MyImage
          variants={FadeIn}
          initial="hidden"
          animate="show"
          src={snap ? myphoto2 : myphoto}
          alt="It's me - Andrey Kruglik"
        />

        <MyImageLowscale
          variants={FadeIn}
          initial="hidden"
          animate="show"
          src={snap ? lowscaleNeon2 : lowscaleNeon}
          alt="It's me - Andrey Kruglik"
        />
      </ImageContainer>
      <RightSide>
        <motion.h1>Welcome to my Homepage!</motion.h1>
        <motion.h3>
          My name is <Name> Andrey Kruglik</Name>
        </motion.h3>

        <SecondName> Andrey Kruglik</SecondName>
        <Buttons>
          <HashLink smooth to="#myworks">
            <Btn>My Works</Btn>
          </HashLink>
          <HashLink smooth to="#contact">
            <Btn>Contact me</Btn>
          </HashLink>
        </Buttons>
      </RightSide>
      <VideoBg
        key={bgVideo ? sample2 : sample1}
        className="videoTag"
        autoPlay
        loop
        muted
        playsinline
      >
        <source src={bgVideo ? sample2 : sample1} type="video/mp4" />
      </VideoBg>
      <Suspense fallback={<img src={loading} alt="Loading background" />}>
        <LowscaleBg />
      </Suspense>
      <SecondBg src={bg} alt="background" />
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  width: 100vw;
  z-index: 3;
  overflow-x: hidden;

  h1 {
    background: linear-gradient(orangered, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(3px 3px 3px navy);
    padding: 0 7px;
  }

  h3 {
    background: linear-gradient(orangered, red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(3px 3px 3px navy);
    padding: 0 7px;
  }

  @media screen and (max-width: 1100px) {
    min-height: 80vh;
  }

  @media screen and (max-width: 1000px) {
    min-height: 70vh;
  }

  @media screen and (max-width: 850px) {
    min-height: 60vh;
  }

  @media screen and (max-width: 800px) {
    min-height: 50vh;
  }

  @media screen and (max-width: 750px) {
    min-height: 45vh;
  }

  @media screen and (max-width: 700px) {
    min-height: 40vh;
  }
`;

///////////////////////////SPAN SPAN SPAN

const Name = styled(motion.span)`
  font-size: 3vw;
  color: red;
  padding-left: 5px;
  @media screen and (max-width: 1000px) {
    font-size: 7vh;
    display: block;
  }

  @media screen and (max-width: 900px) {
    font-size: 6vh;
  }

  @media screen and (max-width: 750px) {
    font-size: 5vh;
  }

  @media screen and (max-width: 700px) {
    font-size: 7vh;
    line-height: 1.4;
    display: none;
  }
`;

const SecondName = styled(motion.span)`
  display: none;
  background: linear-gradient(#ff681c, red);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: none;
  filter: drop-shadow(3px 3px 3px navy);
  padding: 0 8px;
  font-family: "road_rageregular";

  @media screen and (max-width: 700px) {
    font-size: 7.5vh;
    line-height: 1.4;
    display: block;
    margin: 15vh 0 0 10vw;
  }

  @media screen and (max-width: 650px) {
    margin: 15vh 0 0 5vw;
  }

  @media screen and (max-width: 600px) {
    margin: 12vh 0 0 5vw;
  }

  @media screen and (max-width: 550px) {
    margin: 12vh 0 0 12.5vw;
    font-size: 6vh;
  }

  @media screen and (max-width: 500px) {
    margin: 11vh 0 0 10vw;
  }

  @media screen and (max-width: 450px) {
    font-size: 5vh;
  }

  @media screen and (max-width: 400px) {
    margin: 11vh 0 0 14.5vw;
    font-size: 4vh;
  }
`;

////////////////////////RIGHTSIDE RIGHTSIDE RIGHTSIDE

const RightSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  margin-top: 2rem;
  padding: 0 1rem;
  width: 100%;
  height: auto;

  @media screen and (max-width: 1200px) {
    margin-top: -1rem;
  }

  @media screen and (max-width: 1100px) {
    margin-top: 2vh;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin: 7vh 7vw 0 0;
    padding: 0;

    h1 {
      font-size: 4vh;
    }

    h3 {
      font-size: 3vh;
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 2rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 850px) {
    margin-top: 4rem;

    h1 {
      font-size: 3.5vh;
      margin-bottom: 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    h3 {
      font-size: 3.5vh;
      position: absolute;
      top: 9.5%;
      left: 37vw;
    }

    margin-top: -0.5rem;
    padding: 0;
    margin-left: 5%;
    margin-right: -15vw;
    text-align: left;

    h1 {
      font-size: 4vw;
      position: absolute;
      top: 3%;
      left: 22vw;
    }
  }

  @media screen and (max-width: 600px) {
    margin-left: 1%;
    h3 {
      top: 7.5%;
      left: 35vw;
    }
  }

  @media screen and (max-width: 550px) {
    margin-left: 0;

    h3 {
      top: 7%;
    }

    h2 {
      margin-left: 15%;
      font-size: 5.5vh;
    }
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;

    h2 {
      margin-top: 28vh;
      margin-left: 26%;
      font-size: 3.5vh;
    }

    h3 {
      font-size: 3vh;
      position: absolute;
      top: 6.5%;
      left: 35vw;
    }
  }

  @media screen and (max-width: 450px) {
    h2 {
      margin-top: 28vh;
      margin-left: 23.5%;
      font-size: 3.5vh;
    }

    h3 {
      font-size: 2.3vh;
      left: 36vw;
    }
  }

  @media screen and (max-width: 400px) {
    h2 {
      margin-top: 28vh;
      margin-left: 23.5%;
      font-size: 3vh;
    }
  }
`;

/////////////////////IMAGE IMAGE IMAGE
const ImageContainer = styled(motion.div)`
  width: 58vw;
  margin: 8rem 0 0 15rem;

  @media screen and (max-width: 1300px) {
    margin: 10rem 0 0 9rem;
  }

  @media screen and (max-width: 1100px) {
    margin: 17vh 0 0 8vw;
  }

  @media screen and (max-width: 1000px) {
    margin: 14vh 0 0 9vw;
  }

  @media screen and (max-width: 900px) {
    margin: 15vh 0 0 9vw;
  }

  @media screen and (max-width: 850px) {
    margin: 13vh 0 0 10vw;
  }

  @media screen and (max-width: 800px) {
    margin: 11vh 0 0 8vw;
  }

  @media screen and (max-width: 700px) {
    position: absolute;
    top: 4vh;
    left: 12vw;
    padding: 12vh 12vw;
  }

  @media screen and (max-width: 650px) {
    left: 12.5vw;
    top: 7vh;
    padding: 4rem 4rem;
  }

  @media screen and (max-width: 600px) {
    top: 5vh;
    padding: 3rem 3rem;
  }

  @media screen and (max-width: 550px) {
    top: 5vh;
    padding: 2rem 2rem;
  }

  @media screen and (max-width: 500px) {
    top: 0vh;
    left: 13vw;
    padding: 3.5rem 3.5rem;
  }

  @media screen and (max-width: 450px) {
    top: 1.5vh;
    padding: 3rem 3rem;
  }

  @media screen and (max-width: 400px) {
    padding: 2rem 2rem;
  }
`;

const MyImage = styled(motion.img)`
  position: relative;
  width: 100%;
  z-index: 10;
  padding: 1rem;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MyImageLowscale = styled(motion.img)`
  position: relative;
  width: 100%;
  z-index: 10;
  padding: 1rem;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

const Buttons = styled(motion.div)`
  margin-top: 2rem;
  padding-left: 7px;
  width: 100%;

  @media screen and (max-width: 900px) {
    margin-top: 1rem;
    padding-left: 2vw;

    button {
      width: 42%;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }

  @media screen and (max-width: 750px) {
    button {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 700px) {
    display: flex;
    margin: 40vh 50vw 0 3vw;

    a:last-child {
      margin-left: 20vw;
    }

    button {
      font-size: 1rem;
      width: 170%;
    }
  }

  @media screen and (max-width: 650px) {
    margin-left: 0;
  }

  @media screen and (max-width: 550px) {
    display: block;
    width: 55%;
    margin-left: 3%;

    a:last-child {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 25vh;
  }
`;

const VideoBg = styled.video`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SecondBg = styled.img`
  width: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0%;

  @media screen and (max-width: 500px) {
    display: block;
    z-index: 1;
  }

  @media screen and (max-width: 450px) {
    top: 5%;
  }

  @media screen and (max-width: 400px) {
    top: 7%;
  }
`;

export default React.memo(Startscreen);
