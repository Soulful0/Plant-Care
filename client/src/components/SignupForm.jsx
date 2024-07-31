import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [signup, { error }] = useMutation(SIGNUP_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
      console.log("Signup successful:", data);
      Auth.login(data.signup.token);
    } catch (err) {
      console.error("Signup error details:", err);
      setShowAlert(true);
    }
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form noValidate onSubmit={handleFormSubmit}>
        {showAlert && (
          <div className="notification is-danger is-light">
            <button
              className="delete"
              onClick={() => setShowAlert(false)}
            ></button>
            Something went wrong with your signup!
          </div>
        )}
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={formState.username}
              required
            />
          </div>
          <p className="help is-danger">Username is required!</p>
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <div className="control">
            <input
              className="input"
              type="email"
              placeholder="Your email address"
              name="email"
              onChange={handleInputChange}
              value={formState.email}
              required
            />
          </div>
          <p className="help is-danger">Email is required!</p>
        </div>
        <div className="field">
          <label className="label" htmlFor="password">
            Password
          </label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={formState.password}
              required
            />
          </div>
          <p className="help is-danger">Password is required!</p>
        </div>
        <div className="field">
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              disabled={
                !(formState.username && formState.email && formState.password)
              }
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
