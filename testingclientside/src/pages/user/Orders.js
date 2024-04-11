import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layouts/Layout";
import axios from "axios";
import { useAuth } from "../../components/context/auth";
import moment from "moment";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={"Your Orders"}>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <h1 className="text-center">All Teams</h1>
            {orders.map((o, i) => {
              console.log("Orders:", orders); // Logging orders only once
              return (
                <div className="border shadow" key={i}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S:NO</th>
                        <th scope="col">Verify Status</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Team Size</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).fromNow()}</td>
                        <td>{o?.payment.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                        <td>
                         
                          {o?.status === "verified" ? (
                            <NavLink
                              to={{ pathname: '/teams', state: { orders: o ? [o] : null } }}
                              className="list-group-item list-group-item-action"
                            >
                              {o?.products?.name}
                            </NavLink>
                          ) : (
                            <span>You are Not verified by Admin</span>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    {o?.products?.map((p, j) => (
                      <div className="row mb-2 p-3 card flex-row" key={j}>
                        <div className="col">
                          <img
                            src={`/api/v1/product/product-photo/${p._id}`}
                            className="card-md-4"
                            alt={p.name}
                            height={"100px"}
                          />
                        </div>
                        <div className="col-md-8">
                          <p>{p.name}</p>
                          <p>{p.description.substring(0, 30)}</p>
                          <p>Price : {p.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
