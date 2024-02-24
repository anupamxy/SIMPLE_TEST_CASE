import React from 'react'
import Layout from '../../components/Layouts/Layout'
import AdminMenu from './../../components/Layouts/Adminmenu';

const Users = () => {
  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="coladmin">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>USERS SECTION</h1>
            <div className="p-3 w-50">
             
            </div>
            </div>
            </div>
            </div>
    
    </Layout>
  )
}

export default Users
