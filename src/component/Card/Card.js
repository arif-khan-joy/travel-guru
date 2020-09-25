import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { fakeDataContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Card.css";
import { Col, Row } from "react-bootstrap";
const Card = () => {
  const { fakeInfo } = useContext(fakeDataContext);
  console.log(fakeInfo);
  return (
    <div className="main-div">
      <Row>
        <Col className="left-side">
          <h1>COX'S BAZAR</h1>
          <p>
            natural sea beach in the world running 150 kilometres. However it is
            second longest after Ninety Mile Beach in Australia. It is the top
            tourist destination of Bangladesh.It is very healthy beach and…
          </p>
        </Col>
        <Col
          className="right-side"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          {fakeInfo.destinations.map((destination) => (
            <Link to={`/destination/${destination.name}`}>
              <img
                src={destination.img}
                alt=""
                className="common"
                style={{ marginBottom: "15px" }}
              />
              <h4 style={{ color: "white" }}>{destination.name}</h4>
              <button
                style={{
                  backgroundColor: "goldenrod",
                  padding: "5px 10px",
                  borderRadius: "20px",
                }}
              >
                Booking <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          ))}
          {/* <div className="image1 common" >
            <h3>COX'S BAZAR</h3>
        </div>
        <div className="image2 common">
            <h3>SREEMONGOL</h3>
        </div>
        <div className="image3 common">
            <h3>SUNDORBON</h3>
        </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default Card;
