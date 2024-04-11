import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Contact from './pages/Contact';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPasword";
import AdminRoute from './components/Routes/AdminRoutes';
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from './pages/Admin/CreateProduct';
import UpdateProduct from './pages/Admin/UpdateProduct';
import Users from './pages/Admin/Users';
import Orders from "./pages/user/Orders";
import UserProfile from "./pages/user/UserProfile";
import Products from "./pages/Admin/Products";
import HomePage from "./pages/Homepage";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetail";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/Adminorder";
import Welcomepage from './pages/Welcomepage';
import Team from './pages/TeamAdmin/Team';
import LoginButton from './pages/Googlelogin';
import Teams from './teams/Teams';

import NoteState from './components/context/Notestate';
import { v4 as uuid } from 'uuid';


import Editor from './components/Editor';
import AddNote from "./components/Addnote";
import Notes from './components/Notes';
import RoomPage from './components/screens/Room';
import LobbyScreen from './components/screens/Lobby';
import { SocketProvider } from "./components/context/Socketprovider";




function App() {
  return (
    <SocketProvider>
    <NoteState>
    <Routes>
      <Route path="/" element={<Welcomepage />} />
      <Route path="/courses" element={<HomePage />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/category/:slug" element={<CategoryProduct />} />
      <Route path="/search" element={<Search />} />
      <Route path="/dashboard/*" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/orders" element={<Orders />} />
        
        <Route path="user/profile" element={<UserProfile />} />
      </Route>
      <Route path="/dashboard/*" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory />} />
        <Route path="admin/create-product" element={<CreateProduct />} />
        <Route path="admin/product/:slug" element={<UpdateProduct />} />
        <Route path="admin/products" element={<Products />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/orders" element={<AdminOrders />} />
        <Route path="teamadmin" element={<Team />} />
      </Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/forgot-password" element={<ForgotPasssword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/googlelogin" element={<LoginButton />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/*" element={<Pagenotfound />} />
      <Route path='/brewstestdocs' element={<Navigate replace to={`/docs/${uuid()}`} /> } />
        <Route path='/docs/:id' element={<Editor/>} />
        <Route path="/addnote"element={<AddNote/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/hudle" element={<LobbyScreen/>} />
        <Route path="/room/:roomId" element={<RoomPage />} />   
    </Routes>
    </NoteState>
    </SocketProvider>
  );
}

export default App;
