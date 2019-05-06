import React from "react";
import 'normalize.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header/>
    {children}
    <Footer/>
  </div>
);

export default Layout;
