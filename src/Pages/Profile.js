import axios from "axios";
import React, { useContext, useRef } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import Context from "../Context";

function Profile() {
  const changePasswordRef = useRef();
  const ctx = useContext(Context);

  async function changePassword(e) {
    e.preventDefault();
    const password = changePasswordRef.current.value;
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLKmMRL800SGHidB6TAoC9jXvKuu24adw",
        {
          idToken: ctx.token,
          password: password,
          returnSecureToken: true,
        }
      );
      ctx.changeToken(response.data.idToken);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <Container className="text-center py-3">
        <h2 className="mb-4 mt-2">Profile</h2>
        <Form
          className="mx-auto"
          style={{ maxWidth: "400px" }}
          onSubmit={changePassword}
        >
          <FormGroup>
            <div>
              <FormLabel>Change Password</FormLabel>
              <FormControl type="password" ref={changePasswordRef} />
            </div>
            <Button variant="dark mt-3" type="submit">
              Change Password
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Profile;
