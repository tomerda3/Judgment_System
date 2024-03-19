import { useContext, useState } from "react";
import { Link, Form, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { UserContext } from "../context/UserContext";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import login from "../api/authentication/login";

const Judgments = () => {
  const navigate = useNavigate();
  const auth = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: (user) => {
      auth.login(user.data.user, user.token);

      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });


  return (
    <Wrapper>
     

    </Wrapper>
  );
};
export default Judgments;
