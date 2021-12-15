import React from 'react';
import AdminHome from './pages/Admin/Home/AdminHome';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import UserList from './pages/Admin/Users/UserList';
import User from './pages/Admin/Users/User';
import NewUser from './pages/Admin/Users/NewUser';
import ProductList from './pages/Admin/Products/ProductList';
import Product from './pages/Admin/Products/Product';
import NewProduct from './pages/Admin/Products/NewProduct';
import CategoryList from './pages/Admin/Category/CategoryList';
import Category from './pages/Admin/Category/Category';
import NewCategory from './pages/Admin/Category/NewCategory';
import Orders from './pages/Admin/Orders/Orders';
import OrderList from './pages/Admin/Orders/OrderList';
import PaymentList from './pages/Admin/Payments/PaymentList';
import Payment from './pages/Admin/Payments/Payment';
import NewPayment from './pages/Admin/Payments/NewPayment';
import ShipperList from './pages/Admin/Shippers/ShipperList';
import Shipper from './pages/Admin/Shippers/Shippers';
import NewShipper from './pages/Admin/Shippers/NewShippers';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AdminHome/>} />
        <Route exact path="/admin-home" element={<AdminHome/>} />
        <Route  exact path="/admin-users" element={<UserList/>} />
        <Route  exact path="/admin-new-users" element={<NewUser/>} />
        <Route  exact path="/admin-users/:userId" element={<User/>} />
        <Route  exact path="/admin-products/:productId" element={<Product/>} />
        <Route  exact path="/admin-products" element={<ProductList/>} />
        <Route  exact path="/admin-newProduct" element={<NewProduct/>} />
        <Route  exact path="/admin-categories" element={<CategoryList/>} />
        <Route  exact path="/admin-categories/:categoryId" element={<Category/>} />
        <Route  exact path="/admin-newCategory" element={<NewCategory/>} />
        <Route  exact path="/admin-orders" element={<OrderList/>} />
        <Route  exact path="/admin-orders/:categoryId" element={<Orders/>} />
        <Route  exact path="/admin-payments" element={<PaymentList/>} />
        <Route  exact path="/admin-payments/:paymentId" element={<Payment/>} />
        <Route  exact path="/admin-newPayment" element={<NewPayment/>} />
        <Route  exact path="/admin-shippers" element={<ShipperList/>} />
        <Route  exact path="/admin-shippers/:shipperId" element={<Shipper/>} />
        <Route  exact path="/admin-newShipper" element={<NewShipper/>} />
      </Routes>
    
    </Router>
  );
}

export default App;
