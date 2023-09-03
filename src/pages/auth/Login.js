import React from "react";
import Form from "../../components/shared/form/Form";

const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
