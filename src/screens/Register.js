import React, { useState } from "react";
import { Link, Form } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import signUp from "../api/authentication/signUp";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const userData = {
    firstName,
    lastName,
    email,
    password,
    passwordConfirm,
  };

  const { mutate } = useMutation({
    mutationFn: (userData) => signUp(userData),
    onSuccess: () => {
      console.log("regiterd");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    mutate(userData);
  };

  return (
    <Wrapper>
      <Form method="post" className="form" onSubmit={handleSubmit}>
        <h4>הרשמה</h4>
        <FormRow
          type="text"
          name="firstName"
          labelText="שם פרטי"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="שם משפחה"
          onChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          type="email"
          name="email"
          labelText="אימייל"
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          type="password"
          name="password"
          labelText="סיסמה"
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormRow
          type="password"
          name="passwordConfirm"
          labelText="אשר סיסמה"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <SubmitBtn />
        <p>
          רשום למערכת?{" "}
          <Link to="/login" className="member-btn">
            התחבר
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
