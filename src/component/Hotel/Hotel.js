import { Container } from "@material-ui/core";
import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { fakeDataContext } from "../../App";
import rat from "../../images/Icon/star_1_.png";
import map from "../../images/Image/map3.jpg";
const Hotel = () => {
  const { fakeInfo } = useContext(fakeDataContext);
  console.log(fakeInfo);

  return (
    <div>
      <Container>
        <hr />
        <p style={{ marginLeft: "30px" }}>252 stays April 13-17 guests</p>
        <h3 style={{ marginLeft: "30px" }}>Stay in Cox's Bazar</h3>

        <Row>
          <Col>
            {fakeInfo.hotels.map((pd) => (
              <div style={{ display: "flex" }}>
                <div style={{ marginLeft: "35px" }}>
                  <img
                    style={{
                      width: "200px",
                      height: "120px",
                      margin: "10px 0",
                    }}
                    src={pd.img}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    marginLeft: "30px",
                    fontSize: "12px",
                    lineHeight: "6px",
                    height: "120px",
                  }}
                >
                  <h6>{pd.name}</h6>
                  <p>
                    {pd.guests} Gest {pd.bedrooms} bedrooms {pd.beds} beds{" "}
                    {pd.bath} bath
                  </p>
                  <p>Well air Condisional Kitchen</p>
                  <p>All services available</p>
                  <img style={{ width: "15px" }} src={rat} alt="" />

                  <span>
                    {pd.rateing} ${pd.total}
                  </span>
                </div>
              </div>
            ))}
          </Col>
          <Col>
            <img
              style={{ width: "300px", marginLeft: "20px" }}
              src={map}
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hotel;
