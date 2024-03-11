import React, { useState, useEffect } from "react";

import Layout from "./../../components/Layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import AdminMenu from './../../components/Layouts/Adminmenu';
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="coladmin">
          <AdminMenu />
        </div>
        <div className="col-md-0 ">
          <h1 className="text-center">All List of Team You Created</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-100" style={{ width: "25rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    
                    <p className="card-title">{p.name}</p>
                    <p className="card-text"> About Team: {p.description}</p>
                    <p className="card-auth-name">Team Admin Name: {p.adminname}</p>
                    
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;