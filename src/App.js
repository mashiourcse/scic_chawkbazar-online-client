import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { createContext, useState } from "react";
import Login from "./Components/Login/Login ";
import Checkout from "./Components/Checkout/Checkout";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Admin from "./Components/Admin/Admin";
import Orders from "./Components/Orders/Orders";
import AddProduct from "./Components/AddProduct/AddProduct";
import EditProducts from "./Components/EditProducts/EditProducts";
import ManageProduct from "./Components/ManageProduct/ManageProduct";
import Deals from "./Components/Deals/Deals";
import NotFound from "./Components/NotFound/NotFound";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            
            <Home></Home>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/editProducts">
            <EditProducts></EditProducts>
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <Route exact path="/">
          <Home></Home>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
