import { useState } from "react";
import { useMutation } from "@apollo/client";
// import { LOGIN_USER } from "../graphql/mutations";
import Auth from "../utils/auth";

const LoginForm = ({ handleModalClose }) => {
  const [userFormData, setUserFormData] = useState({
    email: "",
    password: "",
  });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Mock data to simulate the mutation call
      // const { data } = await loginUser({
      //   variables: { ...userFormData },
      // });
      const data = { loginUser: { token: "fakeToken" } }; // Replace this with real mutation call
      Auth.login(data.loginUser.token);
      handleModalClose();
    } catch (err) {
      console.error("Error:", err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
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
