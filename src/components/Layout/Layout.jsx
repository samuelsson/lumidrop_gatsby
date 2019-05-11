import React from 'react';
import * as PropTypes from 'prop-types';
import 'normalize.css';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => (
  <div className="wrapper">
    <Header />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
