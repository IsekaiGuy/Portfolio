import React from "react";
import { v4 as uuidv4 } from "uuid";

import worksData from "../worksData";
import Btn from "../components/Btn";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInAndOut } from "../animations";

const MyWorks = () => {
  return (
    // <AnimatePresence>
    // {inView && (
    <Container id="myworks" variants={FadeInAndOut} animate="show" exit="exit">
      <h2>My works</h2>
      {worksData.map((work) => {
        return (
          <Project id={work.id} key={work.id}>
            <VideoContainer>
              <Videos
                key={work.video}
                className="videoTag"
                autoPlay
                loop
                muted
                playsinline
                loading="lazy"
              >
                <source src={work.video} type="video/mp4" />
              </Videos>
            </VideoContainer>

            <DescriptionContainer>
              <Description>
                <h3>{work.title}</h3>
                <IconContainer>
                  {work.icons.map((icon) => (
                    <Icon key={uuidv4()} src={icon} alt="icon" />
                  ))}
                </IconContainer>
                <p>{work.description}</p>
              </Description>
              <Btns>
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Btn>Source Code</Btn>
                </a>
                <a
                  href={work.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Btn>Visit Website</Btn>
                </a>
              </Btns>
            </DescriptionContainer>
          </Project>
        );
      })}
    </Container>
    // )}
    // </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  z-index: 10;
  width: 100%;

  h2 {
    margin-top: 5rem;
    font-size: 3rem;
  }
  h3 {
    font-size: 2rem;
  }

  @media screen and (max-width: 1300px) {
    h2 {
      margin-top: 5rem;
    }
  }

  @media screen and (max-width: 1100px) {
    h3 {
      font-size: 2rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 1000px) {
    h3 {
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 700px) {
    h3 {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 550px) {
    h3 {
      margin: 0;
      font-size: 2.2rem;
    }
  }

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 5vh;
    }
  }

  @media screen and (max-width: 450px) {
    h2 {
      margin-top: 3vh;
    }
  }

  @media screen and (max-width: 400px) {
    h3 {
      font-size: 4vh;
    }
  }
`;

const Project = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50vh;
  padding: 10vh 5vw 15vh 10vw;
  gap: 5vw;

  @media screen and (max-width: 1200px) {
    padding: 10vh 5vw 15vh 5vw;
  }

  @media screen and (max-width: 1000px) {
    padding: 10vh 10% 30vh 10%;

    grid-template-rows: auto;
  }

  @media screen and (max-width: 850px) {
    display: flex;
  }

  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    padding: 7vh 10% 30vh 10%;
  }
`;

const VideoContainer = styled(motion.div)`
  grid-column: 1 / 2;
`;

const Videos = styled(motion.video)`
  width: 46vw;
  box-shadow: 5px 5px 5px black;
  border-radius: 5px;

  @media screen and (max-width: 650px) {
    width: 100%;
    display: block;
    box-shadow: 1px 1px 3px red;
  }
`;

const IconContainer = styled(motion.div)`
  display: flex;
  align-content: center;

  @media screen and (max-width: 550px) {
    justify-content: center;
  }
`;

const Icon = styled(motion.img)`
  width: 3vw;
  height: 4vh;
  margin: 0.5rem;
  filter: drop-shadow(2px 2px navy);

  @media screen and (max-width: 650px) {
    width: 8vw;
    height: 8vh;
  }
`;

const DescriptionContainer = styled(motion.div)`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 1300px) {
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
    margin-left: 2vw;

    h3 {
      text-align: center;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

const Description = styled(motion.div)`
  p {
    margin: 0.5rem 0;
  }
`;

const Btns = styled(motion.div)`
  display: flex;

  button {
    color: lightgray;
  }

  a:last-child {
    margin-left: 1em;
  }

  @media screen and (max-width: 1100px) {
    display: block;

    button {
      width: 100%;
      margin-top: 10px;
    }

    a:last-child {
      margin-left: 0em;
    }
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    margin-left: -50vw;
    padding: 0;
    margin-bottom: -10vh;

    a:last-child {
      margin-left: 2em;
      justify-content: center;
    }

    button {
      width: 40vw;
    }
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: -5vh;
  }

  @media screen and (max-width: 8500px) {
    margin-bottom: -13vh;
  }

  @media screen and (max-width: 650px) {
    margin-left: -1vw;
    margin-top: 1rem;

    a:last-child {
      margin-left: 0;
    }

    button {
      width: 38vw;
    }
  }

  @media screen and (max-width: 650px) {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 450px) {
    display: block;
    margin-top: 0rem;

    button {
      width: 100%;
      margin-top: 1rem;
      font-size: 2vh;
    }
  }
`;

export default React.memo(MyWorks);
