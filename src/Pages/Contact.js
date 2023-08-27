import axios from "axios";
import React, { useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  async function submitHandler(e) {
    e.preventDefault();
    try {
      await axios.post(
        "https://first-test-f63cf-default-rtdb.asia-southeast1.firebasedatabase.app/form.json",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          phone: phoneRef.current.value,
        }
      );
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  }

  return (
    <>
      <Container style={{ maxWidth: "500px" }}>
        <Form onSubmit={submitHandler}>
          <FormGroup className="p-3 bg-dark text-light my-3 rounded">
            <div>
              <FormLabel>Name</FormLabel>
              <FormControl type="text" ref={nameRef} required />
            </div>
            <div>
              <FormLabel>Email</FormLabel>
              <FormControl type="email" ref={emailRef} required />
            </div>
            <div>
              <FormLabel>Phone</FormLabel>
              <FormControl type="number" ref={phoneRef} required />
            </div>
            <div className=" text-center mt-3">
              <Button
                variant="light"
                size="sm"
                type="submit"
                className="fw-semibold px-3"
              >
                Contact Us
              </Button>
            </div>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Contact;
