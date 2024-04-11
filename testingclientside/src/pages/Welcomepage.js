import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Layout from "./../components/Layouts/Layout";
import UserMenu from "./../components/Layouts/UserMenu";
import { useAuth } from "../components/context/auth";
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
 
     
      <h3 className="dashboardtittle"> Hi {auth?.user?.name} Free Api Test welcome you</h3>
      <p className="movetoview">Free Simple and together</p>
     
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

  <div className="all">
    <div onClick='/about' className="lefter">
      <div className="text">Hosting</div>
    </div>
    <div className="left">
      <div className="text">Web Design</div>
    </div>
    <div className="center">
      <div className="explainer">
        <span>Hover me</span>
      </div>
      <div className="text">Frontend Development</div>
    </div>
    <div className="right">
      <div className="text">Backend Development</div>
    </div>
    <div className="righter">
      <div className="text">SEO</div>
    </div>
  </div>
  <a href="https://jouanmarcel.com" target="_blank" className="ref">
    🔗 Jouan Marcel
  </a>
  
  <main className="site-wrapper">
  <div className="pt-table desktop-768">
    <div
      className="pt-tablecell page-home relative"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)",
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
    >
      <div className="overlay" />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-offset-1 col-md-10 col-lg-offset-2 col-lg-8">
            <div className="page-title  home text-center">
              <span className="heading-page"> Welcome to My Page</span>
              <p className="mt20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="hexagon-menu clear">
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-universal-access" />
                    </span>
                    <span className="title">BrewTest Docs</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="/brewstestdocs"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-bullseye" />
                    </span>
                    <span className="title">About</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-braille" />
                    </span>
                    <span className="title">Services</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-id-badge" />
                    </span>
                    <span className="title">Resume</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-life-ring" />
                    </span>
                    <span className="title">Works</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-clipboard" />
                    </span>
                    <span className="title">Testimonials</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
              <div className="hexagon-item">
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <div className="hex-item">
                  <div />
                  <div />
                  <div />
                </div>
                <a className="hex-content">
                  <span className="hex-content-inner">
                    <span className="icon">
                      <i className="fa fa-map-signs" />
                    </span>
                    <span className="title">Contact</span>
                  </span>
                  <svg
                    viewBox="0 0 173.20508075688772 200"
                    height={200}
                    width={174}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"
                      fill="#1e2530"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>




      
  </>
  </Layout>
  
  );
};

export default Welcomepage;

