import React, { useEffect, useState } from "react";
import Header from "../../components/shared/Header";
import Api from "../../services/Api";
import moment from "moment/moment";

const Analytics = () => {
  const colors = [
    "#FFC3A1",
    "#EADBC8",
    "#FFFBEB",
    "#FFC3A1",
    "#FFF8BC",
    "#FFF9D7",
    "#F7D716",
    "#EADBC8",
  ];
  const [bloodrecord, setbloodrecord] = useState([]);
  const [recentRecord, setrecentRecord] = useState([]);

  const getbloodrecord = async () => {
    try {
      const { data } = await Api.get("/analytics/get_bloodgroup");
      if (data.success === true) {
        setbloodrecord(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //recent records fuction
  const recentdata = async () => {
    try {
      const { data } = await Api.get("/inventory/recent-records");

      if (data?.success) {
        setrecentRecord(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getbloodrecord();
    recentdata();
  }, []);

  return (
    <>
      <Header />
      {bloodrecord && (
        <div className="d-flex flex-row flex-wrap">
          {bloodrecord?.bloodGroupData?.map((e, i) => {
            // console.log(e);
            return (
              <div
                className="card m-2 p-1"
                style={{ width: "18rem", backgroundColor: `${colors[i]}` }}
              >
                <div className="card-body">
                  <h5 className="card-title bg-light text-dark text-center mb-3">
                    {e.bloodGroup}
                  </h5>
                  <p className="card-text">
                    Total In : <b>{e.totalIn}</b>
                  </p>
                  <p className="card-text">
                    Total Out : <b>{e.totalOut}</b>.
                  </p>
                  <div className="card-footer text-light bg-dark text-center">
                    Total Available: <b>{e.availabeBlood} </b>{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="container">
        <h2
          className="my-3 m-auto text=center"
          style={{ backgroundColor: "ButtonShadow" }}
        >
          {" "}
          Recent Blood Records
        </h2>
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
            {recentRecord?.records?.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{e.bloodGroup}</th>

                  <td>{e.inventoryType}</td>
                  <td>{e.email}</td>
                  <td>{e.quantity} (ML)</td>
                  <td>{moment(e.updatedAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Analytics;
