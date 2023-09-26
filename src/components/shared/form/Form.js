import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import {
  handleLogin,
  handleRegister,
} from "../../../services/authFunc/AuthFunc";

const Form = ({ formType, submitbtn, formtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [website, setwebsite] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("donor");
  const [name, setname] = useState("");
  const [organizationName, setorganizationName] = useState("");
  const [hospitalName, sethospitalName] = useState("");

  return (
    <>
      {/* {console.log("state test", role, email, password)} */}
      <form
        onSubmit={(e) => {
          formType !== "login"
            ? handleRegister(
                e,
                email,
                address,
                password,
                website,
                phone,
                role,
                name,
                organizationName,
                hospitalName
              )
            : handleLogin(e, role, email, password);
          // console.log("login", role, email, password);
        }}
        className="login-form m-auto"
      >
        <h1 className="text-center">{formtitle}</h1>
        <hr />
        <div className="d-flex ">
          <div className="form-check d-flex">
            <input
              type="radio"
              name="role"
              id="donorRadio"
              value={role}
              onChange={(e) => setrole(e.target.value)}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="donorRadio">
              Donor
            </label>
          </div>
          <div className="form-check  d-flex ">
            <input
              type="radio"
              name="role"
              id="adminRadio"
              value={"admin"}
              onChange={(e) => setrole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="adminRadio">
              Admin
            </label>
          </div>
          <div className="form-check  d-flex">
            <input
              type="radio"
              name="role"
              id="organizationRadio"
              value={"organization"}
              onChange={(e) => setrole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="organizationRadio">
              Organization
            </label>
          </div>
          <div className="form-check d-flex">
            <input
              type="radio"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setrole(e.target.value)}
            />
            <label className="form-check-label" htmlFor="hospitalRadio">
              Hospital
            </label>
          </div>
        </div>

        <InputType
          name={"email"}
          labelText={"Email"}
          labelfor={"forEmail"}
          value={email}
          inputType={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputType
          name={"password"}
          labelText={"Password"}
          labelfor={"forPassword"}
          value={password}
          inputType={"password"}
          onChange={(e) => setpassword(e.target.value)}
        />

        {formType === "Login" ||
          (formType === "register" && (
            <>
              {console.log(role)}{" "}
              {role !== "admin" ||
                ("donor" && (
                  <InputType
                    name={"name"}
                    labelText={"Name"}
                    labelfor={"name"}
                    value={name}
                    inputType={"text"}
                    onChange={(e) => setname(e.target.value)}
                  />
                ))}
              {role === "organization" && (
                <InputType
                  name={"organizationName"}
                  labelText={"Organization Name"}
                  labelfor={"fororganizationName"}
                  value={organizationName}
                  inputType={"text"}
                  onChange={(e) => setorganizationName(e.target.value)}
                />
              )}
              {role === "hospital" && (
                <InputType
                  name={"hospitalName"}
                  labelText={"Hospital Name"}
                  labelfor={"forhospitalName"}
                  value={hospitalName}
                  inputType={"text"}
                  onChange={(e) => sethospitalName(e.target.value)}
                />
              )}
              <InputType
                name={"website"}
                labelText={"website"}
                labelfor={"forwebsite"}
                value={website}
                inputType={"text"}
                onChange={(e) => setwebsite(e.target.value)}
              />
              <InputType
                name={"address"}
                labelText={"address"}
                labelfor={"foraddress"}
                value={address}
                inputType={"text"}
                onChange={(e) => setaddress(e.target.value)}
              />
              <InputType
                name={"phone"}
                labelText={"phone"}
                labelfor={"forphone"}
                value={phone}
                inputType={"number"}
                onChange={(e) => setphone(e.target.value)}
              />
              <InputType
                name={"role"}
                labelText={"role"}
                labelfor={"forrole"}
                value={role}
                inputType={"text"}
                onChange={(e) => setrole(e.target.value)}
              />
            </>
          ))}
        <div className="d-flex justify-content-between">
          {formType === "login" ? (
            <p>
              Not Register yet? SignUp <Link to="/auth/register">Sign Up</Link>{" "}
            </p>
          ) : (
            <p>
              Already have an account?
              <Link to="/auth/login"> Login</Link>
            </p>
          )}

          <button className="btn btn-primary" type="submit">
            {submitbtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
