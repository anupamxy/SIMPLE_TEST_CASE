import { Routes,Route } from "react-router-dom";
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







function App() {
  return (
  
   <>
   
   <Routes>
   <Route path="/"element={<Welcomepage/>}/>
   <Route path="/courses" element={<HomePage />} />
  
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<UserProfile />} />
  </Route>
  
  <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
        
          <Route path="admin/products" element={<Products />} />

          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders/>} />
         
        </Route>
  
    
    <Route path="/contact"element={<Contact/>}/>
    <Route path="/policy"element={<Policy/>}/>
    <Route path="/*"element={<Pagenotfound/>}/>
    <Route path="/forgot-password"element={<ForgotPasssword/>}/>
    <Route path="/register"element={<Register/>}/>
    <Route path="/login"element={<Login/>}/>
    
   
   </Routes>
  


   </>
  );
}

export default App;
