import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/layout/Layout";
import Api from "../../services/Api";
import moment from "moment";
import { useSelector } from "react-redux";

const Organization = () => {
  const user = useSelector((state) => state.auth);
  const [orgdata, setorgdata] = useState();
  const getorg = async () => {
    if (user?.user?.role === "organization") {
      try {
        const { data } = await Api.get("/inventory/organizations");

        if (data.success) {
          setorgdata(data);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await Api.get("/inventory/org-for-hosp");

        if (data.success) {
          setorgdata(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getorg();
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
              {orgdata?.OrgData?.map((e, i) => {
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

export default Organization;
