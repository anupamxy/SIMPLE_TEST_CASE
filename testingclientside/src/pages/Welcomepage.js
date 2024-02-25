
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
  {auth?.token ? (
    <>
      <h4>Hello {auth?.user?.name}, Welcome!</h4>
      <hr />
      <h5>Name: {auth?.user?.name}</h5>
      <h5>Email: {auth?.user?.email}</h5>
      <h5>Contact: {auth?.user?.phone}</h5>
      <h5>Address: {auth?.user?.address}</h5>
      <h5>Role: {auth?.user?.role === 0 ? "User" : "Admin"}</h5>
    </>
  ) : (
    <p>You are not logged in.</p>
  )}
</div>

          </div>
          {/* Right Section for Account Status and Graph */}
          <div className="col-md-6">
            <div className="user-card p-3">
              {/* Add your account status here */}
              <h3>Account Status:</h3>
              {/* Add your graph here */}
              <h5>Graph is going to occupy</h5>
            </div>
          </div>
        </div>
        {/* Orders Section */}
        <div className="row mt-5">
          <div className="col-md-12">
            {orders.length === 0 ? (
              <div className="text-center">
                <h1>No Team Assign </h1>
                <p>Make Request to our Admin to be a part of our team</p>
              </div>
            ) : (
              <>
                <h1 className="text-center">Teams you are Member </h1>
                {orders?.map((o, i) => {
              return (
                <div className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S:NO</th>
                        <th scope="col">Verify Status </th>
                        <th scope="col">Name</th>
                        <th scope="col"> date</th>
                        <th scope="col">Payment </th>
                        <th scope="col">Team Size</th>
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
                      </tr>
                    </tbody>
                  </table>
                  <div className="team-member-container">
  {o?.products?.map((p, i) => (
    <div className="team-member-card" key={p._id}>
      <div className="team-member-image">
        <img
          src={`/api/v1/product/product-photo/${p._id}`}
          className="team-member-image"
          alt={p.name}
          height={"100px"}
        />
      </div>
      <div className="team-member-details">
        <div>
          <h5>{p.name}</h5>
          <p className="description">{p.description.substring(0, 30)}</p>
        </div>
        <div className="mt-2">
          <p className="price">Price: {p.price}</p>
        </div>
      </div>
    </div>
  ))}
</div>

                </div>
              );
            })}
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcomepage;
