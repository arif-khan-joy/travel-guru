import React, { useContext } from "react";
import { Link, Router } from "react-router-dom";
import "./Header.css";
import logo from "../../images/./Logo.png";
import Card from "../Card/Card";
import { fakeDataContext } from "../../App";
import SearchIcon from "@material-ui/icons/Search";
const Header = () => {
  const { loggedInUser, setLoggedInUser } = useContext(fakeDataContext);
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>

          <li>
            <input type="search" name="search" placeholder="Search" />
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li style={{ border: "1 px solid gray", color: "black" }}></li>
          <li>
            {loggedInUser.email ? (
              <button>Logg Out</button>
            ) : (
              <button>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
