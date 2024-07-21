import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";
import "../App.css"; // Import the App.css where Bulma is included

const AppNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            Plant Care Guide Search
          </Link>
          <button
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setShowModal(!showModal)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link className="navbar-item" to="/">
              Search For Guides
            </Link>
            {Auth.loggedIn() ? (
              <>
                <Link className="navbar-item" to="/saved">
                  See Your Guides
                </Link>
                <a className="navbar-item" href="/" onClick={Auth.logout}>
                  Logout
                </a>
              </>
            ) : (
              <a
                className="navbar-item"
                href="#"
                onClick={() => setShowModal(true)}
              >
                Login/Sign Up
              </a>
            )}
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="modal is-active">
          <div
            className="modal-background"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="modal-content">
            <div className="box">
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowModal(false)}
              ></button>
              <div className="tabs is-toggle is-fullwidth">
                <ul>
                  <li className={showModal === "login" ? "is-active" : ""}>
                    <a onClick={() => setShowModal("login")}>Login</a>
                  </li>
                  <li className={showModal === "signup" ? "is-active" : ""}>
                    <a onClick={() => setShowModal("signup")}>Sign Up</a>
                  </li>
                </ul>
              </div>
              {showModal === "login" && (
                <LoginForm handleModalClose={() => setShowModal(false)} />
              )}
              {showModal === "signup" && (
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              )}
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </>
  );
};

export default AppNavbar;
