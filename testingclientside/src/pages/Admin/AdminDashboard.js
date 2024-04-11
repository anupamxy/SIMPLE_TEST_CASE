import React from "react";
import AdminMenu from "./../../components/Layouts/Adminmenu";
import Layout from "./../../components/Layouts/Layout";
import { useAuth } from "../../components/context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="containerf">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="cardadmin ">
             
              <p> Admin Name : {auth?.user?.name}</p>
              <p> Admin Email : {auth?.user?.email}</p>
              <p> Admin Contact : {auth?.user?.phone}</p>
              <p>Admin Adress: {auth?.user?.address}</p>
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;