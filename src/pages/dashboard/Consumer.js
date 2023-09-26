import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/layout/Layout";
import Api from "../../services/Api";
import moment from "moment";
import { useSelector } from "react-redux";

const Consumer = () => {
  const [consumerdata, setconsumer] = useState();
  const user = useSelector((state) => state.auth);
  const getconsumer = async () => {
    const { data } = await Api.post("/inventory/all-records-consumer", {
      filters: { inventoryType: "out", hospital: user?.user?._id },
    });

    if (data.success) {
      setconsumer(data);
      //   console.log(data);
    }
  };
  useEffect(() => {
    getconsumer();
  }, []);

  return (
    <>
      <Layout>
        <div className="container">
          {" "}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Time & Date</th>
              </tr>
            </thead>
            <tbody>
              {consumerdata?.doc?.map((e, i) => {
                return (
                  <tr key={i}>
                    <th scope="row">{e.name}</th>

                    <td>{e.bloodGroup}</td>
                    <td>{e.inventoryType}</td>
                    <td>{e.quantity}</td>
                    <td>{e.email}</td>
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

export default Consumer;
