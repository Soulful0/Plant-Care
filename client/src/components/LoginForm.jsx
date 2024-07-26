import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations"; // Make sure to uncomment this
import Auth from "../utils/auth";

const LoginForm = ({ handleModalClose }) => {
  // State to hold user input for email and password
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });

  // State to handle showing and hiding of error alerts
  const [showAlert, setShowAlert] = useState(false);

  // Mutation hook for logging in the user
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  // Handle changes in the form input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  // Handle form submission, including logging in the user
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      // Execute login mutation with form data
      const { data } = await loginUser({
        variables: { ...userFormData },
      });

      // On successful login, store the token and close the modal
      Auth.login(data.login.token);
      handleModalClose();
    } catch (err) {
      // Log error and show alert if login fails
      console.error("Error:", err);
      setShowAlert(true);
    }

    // Clear form fields after submission
    setUserFormData({
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
            Something went wrong with your login!
          </div>
        )}
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
              value={userFormData.email}
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
              value={userFormData.password}
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
              disabled={!(userFormData.email && userFormData.password)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
