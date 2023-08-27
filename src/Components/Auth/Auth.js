import React, { useContext, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Context from "../../Context";

function Auth() {
  const ctx = useContext(Context);
  const [isLogging, setLogging] = useState(true);
  function createHandler() {
    setLogging(!isLogging);
  }
  function loginHandler() {
    setLogging(!isLogging);
  }

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  function formSubmitHandler(e) {
    e.preventDefault();
    const email = inputEmailRef.current.value;
    const password = inputPasswordRef.current.value;
    if (isLogging) {
      ctx.logIn({ email: email, password: password });
    } else {
      ctx.signUp({ email: email, password: password });
    }
    e.target.reset();
  }
  return (
    <>
      <Container className="py-3 text-center" style={{ maxWidth: "400px" }}>
        <Form className="mx-auto" onSubmit={formSubmitHandler}>
          <FormGroup className=" text-bg-dark p-3 rounded">
            <div>
              <FormLabel>Email</FormLabel>
              <FormControl type="text" required ref={inputEmailRef} />
            </div>
            <div>
              <FormLabel>Password</FormLabel>
              <FormControl
                type="password"
                required
                minLength={6}
                ref={inputPasswordRef}
              />
            </div>
            <div className="mt-4">
              {isLogging && (
                <Button variant="light" type="submit" className=" fw-medium">
                  Log In
                </Button>
              )}
              {!isLogging && (
                <Button variant="light" type="submit" className=" fw-medium">
                  Sign Up
                </Button>
              )}
              <div className="mt-1">
                {isLogging && (
                  <span style={{ cursor: "pointer" }} onClick={createHandler}>
                    Create Account
                  </span>
                )}
                {!isLogging && (
                  <span style={{ cursor: "pointer" }} onClick={loginHandler}>
                    Log In
                  </span>
                )}
              </div>
            </div>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Auth;
