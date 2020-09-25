import React from "react";
import header from "../../images/Image/Rectangle 1.png";
import "./Home.css";

import Header from "../Header/Header";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div styles={{ backgroundImage: `url(${header})` }} className="header">
      <br />
      <br />
      <Card></Card>
    </div>
  );
};

export default Home;
