import React, { useState, useEffect } from "react";
import Layout from "./../components/Layouts/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";


const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="cardimg"
            alt={product.name}
           
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">View Team Details </h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Admin Name : {product.adminname}</h6>
        
          <h6>
            Team Size :
            {product.price}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">ADD TO WORKING</button>
        </div>
      </div>
      <hr />
      <div className="bottom">
  {product.adminname && (
    <div>
      {/* Content to show if product.adminname exists */}
      {/* For example, a paragraph saying "Admin Name exists" */}
    
      
    </div>
  )}
  {!product.adminname && (
    <div>
      {/* Content to show if product.adminname doesn't exist */}
      {/* For example, a paragraph saying "Admin Name doesn't exist" */}
      <p>Admin Name doesn't exist</p>
    </div>
  )}
</div>

    
    </Layout>
  );
};

export default ProductDetails;