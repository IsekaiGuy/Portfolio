import { memo } from "react";
import { HashLink } from "react-router-hash-link";

import Btn from "../components/Btn";

// Images
import myphoto from "../images/NeonMe.png";
import myphoto2 from "../images/NeonMe2.png";
import lowscaleNeon from "../images/NeonMelowscale.png";
import lowscaleNeon2 from "../images/NeonMe2lowscale.png";

// Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { FadeIn, ButtonScale, SlideInRight } from "../animations";

const Startscreen = ({ snap }) => {
  return (
    <Container>
      <ContentContainer>
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
          <Title>
            <motion.div variants={SlideInRight} animate="show" initial="hidden">
              <motion.h2 variants={SlideInRight}>
                Welcome to my Homepage!
              </motion.h2>
              <motion.h3 variants={SlideInRight}>My name is</motion.h3>
              <Name variants={SlideInRight}>Andrey Kruglik</Name>
            </motion.div>
          </Title>
          <Buttons variants={ButtonScale} initial="hidden" animate="show">
            <HashLink
              smooth
              to="#myworks"
              tabIndex="-1"
              style={{ display: "contents" }}
            >
              <Btn>My Works</Btn>
            </HashLink>
            <HashLink
              smooth
              to="#contact"
              tabIndex="-1"
              style={{ display: "contents" }}
            >
              <Btn>Contact me</Btn>
            </HashLink>
          </Buttons>
        </RightSide>
      </ContentContainer>
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  z-index: 3;
  overflow: clip;
  align-content: center;
  align-items: center;

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
    height: 80vh;
  }

  @media screen and (max-width: 700px) {
    height: 72vh;
  }

  @media screen and (max-width: 500px) {
    height: 50vh;
    align-items: flex-end;
    margin-top: 2vh;
  }

  @media screen and (max-width: 400px) {
    height: 70vh;
    margin-top: 0;
  }
`;

const ContentContainer = styled(motion.div)`
  display: flex;
  align-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 3vw 0 5vw;

  @media screen and (max-width: 1200px) {
    margin-top: -7vh;
    padding: 0 5vw;
  }

  @media screen and (max-width: 700px) {
    margin-top: 0vh;
    padding-right: 0;
    padding-left: 7vw;
  }

  @media screen and (max-width: 600px) {
    margin-top: -5vh;
  }

  @media screen and (max-width: 550px) {
    margin-top: -15vh;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    margin: 2vh 0 0 0;
    padding: 0;
    flex-direction: column-reverse;
    width: 100vw;
    justify-content: center;
  }
`;

const Title = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;

  h1 {
    font-size: 5vw;
    padding-left: 7px;
    margin-top: -12px;
  }

  h2 {
    font-size: 1.7rem;
    padding-left: 7px;
  }

  @media screen and (max-width: 800px) {
    margin-top: -7vh;
    padding: 0 5vw;
  }

  h2 {
    font-size: 3vw;
  }

  h3 {
    font-size: 2.7vw;
    padding-bottom: 1vh;
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
    margin: 0 0 0 3vw;
    padding: 0;

    h1 {
      font-size: 6vw;
    }

    h2 {
      font-size: 5vw;
    }
  }

  @media screen and (max-width: 450px) {
    margin: 0 0 2vh 6vw;
  }
`;

const Name = styled(motion.h1)`
  @media screen and (max-width: 1000px) {
    font-size: 7vh;
    display: block;
  }
`;

////////////////////////RIGHTSIDE RIGHTSIDE RIGHTSIDE

const RightSide = styled(motion.div)`
  display: flex;
  flex-direction: column;
  z-index: 10;
  margin-top: 6vh;
  margin-left: -12vh;
  margin-right: 5vw;
  text-align: center;
  width: 100%;
  height: auto;
  position: relative;

  @media screen and (max-width: 1200px) {
    margin-right: 2vw;
    margin-top: 10vh;
  }

  @media screen and (max-width: 1100px) {
    margin-top: 18vh;
    margin-right: 0;
    padding-left: 4vw;
  }

  @media screen and (max-width: 800px) {
    margin-top: 30vh;
  }

  @media screen and (max-width: 400px) {
    margin-top: 10vh;
  }
`;

/////////////////////IMAGE IMAGE IMAGE
const ImageContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-items: center;
  width: 67%;
  padding: 10% 0 5% 5%;
  position: relative;

  @media screen and (max-width: 1100px) {
    margin-top: 7%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 9%;
    padding: 20vh 0 5% 0;
    width: 55vw;
  }

  @media screen and (max-width: 650px) {
    margin-top: 6.5%;
    width: 50vw;
  }

  @media screen and (max-width: 600px) {
    margin-top: 9%;
    width: 45vw;
  }

  @media screen and (max-width: 500px) {
    display: block;
    padding: 0;
    margin: 0;
    width: 30vw;
  }

  @media screen and (max-width: 400px) {
    margin-top: 5%;
    width: 40vw;
  }
`;

const MyImage = styled(motion.img)`
  position: relative;
  width: 100%;
  z-index: 10;
  padding: 3vw;

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

  @media screen and (max-width: 800px) {
    padding-right: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;

const Buttons = styled(motion.div)`
  padding-left: 3vw;
  width: 100%;

  @media screen and (max-width: 900px) {
    button {
      font-size: 1.7vw;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 0;
  }

  @media screen and (max-width: 750px) {
    button {
      font-size: 2vw;
    }
  }

  @media screen and (max-width: 500px) {
    position: absolute;
    padding: 0;
    top: 45vh;
    left: 15vw;
    display: flex;

    button {
      width: 40vw;
      font-size: 3vw;
    }
  }

  @media screen and (max-width: 400px) {
    flex-direction: column;
    top: 47vh;
    left: 10vw;

    button {
      font-size: 3.2vw;
      width: 80vw;
    }
  }

  @media screen and (max-width: 370px) {
    left: 21vw;
  }
`;

export default memo(Startscreen);
