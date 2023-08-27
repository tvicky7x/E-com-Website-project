import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeLayout from "../Components/Home/HomeLayout";

function Home() {
  return (
    <>
      <HomeLayout />
    </>
  );
}

export default Home;
