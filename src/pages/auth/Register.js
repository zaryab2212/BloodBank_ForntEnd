import React from "react";
import Form from "../../components/shared/form/Form";

const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-banner">
          <img src="/images/banner2.jpg" alt="Login Img"></img>
        </div>
        <div className="col-md-4 ">
          <Form
            formtitle={"Register Page"}
            submitbtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
