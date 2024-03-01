import { useContext, useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { UserContext } from "../context/UserContext";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import login from "../api/authentication/login";

const Login = () => {
  const navigate = useNavigate();
  const auth = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      auth.login(user.data.user, user.token);
      toast(`ברוך הבא ${user.data.user.firstName} ${user.data.user.lastName}`, {
        icon: "👏",
      });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
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
        <button type="submit" className={`btn btn-block `} disabled={isPending}>
          {isPending ? "נכנס.." : "התחבר"}
        </button>
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
