import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../App.css"; // Import the App.css where Bulma is included

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("signup");

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSignUpClick = () => {
    setModalContent("signup");
    setShowModal(true);
  };

  const handleLogInClick = () => {
    setModalContent("login");
    setShowModal(true);
  };

  return (
    <>
      <nav
        className="navbar p-3"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/saved">
                  Saved Guides
                </Link>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://perenual.com">
                  Perenual
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" onClick={handleSignUpClick}>
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" onClick={handleLogInClick}>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {showModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={handleModalClose}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                {modalContent === "signup" ? "Sign Up" : "Log In"}
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={handleModalClose}
              ></button>
            </header>
            <section className="modal-card-body">
              {modalContent === "signup" ? (
                <SignupForm handleModalClose={handleModalClose} />
              ) : (
                <LoginForm handleModalClose={handleModalClose} />
              )}
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
