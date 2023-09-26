import React, { useEffect, useState } from "react";
import moment from "moment";
import Api from "../../../services/Api";
import Layout from "../../../components/shared/layout/Layout";

const DonorList = () => {
  const [donordata, setdonordata] = useState();
  const getDonors = async () => {
    const { data } = await Api.get("/admin/get-donor");

    if (data.success) {
      setdonordata(data);
    }
  };
  const handleDelete = async (val) => {
    const { data } = await Api.delete("/admin/get-donor/" + val);
    if (data.success) {
      window.location.reload();
    }
  };
  useEffect(() => {
    getDonors();
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          {" "}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Time & Date</th>
              </tr>
            </thead>
            <tbody>
              {donordata?.DonorAcc?.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{e.name}</th>

                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.phone}</td>
                    <td>{moment(e.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(e._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default DonorList;
