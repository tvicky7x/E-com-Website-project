import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { json, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  function storeBtn() {
    navigate("/products");
  }
  function about() {
    navigate("/about");
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      setData(null);
      try {
        const response = await axios.get("https://reqres.in/api/unknown");
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    })();
  }, []);

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
        <Button variant="dark" size="sm">
          API Call Button
        </Button>
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
        {!isLoading && !error && data && (
          <div className=" d-flex gap-2 justify-content-center">
            {data.map((item) => {
              return <p style={{ color: `${item.color}` }}>{item.name}</p>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
