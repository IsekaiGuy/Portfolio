import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Btn = ({ children }) => {
  return <Button type="button">{children}</Button>;
};

const Button = styled(motion.button)`
  cursor: pointer;
  border-radius: 10px;
  background: none;
  border: 3px solid;
  font: inherit;
  line-height: 1;
  margin: 1em 1em 3px 0;
  padding: 0.8em 1.5em;
  font-size: 1.1rem;
  border-color: orangered;
  font-family: "Montserrat", sans-serif;
  text-shadow: 1px 1px black;
  font-weight: bold;
  filter: drop-shadow(2px 2px 2px navy);

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
`;

export default Btn;
