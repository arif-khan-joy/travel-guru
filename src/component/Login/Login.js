import React, { useContext, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { fakeDataContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles, TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";
import logo from "../../images/Icon/fb.png";
import logo1 from "../../images/Icon/google.png";

firebase.initializeApp(firebaseConfig);
const Login = (props) => {
  const [newUser, setNewUser] = useState(false);

  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });

  const { loggedInUser, setLoggedInUser } = useContext(fakeDataContext);
  const history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        const { displayName, email, photoURL } = result.user;

        const signedInUser = {
          isSignIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        console.log(displayName, email, photoURL);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };
  const signOut = () => {
    firebase
      .auth()
      .signOut()

      .then((res) => {
        const user = {
          isSignIn: false,
          name: "",
          email: "",
          photo: "",
          error: "",
          success: false,
        };
        setUser(user);
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  const fbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        setUser(user);
        setLoggedInUser(user);
        history.replace(from);
        console.log(user);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const handleChange = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
    console.log(e.target.name, e.target.value);
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);

          updateUserName(user.name);
        })
        .catch(function (error) {
          // Handle Errors here.
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;

          setUser(newUserInfo);

          // ...
        });
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          console.log(res);
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log(setLoggedInUser);
        })
        .catch(function (error) {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
      .then(function () {
        console.log("User name update successfully");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      {/* {user.isSignIn ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={googleSignIn}>Sign In</button>
      )} */}
      <br />
      {/* <button onClick={fbSignIn}>Facebook</button> */}
      <br />
      {/* {user.isSignIn && (
        <div>
          <p>Welcome{user.name}</p>
          <p>{user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )} */}
      {/* <h1>Our own Athentication</h1>
      <input
        type="checkbox"
        name="newUser"
        id=""
        onChange={() => setNewUser(!newUser)}
      />
      <label htmlFor="newUser">New User Sign up</label>
      <form onSubmit={handleSubmit}> */}
      {/* {newUser && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            onBlur={handleChange}
          />
        )} */}
      <br />
      {/* <input
        type="text"
        name="email"
        placeholder="Your email"
        required
        onBlur={handleChange}
      /> */}
      <br />
      {
        // <input
        //   onBlur={handleChange}
        //   type="password"
        //   name="password"
        //   id=""
        //   required
        // />
      }
      {/* <br />
      // <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
      // {/* </form> */}
      {/* // {/* <p style={{ color: "red" }}>{user.error}</p> */}
      {/* // {user.success && ( */}
      {/* //   <p style={{ color: "green" }}> */}
      {/* // //     User {newUser ? "created" : "Logged In"} success */}
      {/* // //   </p> */}
      {/* // // )} */}
      <div
        style={{
          width: "300px",
          margin: "auto",
          border: "1px solid gray",
        }}
      >
        <h5 style={{ marginTop: "40px" }}>Create an account</h5>

        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              onBlur={handleChange}
              style={{ border: "none", borderBottom: "1px solid gray" }}
            />
          )}
          <br />
          <br />
          <input
            type="text"
            name="email"
            placeholder="Your email"
            required
            onBlur={handleChange}
            style={{ border: "none", borderBottom: "1px solid gray" }}
          />
          <br />
          <br />
          <input
            onBlur={handleChange}
            type="password"
            name="password"
            placeholder="Password"
            id=""
            required
            style={{ border: "none", borderBottom: "1px solid gray" }}
          />
          <br />
          <br />
          <input
            type="checkbox"
            name="newUser"
            id=""
            onChange={() => setNewUser(!newUser)}
          />
          <label style={{ marginRight: "3px" }} htmlFor="newUser">
            {" "}
            New User Sign up
          </label>
          <br />
          <br />
          <input
            className="btn btn-warning"
            style={{ width: "200px" }}
            type="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />
          <br />
          <br />
        </form>

        <br />
        <br />
      </div>
      <p style={{ color: "red" }}>{user.error}</p>
      {user.success && (
        <p style={{ color: "green" }}>
          User {newUser ? "created" : "Logged In"} success
        </p>
      )}
      <br />
      <button
        onClick={fbSignIn}
        style={{
          width: "250px",
          border: "1px solid gray",
          padding: "5px",
          borderRadius: "20px",
        }}
      >
        <img style={{ width: "20px", marginRight: "10px" }} src={logo} alt="" />
        Continue with facebook
      </button>
      <br />
      <br />
      <button
        onClick={googleSignIn}
        style={{
          width: "250px",
          border: "1px solid gray",
          padding: "5px",
          borderRadius: "20px",
          marginBottom: "50px",
        }}
      >
        {" "}
        <img
          style={{ width: "20px", marginRight: "10px" }}
          src={logo1}
          alt=""
        />{" "}
        Continue with google
      </button>{" "}
    </div>
  );
};

export default Login;
