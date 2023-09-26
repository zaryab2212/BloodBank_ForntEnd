import React from "react";
import Form from "../../components/shared/form/Form";
import { useSelector } from "react-redux";
import Loader from "../../components/shared/Loader";
import { toast } from "react-toastify";

const Register = () => {
  const { error, loading } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span> {toast.error(error)}</span>}
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Register;
