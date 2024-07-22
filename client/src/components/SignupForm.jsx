// import { useState } from "react";
// import { Form, Button, Alert } from "react-bootstrap";
// import { useMutation } from "@apollo/client";
// // import { LOGIN_USER } from "../graphql/mutations"; WE MUST CREATE QUERIES AND MUTATIONS
// import Auth from "../utils/auth";

// const SignupForm = () => {
//   const [userFormData, setUserFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [addUser, { error }] = useMutation(ADD_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await addUser({
//         variables: { ...userFormData },
//       });

//       Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error("Error:", err);
//       setShowAlert(true);
//     }

//     setUserFormData({
//       username: "",
//       email: "",
//       password: "",
//     });
//   };

// export default SignupForm;
