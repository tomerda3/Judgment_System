import { Link, Form, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";

const Login = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>התחבר</h4>
        <FormRow type="email" name="אימייל" />
        <FormRow type="password" name="סיסמה" />
        <SubmitBtn />
        <p>
          עדיין לא רשום למערכת?
          <Link to="/register" className="member-btn">
            הרשם
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
