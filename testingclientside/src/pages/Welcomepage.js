import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/auth";
import moment from "moment";
import Layout from './../components/Layouts/Layout';
import UserMenu from './../components/Layouts/UserMenu';

const Welcomepage = () => {
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
      <div className="containerf">
        <div className="row">
          <div className="col-md-9">
            {orders.length === 0 ? (
              <div className="text-center">
                <h1>Not a Member of Any team</h1>
                <p> Currently You are not a member of any team.</p>
              </div>
            ) : (
              <>
                <h1 className="text-center">All Teams for your testing</h1>
                {orders.map((o, i) => (
                  <div className="border shadow" key={o._id}>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">S:NO</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col">Date</th>
                          <th scope="col">Payment</th>
                          <th scope="col">Quantity</th>
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
                    <div className="container">
                      {o.products.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p._id}>
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
                            <p>Price: {p.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
