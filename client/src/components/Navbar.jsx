import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../App.css";
import navbarpic from '../assets/navbarpic.jpg';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("signup");
  const [isActive, setIsActive] = useState(false);
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

  const hoverStyle = {
    backgroundColor: '#85c88a',
    color: 'white',
  };

  const hamburgerStyle = {
    color: 'white',
  };

  const mobileMenuStyle = {
    backgroundColor: isActive ? 'transparent' : '', 
  };

  return (
    <>
      <nav
        className="navbar p-3"
        role="navigation"
        aria-label="main navigation"
        style={{
          backgroundImage: `url(${navbarpic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="navbar-brand">
          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleHamburger}
            style={hamburgerStyle}
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
          style={mobileMenuStyle}
        >
          <div className="navbar-start">
            <Link
              className="navbar-item is-flex is-justify-content-flex-end has-text-white"
              to="/"
              style={{ transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              Home
            </Link>
            <a
              className="navbar-item is-flex is-justify-content-flex-end has-text-white"
              onClick={handleSavedGuidesClick}
              style={{ transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              Saved Guides
            </a>
            <Link
              className="navbar-item is-flex is-justify-content-flex-end has-text-white"
              to="/donate"
              style={{ transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              Donate
            </Link>
            <a
              className="navbar-item is-flex is-justify-content-flex-end has-text-white"
              href="https://perenual.com"
              style={{ transition: 'background-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              Perenual
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons is-justify-content-flex-end">
                {Auth.loggedIn() ? (
                  <a className="button" onClick={handleLogOut} style={hoverStyle}>
                    Log Out
                  </a>
                ) : (
                  <>
                    <a
                      className="button"
                      onClick={handleSignUpClick}
                      style={{
                        backgroundColor: '#85c88a',
                        color: 'white',
                      }}
                    >
                      <strong>Sign up</strong>
                    </a>
                    <a
                      className="button is-light"
                      onClick={handleLogInClick}
                      style={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                      }}
                    >
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
