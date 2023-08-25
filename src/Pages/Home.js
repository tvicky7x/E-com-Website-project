import axios from "axios";
import React, { useState } from "react";
import { useRef } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const inputRef = useRef();
  const colorRef = useRef();

  const [data, setData] = useState([]);

  function storeBtn() {
    navigate("/products");
  }
  function about() {
    navigate("/about");
  }

  async function sendData(e) {
    e.preventDefault();

    try {
      await axios.post(
        "https://first-test-f63cf-default-rtdb.asia-southeast1.firebasedatabase.app/user.json",
        { name: inputRef.current.value, color: colorRef.current.value }
      );
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  }

  async function getData() {
    try {
      const response = await axios.get(
        "https://first-test-f63cf-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
      );
      const newData = [];
      for (let key in response.data) {
        newData.push({
          id: key,
          name: response.data[key].name,
          color: response.data[key].color,
        });
      }
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteData(id) {
    try {
      await axios.delete(
        `https://first-test-f63cf-default-rtdb.asia-southeast1.firebasedatabase.app/user/${id}.json`
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container className="pt-3 pb-5">
        <h2 className="text-dark text-center mb-3">Latest Tour</h2>
        <Row className="gap-4">
          <Col>
            <img
              src="https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/11/18074455/043-eff2016_0623_182213-9566_jsl.jpg"
              alt=""
              className="w-100 rounded shadow"
            />
          </Col>
          <Col md={true} className="d-flex align-items-center">
            <div>
              <h3>Electric Forest</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pulvinar lectus in lacinia scelerisque. Cras maximus magna eros,
                quis sodales massa interdum ut. Mauris rhoncus nunc eu elit
                mattis aliquet. Mauris gravida interdum ex ac efficitur. Nullam
                molestie leo leo, ac euismod sem suscipit non. Nunc et elit nec
                quam
              </p>
              <Button variant="outline-dark" size="sm" onClick={about}>
                About Us
              </Button>{" "}
              <Button variant="dark" size="sm" onClick={storeBtn}>
                Store
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-2">
        <Button variant="dark" size="sm" onClick={getData}>
          Get Names
        </Button>
        <Form onSubmit={sendData}>
          <div className="d-flex justify-content-center gap-3 p-2">
            <Form.Control
              ref={inputRef}
              type="text"
              size="sm"
              style={{ width: "200px" }}
            ></Form.Control>
            <FormControl type="color" ref={colorRef}></FormControl>
            <Button variant="dark" size="sm" type="submit">
              Add Name
            </Button>
          </div>
        </Form>

        <div className=" d-flex gap-2 justify-content-center">
          {data.map((item) => {
            return (
              <p
                className="p-2 rounded text-white"
                style={{ backgroundColor: `${item.color}` }}
                key={item.id}
              >
                {item.name}
                <Button
                  variant="none"
                  size="sm"
                  onClick={() => {
                    deleteData(item.id);
                  }}
                >
                  X
                </Button>
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
