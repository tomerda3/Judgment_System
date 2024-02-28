import { useState } from "react";
import { Link, Form } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";
import login from "../api/authentication/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
      console.log("logeed in");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <Wrapper>
      <Form className="form" onSubmit={handleSubmit}>
        <h4>התחבר</h4>
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
        <SubmitBtn />
        <p>
          עדיין לא רשום למערכת?{" "}
          <Link to="/register" className="member-btn">
            הרשם
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
