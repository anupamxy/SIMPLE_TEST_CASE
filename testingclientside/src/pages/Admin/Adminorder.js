import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Layout from "../../components/Layouts/Layout";
import { useAuth } from "../../components/context/auth";
import moment from "moment";
import { Select } from "antd";
import AdminMenu from "../../components/Layouts/Adminmenu";
const { Option } = Select;

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "verified",
    "notverified",
    "error",
    "contact",
    "cancel",
  ]);
  const [changeStatus, setChangeStatus] = useState("");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      console.log("API Response Data:", data);
      setOrders(data);
      setFilteredOrders(data); // Set filtered orders initially to all orders
    } catch (error) {
      console.log(error);
      alert("not found");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
      // Handle error, show toast, etc.
    }
  };

  // Function to filter orders based on status
  const handleFilter = (value) => {
    if (value === "all") {
      setFilteredOrders(orders); // If "All" is selected, set filteredOrders to all orders
    } else {
      const filtered = orders.filter((order) => order.status === value);
      setFilteredOrders(filtered); // Set filteredOrders to orders with selected status
    }
  };

  return (
    <Layout title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="coladmin">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">List of Users for Verification</h1>
          
          {/* Filter dropdown */}
          <div className="text-right mb-3">
            <Select 
            className="filter-dropdown"
            defaultValue="all" onChange={handleFilter}>
              <Option value="all">All</Option>
              {status.map((s, i) => (
                <Option key={i} value={s}>
                  {s}
                </Option>
              ))}
            </Select>
          </div>
          
          {filteredOrders?.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
            filteredOrders?.map((o, i) => (
              <div className="border shadow" key={i}>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">S:No</th>
                      <th scope="col">Status</th>
                      <th scope="col">Role define</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Team size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{i + 1}</td>
                      <td>
                        <Select
                          bordered={false}
                          onChange={(value) => handleChange(o._id, value)}
                          defaultValue={o?.status}
                        >
                          {status.map((s, i) => (
                            <Option key={i} value={s}>
                              {s}
                            </Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                     
                      <td>{moment(o.date).fromNow()}</td>
                      <td>{o?.payment.success ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="container">
                  {o?.products?.map((p, i) => (
                    <div className="row mb-2 p-3 card flex-row" key={p._id}>
                      <div className="col-md-6">
                        <img
                          src={`/api/v1/product/product-photo/${p._id}`}
                          className="card-img-top"
                          alt={p.name}
                          height="300"
                          width="350px"
                        />
                      </div>
                      <div className="col-md-8">
                        <p>{p.name}</p>
                        <p>{p.description.substring(0, 30)}</p>
                        <p>Price: {p.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;

