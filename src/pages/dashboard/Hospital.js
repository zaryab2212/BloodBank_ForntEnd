import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/layout/Layout";
import Api from "../../services/Api";
import moment from "moment";

const Hospital = () => {
  const [Hospdata, setHospdata] = useState();
  const getHosp = async () => {
    const { data } = await Api.get("/inventory/hospitals");

    if (data.success) {
      setHospdata(data);
    }
  };
  useEffect(() => {
    getHosp();
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
              {Hospdata?.hospitalData?.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{e.name}</th>

                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.phone}</td>
                    <td>{moment(e.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
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

export default Hospital;
