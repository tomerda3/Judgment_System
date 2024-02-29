import { useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import signUp from "../api/authentication/signUp";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

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

  const { mutate, isPending } = useMutation({
    mutationFn: (userData) => signUp(userData),
    onSuccess: () => {
      toast.success("נרשמת בהצלחה");
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <button type="submit" className={`btn btn-block `} disabled={isPending}>
          {isPending ? "נכנס.." : "הרשם"}
        </button>{" "}
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
