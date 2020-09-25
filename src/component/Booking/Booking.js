import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { fakeDataContext } from "../../App";
import Login from "../Login/Login";
import "./Booking.css";
const Booking = () => {
  const { name } = useParams();
  const { fakeInfo } = useContext(fakeDataContext);
  console.log(fakeInfo);
  const singleData = fakeInfo.destinations.find(
    (destination) => destination.name === name
  );
  const history = useHistory();
  const handleButton = () => {
    history.push("/hotel");
  };
  return (
    <div className="header">
      <Container>
        <Row>
          <Col style={{ color: "white" }}>
            <h2>{name}</h2>

            <p style={{ textAlign: "justify" }}>{singleData.BigDiscription}</p>
          </Col>
          <Col>
            <Paper Component="div" style={{ padding: "10px" }}>
              <form>
                <Typography varient="caption" display="block">
                  Orgine
                </Typography>
                <br />
                <TextField
                  display="block"
                  id="filled-full-width"
                  fullWidth
                  // id="outlined-error"
                  label="Orgine"
                  variant="outlined"
                />
                <Typography varient="caption" display="block">
                  Destination
                </Typography>
                <br />
                <TextField
                  id="filled-full-width"
                  fullWidth
                  display="block"
                  // id="outlined-error"
                  label="Destination"
                  variant="outlined"
                  value={name}
                />
                <div style={{ display: "flex" }}>
                  <div style={{ marginLeft: "20px", padding: "10px 0" }}>
                    <Typography varient="caption" display="block">
                      From
                    </Typography>
                    <TextField
                      // display="block"
                      id="outlined-error"
                      variant="outlined"
                      type="date"
                    />
                  </div>
                  <div style={{ marginLeft: "20px", padding: "10px 0" }}>
                    <Typography varient="caption" display="block">
                      To
                    </Typography>
                    <TextField
                      // display="block"
                      id="outlined-error"
                      variant="outlined"
                      type="date"
                    />
                  </div>
                </div>
                <button
                  onClick={handleButton}
                  type="button"
                  class="btn btn-warning btn-lg btn-block"
                >
                  Start Booking
                </button>
                {/* <div className="d-flex justify-content-center">
                  <Button variant="contained" color="primary">
                    Start booking
                  </Button>
                </div> */}
              </form>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
