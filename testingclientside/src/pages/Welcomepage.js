import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Layout from "./../components/Layouts/Layout";
import UserMenu from "./../components/Layouts/UserMenu";
import { useAuth } from "../context/auth";
import '../styles/Welcomstyle.css';
import Orders from './user/Orders';


const Welcomepage = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();
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

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <Layout>
   <>
 
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <a href="dashboard/user/profile">Update your profile Profile</a>
        <a href="dashboard/user/orders">Teams</a>
        <a href="/">About us</a>
        <a href="/">Our services</a>
      </div>
      <h3 className="dashboardtittle"> Hi {auth?.user?.name} Free Api Test welcome you</h3>
      <p className="movetoview">Free Simple and together</p>
      <span style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>
        ☰ Dashboard
      </span>
      <div className="bday-card">
  {/* Top part of the card: image + decorations */}
  <div className="bday-decor--container">
    <div className="bday-pic ">
      <img src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?t=st=1710074380~exp=1710077980~hmac=e8e75e629ddcb89fabe04dc0ba3a97151312fa19e5eb907f5389ba44bc9bf3e6&w=1060" />
    </div>
   
    <p className="bday-decor bday-decor--top-left spin">👋</p>
  </div>
  {/* Banner */}
  <h3 className="bday-banner">
    <span>Hii {auth?.user?.name}</span> <span>We Welcome you</span>
  </h3>
  {/* Message + decoration */}
  <div className="bday-message bday-message--paper">
    <h1>Your credential</h1>
    <p>
     {auth?.user?.name}
     <br/>
     {auth?.user?.email}
     <br/>
     {auth?.user?.address}
    </p>
    <p className="bday-decor bday-decor--bottom-right zoom-left-in-out">🎉</p>
  </div>
</div>

      
  </>
  </Layout>
  
  );
};

export default Welcomepage;

