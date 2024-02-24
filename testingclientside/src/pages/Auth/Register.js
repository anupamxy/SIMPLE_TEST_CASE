import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layouts/Layout";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role,setRole]=useState(0);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
        role,
      });
      if (res.data.success) {
        toast.success(res.data.message, {
          duration: 10000,
        });
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Sommething went wrong");
    }
  };
  return (
    <Layout>
      <div className="form-container">
        
        <form className="form" onSubmit={handleSubmit}>
        <h1>Register here</h1>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              aria-describedby="emailHelp"
              placeholder="enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              aria-describedby="emailHelp"
              placeholder="enter your Phone number"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAdress(e.target.value)}
              className="form-control"
              id="Addres"
              aria-describedby="emailHelp"
              placeholder="enter your Adress"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="Addres"
              aria-describedby="emailHelp"
              placeholder="Your Favorate game"
              required
            />
          </div>
          <div className="mb-3">
          <input
              type="Number"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="form-control"
              id="role"
              aria-describedby="emailHelp"
              placeholder="Enter your role"
              required
            />
          </div>
          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
