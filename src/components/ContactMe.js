import React, { useState, useEffect, Suspense } from "react";
import emailjs from "emailjs-com";

import styled from "styled-components";

const PhotoSnap = React.lazy(() => import("./PhotoSnap"));
const PhotoSnap2 = React.lazy(() => import("./PhotoSnap2"));
const Btn = React.lazy(() => import("../components/Btn"));

const ContactMe = ({ neonChanger }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      setState(false);
    }, 3000);
  }, [state]);

  function sendEmail(e) {
    e.preventDefault();
    setState(true);
    emailjs
      .sendForm(
        "service_dm5gi27",
        "template_pha2u19",
        e.target,
        "user_paGxtHujxdzAVDDYURxUg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <Container id="contact">
        <FormContainer>
          <h2>Contact Me</h2>
          <h4>
            Feel free to contact me by email - isekaiguy@protonmail.com or send
            me a message via this form:
          </h4>
          <Message
            style={
              !state
                ? { opacity: 0, marginTop: 0, display: "none" }
                : { opacity: 1, marginTop: "2rem", display: "block" }
            }
          >
            Message sent successfully!
          </Message>
          <ContactForm
            className="contact-form"
            onSubmit={sendEmail}
            style={state ? { opacity: 0 } : { opacity: 1 }}
          >
            <input type="hidden" name="contact_number" />
            <Input
              minLength="3"
              required
              type="text"
              name="user_name"
              id="user_name"
            />
            <InputLabel htmlFor="user_name">Name</InputLabel>

            <Input required type="email" name="user_email" id="user_email" />
            <InputLabel htmlFor="user_email">Email</InputLabel>

            <Input
              minLength="8"
              required
              type="text"
              name="message"
              id="message"
            ></Input>
            <InputLabel htmlFor="message">Message</InputLabel>
            <ButtonContainer>
              <Suspense fallback={<div>Loading...</div>}>
                <Btn type="submit" value="Send">
                  Send
                </Btn>
              </Suspense>
            </ButtonContainer>
          </ContactForm>
        </FormContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <PhotoSnap neonChanger={neonChanger} />
        </Suspense>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoSnap2 neonChanger={neonChanger} />
      </Suspense>
    </>
  );
};

const Container = styled.div`
  min-height: 40vh;
  display: flex;
  background-size: cover;
  position: relative;
  z-index: 10;
  padding: 20vh 1rem 2rem 10rem;

  @media screen and (max-width: 1300px) {
    padding: 20vh 1rem 5rem 8rem;
  }

  @media screen and (max-width: 1200px) {
    padding: 20vh 1rem 5rem 4rem;

    h2 {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    display: flex;
    text-align: center;
    padding: 0 5rem;
    margin-top: 13vh;

    h4 {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 800px) {
    margin-top: 8vh;
    h2 {
      padding-bottom: 3vh;
    }
  }

  @media screen and (max-width: 650px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: 5vh;
  }

  @media screen and (max-width: 500px) {
    margin-top: 0vh;
  }

  @media screen and (max-width: 400px) {
    h2 {
      font-size: 9vw;
      padding-bottom: 3vh;
    }

    h4 {
      font-size: 4vw;
    }
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media screen and (max-width: 800px) {
    margin-top: 2vh;
  }
`;

const InputLabel = styled.label`
  margin-top: 1rem;
  transform: translateY(-250%);
  cursor: text;
  width: fit-content;
  transition: ease 0.2s;
`;

const Input = styled.input`
  display: block;
  border-width: 0 0 2px 0;
  border-bottom: 3px solid red;
  outline: none;
  background: transparent;
  height: 1rem;
  font-size: 2rem;
  line-height: 2rem;
  height: 5vh;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  margin-top: 1rem;

  &:focus + ${InputLabel} {
    transform: translateY(-410%);
  }

  &:valid + ${InputLabel} {
    transform: translateY(-410%);
  }

  &:invalid + ${InputLabel} {
    color: red;
    text-shadow: 0.2px 0.2px gray;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: transparent inset !important;
  }

  @media screen and (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 5vh;
  align-self: flex-start;

  button {
    width: 120%;
  }

  @media screen and (max-width: 1300px) {
    margin-top: 0;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    width: 100%;

    button {
      justify-self: center;
      align-self: center;
      width: 50%;
    }
  }

  @media screen and (max-width: 500px) {
    button {
      font-size: 3vw;
    }
  }
`;

const Message = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;

export default ContactMe;
