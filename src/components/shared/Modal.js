import React, { useState } from "react";
import InputType from "./form/InputType";
import axios from "axios";
import Api from "../../services/Api";
import { useSelector } from "react-redux";

const Modal = () => {
  const { user } = useSelector((state) => state.auth);
  const [inventoryType, setinventoryType] = useState("in");
  const [bloodGroup, setbloodGroup] = useState("");
  const [quantity, setquantity] = useState(0);
  const [email, setemail] = useState(user?.email);

  const handleInventory = async () => {
    try {
      if (!bloodGroup || !quantity) {
        return alert("please input all the feilds");
      }
      const { data } = await Api.post("/inventory/create", {
        quantity,
        bloodGroup,
        inventoryType,

        email,
        organization: user?._id,
      });

      if (data?.success) {
        alert("Inventory Added");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };
  return (
    <>
      {/* {console.log(inventoryType)} */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Inventory
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="d-flex">
                Blood type: &nbsp;
                <div className="form-check mx-2">
                  <input
                    type="radio"
                    name="inRadio"
                    className="form-check-input"
                    value={"out"}
                    onChange={(e) => setinventoryType(e.target.value)}
                  />
                  <label htmlFor="out" className="form-check-label">
                    {" "}
                    OUT
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="inRadio"
                    className="form-check-input"
                    defaultChecked
                    value={"in"}
                    onChange={(e) => setinventoryType(e.target.value)}
                  />
                  <label htmlFor="in" className="form-check-label">
                    {" "}
                    IN
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setbloodGroup(e.target.value)}
              >
                <option selected>Select Blood Group</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
              </select>
              <InputType
                name={"Quantity"}
                labelText={"Quantity (ML)"}
                labelfor={"Quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setquantity(e.target.value)}
              />
              <InputType
                name={"email"}
                labelText={
                  inventoryType === "in" ? "Donor Email" : "Hospital Email"
                }
                labelfor={"email"}
                inputType={"string"}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleInventory}
                type="button"
                class="btn btn-primary"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
