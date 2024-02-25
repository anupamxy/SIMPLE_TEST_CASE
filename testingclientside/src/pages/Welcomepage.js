
// Welcomepage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Layout from "./../components/Layouts/Layout";
import UserMenu from "./../components/Layouts/UserMenu";
import { useAuth } from "../context/auth";
import '../styles/Welcomstyle.css';

const Welcomepage = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  var authToken = localStorage.getItem("authToken");

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
          {/* Left Section for User Details */}
          <div className="col-md-6">
            <div className="user-card p-3">
              <h1>Hello {auth?.user?.name}, Welcome!</h1>
              <hr />
              <h5> Name: {auth?.user?.name}</h5>
              <h5> Email: {auth?.user?.email}</h5>
              <h5> Contact: {auth?.user?.phone}</h5>
              <h5>Address: {auth?.user?.address}</h5>
              <h5>Role: {auth?.user?.role === 0 ? "User" : "Admin"}</h5>
            </div>
          </div>
          {/* Right Section for Account Status and Graph */}
          <div className="col-md-6">
            <div className="user-card p-3">
              {/* Add your account status here */}
              <h2>Account Status:</h2>
              {/* Add your graph here */}
              <h2>Graph is going to occupy</h2>
            </div>
          </div>
        </div>
        {/* Orders Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            {orders.length === 0 ? (
              <div className="text-center">
                <h1>No Orders</h1>
                <p>You currently have no orders.</p>
              </div>
            ) : (
              <>
                <h1 className="text-center">Teams you are Member </h1>
                {orders.map((o, i) => (
                  <div className="border shadow mb-3" key={o._id}>
                    <h2> verification status of Your Account By Admin  {o.status}</h2>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">S.NO</th>
                          <th scope="col">Status</th>
                          <th scope="col">Name of User</th>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Size</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>{o.status}</td>
                          <td>{o.buyer?.name}</td>
                          <td>{moment(o.createAt).fromNow()}</td>
                          <td>{o.payment.success ? "Success" : "Failed"}</td>
                          <td>{o.products.length}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcomepage;
