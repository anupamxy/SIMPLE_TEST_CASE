import React from "react";
import Layout from "./../../components/Layouts/Layout";
import { useAuth } from "../../components/context/auth";
import UserMenu from './../../components/Layouts/UserMenu';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="wrapper">
  <figure className="profilecard">
    <img
      src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1710073134~exp=1710076734~hmac=0d7e0402f6fd32ae42113ad0f945d1db4ced3c3590ebf6cc1d5f5bb1b6b96177&w=740"
      width={640}
      height={640}
      alt=""
    />
    <figcaption>
      <blockquote>
      Hii {auth?.user?.name} Check  your profile
      </blockquote>
      <cite>
       <span>Name: {auth?.user?.name}</span>
       <br/>
       <span>Email: {auth?.user?.email}</span>
       <br/>
       <span>Phone: {auth?.user.phone}</span>
       <br/>
       <span>Role: {auth?.user.role === 0 ? 'User' : 'Admin'}</span>

      </cite>
      <p className="credit">
        <strong>Free check your Test case </strong>,
       
      </p>
    </figcaption>
  </figure>
</div>

    </Layout>
  );
};

export default Dashboard;