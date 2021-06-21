import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <Container>
      <Bg>
        <Heading>Who am I?</Heading>
        <MiddleText>
          <p>
            I am a web developer and React enthusiast from the cold plains of
            Siberia. I learned everything myself, step by step, to offer you the
            best practices and modern coding techniques. Never stops learning
            new frameworks and libraries, creating new applications and
            websites, taking a break only to spend a little time on my hobby -
            motion design.
          </p>
        </MiddleText>
        <Grid>
          <LeftText>
            <p>
              In development, I usually use React with Redux or plain JS. Want
              some style? I can use CSS, SCSS, styled-components, Bootstrap,
              Material-UI to make your website look great. Looking for cool
              animations? I can add different amazing animations using Framer
              Motion and / or parallaxJS. Need help with deploying and styling
              your CMS? Wordpress, Joomla and even Magento won't give me any
              problems.
            </p>
          </LeftText>
          <RightText>
            <p>
              I am comfortable working with many Adobe products such as
              Photoshop, Illustrator, After Effects or Xd. And I'm not limited
              to them: Gimp or Figma are also very good applications that I have
              worked with. Scroll down to see my projects, or go to the end and
              feel free to write me a message!
            </p>
          </RightText>
        </Grid>
      </Bg>
    </Container>
  );
};

const Container = styled(motion.div)`
  min-height: 90vh;
  text-align: center;
  background-size: cover;
  z-index: 10;
  position: relative;
  margin-top: 5rem;
  width: 100vw;

  background-image: radial-gradient(black 0.7px, transparent 0);
  background-size: 5px 5px;
  background-position: -7px -7px;
  z-index: 10;
  box-sizing: border-box;
  clip-path: polygon(0 0, 100% 12%, 100% 100%, 0 88%);

  p {
    color: lightgray;
    font-size: 1.3rem;
    text-shadow: 1.5px 1.5px black;
    line-height: 1.5;
    text-indent: 1em;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 0rem;
  }

  @media screen and (max-width: 850px) {
    clip-path: none;
    margin-top: 5rem;

    p {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 700px) {
    background-image: none;
    margin-top: 5rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: 2rem;
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: 1rem;
    }
    margin-top: 0;
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 0.9rem;
    }
  }
`;

const Heading = styled(motion.h2)`
  font-size: 3rem;
  margin-bottom: 4rem;
  z-index: 4;
  padding-top: 1.5rem;

  @media screen and (max-width: 800px) {
    margin-bottom: 1.4rem;
    font-size: 6vh;
  }

  @media screen and (max-width: 500px) {
    font-size: 2.4rem;
    padding-top: 3rem;
    padding-bottom: 5vh;
    margin: 0;
    margin-top: 0rem;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 2;
  text-align: initial;
  margin-top: 2rem;

  @media screen and (max-width: 1000px) {
    margin: 0;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;

const MiddleText = styled(motion.div)`
  margin: 0 13rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  text-align: initial;

  @media screen and (max-width: 1100px) {
    margin: 0 5rem;
  }

  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 4% 8%;
  }

  @media screen and (max-width: 400px) {
    padding: 6%;
  }
`;

const LeftText = styled(motion.div)`
  grid-column: 1 / 2;
  margin: 0 2rem 0 13rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;

  @media screen and (max-width: 1100px) {
    margin: 3rem 2rem 0 5rem;
  }

  @media screen and (max-width: 900px) {
    margin: 3rem 5rem 0 5rem;
  }

  @media screen and (max-width: 700px) {
    margin: 0 0 0 0;
    padding: 4% 8%;
  }

  @media screen and (max-width: 400px) {
    padding: 6%;
  }
`;

const RightText = styled(motion.div)`
  grid-column: 2 / 3;
  margin: 0 13rem 0 2rem;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;

  @media screen and (max-width: 1100px) {
    margin: 3rem 5rem 0 2rem;
  }

  @media screen and (max-width: 900px) {
    margin: 3rem 5rem 0 5rem;
  }

  @media screen and (max-width: 700px) {
    margin: 0 0 0 0;
    padding: 4% 8%;
  }

  @media screen and (max-width: 400px) {
    padding: 6%;
  }
`;

const Bg = styled(motion.div)`
  background-image: linear-gradient(
    to right bottom,
    rgba(232, 232, 232, 0.7),
    rgba(232, 232, 232, 0.7)
  );
  clip-path: polygon(0 0, 100% 12%, 100% 100%, 0 88%);
  padding: 8rem 0 14rem 0;
  z-index: 8;

  @media screen and (max-width: 850px) {
    clip-path: none;
    padding: 2rem 0 4rem 0;
  }

  @media screen and (max-width: 700px) {
    background-image: none;
  }

  @media screen and (max-width: 600px) {
    padding-top: 0;
  }
`;

export default AboutMe;
