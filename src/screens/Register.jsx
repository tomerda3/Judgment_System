import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
import SubmitBtn from "../components/SubmitBtn";

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4>הרשמה</h4>
        <FormRow type="text" name="שם פרטי" />
        <FormRow type="text" name="שם משפחה" labelText="שם משפחה" />
        <FormRow type="email" name="אימייל" />
        <FormRow type="password" name="סיסמה" />
        <FormRow type="passwordConfirm" name="אשר סיסמה" />
        <SubmitBtn />
        <p>
          רשום למערכת?
          <Link to="/login" className="member-btn">
            התחבר
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
