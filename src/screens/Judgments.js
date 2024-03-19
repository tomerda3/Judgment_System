import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

const Judgments = () => {
  const navigate = useNavigate();
  const auth = useContext(UserContext);

  return <Wrapper></Wrapper>;
};
export default Judgments;
