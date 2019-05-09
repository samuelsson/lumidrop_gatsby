import React from "react";
import 'normalize.css';
import styles from './Layout.module.scss';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header/>
    <div className={ styles.content }>
      {children}
    </div>
    <Footer/>
  </div>
);

export default Layout;
