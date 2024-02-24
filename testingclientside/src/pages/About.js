import React from "react";
import Layout from "./../components/Layouts/Layout";
import {FcShop} from 'react-icons/fc'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="Aboutus">
      <div className="row contactus  mt-3 ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <FcShop/>Welcome to [APP KI DUKAN]!


          At [APP KI DUKAN], our mission is to provide an exceptional online shopping experience for our customers. We strive to create a platform that offers convenience, reliability, and personalized service. With an extensive range of high-quality products, competitive prices, and exceptional customer support, we aim to be your trusted destination for all your shopping needs.
          </p>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default About;