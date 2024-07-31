import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../App.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("signup");
  const [isActive, setIsActive] = useState(false); // State to manage hamburger menu
  const navigate = useNavigate();

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

  const handleLogOut = () => {
    Auth.logout();
    navigate("/");
  };

  const handleSavedGuidesClick = () => {
    if (!Auth.loggedIn()) {
      alert("Please log in to view your saved guides.");
      navigate("/login");
      return;
    }
    navigate("/saved-guides");
  };

  const toggleHamburger = () => {
    setIsActive(!isActive);
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
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleHamburger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link
              className="navbar-item is-flex is-justify-content-flex-end"
              to="/"
            >
              Home
            </Link>
            <a
              className="navbar-item is-flex is-justify-content-flex-end"
              onClick={handleSavedGuidesClick}
            >
              Saved Guides
            </a>
            <Link
              className="navbar-item is-flex is-justify-content-flex-end"
              to="/donate"
            >
              Donate
            </Link>
            <a
              className="navbar-item is-flex is-justify-content-flex-end"
              href="https://perenual.com"
            >
              Perenual
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-justify-content-flex-end">
                {Auth.loggedIn() ? (
                  <a className="button is-light" onClick={handleLogOut}>
                    Log Out
                  </a>
                ) : (
                  <>
                    <a
                      className="button is-primary"
                      onClick={handleSignUpClick}
                    >
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" onClick={handleLogInClick}>
                      Log in
                    </a>
                  </>
                )}
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
