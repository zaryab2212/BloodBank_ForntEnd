import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Layout from "../components/shared/layout/Layout";
import Modal from "../components/shared/Modal";
import Api from "../services/Api";
import moment from "moment/moment";

const Home = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const [inventorydata, setinventorydata] = useState([]);
  const fetchInverotydata = async () => {
    try {
      const { data } = await Api.get("/inventory/all-records");

      setinventorydata(data.doc);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };
  useEffect(() => {
    fetchInverotydata();
  }, []);

  return (
    <Layout>
      {error && <span> {alert(error)} </span>}

      {loading ? (
        <Loader />
      ) : (
        <>
          <h4
            style={{ cursor: "pointer" }}
            className="ms-4 "
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-plus text-success py-4"></i>
            Add Inventory
          </h4>

          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Inventory Type</th>
                  <th scope="col">Donor Email</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Time & Date</th>
                </tr>
              </thead>
              <tbody>
                {inventorydata?.map((e, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{e.bloodGroup}</th>

                      <td>{e.inventoryType}</td>
                      <td>{e.email}</td>
                      <td>{e.quantity} (ML)</td>
                      <td>
                        {moment(e.updatedAt).format("DD/MM/YYYY hh:mm A")}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <Modal />
        </>
      )}
    </Layout>
  );
};
export default Home;
