import React from "react";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span> {alert(error)} </span>}
      {loading ? (
        <Loader />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="/images/banner1.jpg" alt="Login Img"></img>
          </div>
          <div className="col-md-4 ">
            <Form
              formtitle={"Login Page"}
              submitbtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
