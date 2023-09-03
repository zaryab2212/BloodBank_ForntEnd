import React, { useState } from "react";
import InputType from "./InputType";

const Form = ({ formType, submitbtn, formtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [website, setwebsite] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [role, setrole] = useState("user");
  const [name, setname] = useState("");
  const [organizationName, setorganizationName] = useState("");
  const [hospitalName, sethospitalName] = useState("");
  return (
    <>
      <form className="login-form  mx-auto">
        <h1 className="text-center">{formtitle}</h1>
        <hr />
        {/* <div className="d-flex">
          <div className="form-check mx-2">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="user"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="user">
              Donor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Checked checkbox
            </label>
          </div>
        </div> */}

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
              {" "}
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
              <InputType
                name={"organizationName"}
                labelText={"organizationName"}
                labelfor={"fororganizationName"}
                value={organizationName}
                inputType={"text"}
                onChange={(e) => setorganizationName(e.target.value)}
              />
              <InputType
                name={"hospitalName"}
                labelText={"hospitalName"}
                labelfor={"forhospitalName"}
                value={hospitalName}
                inputType={"text"}
                onChange={(e) => sethospitalName(e.target.value)}
              />
            </>
          ))}
        <div className="d-flex">
          <button className="btn btn-primary" type="submit">
            {submitbtn}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
