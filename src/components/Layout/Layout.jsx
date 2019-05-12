import React from 'react';
import * as PropTypes from 'prop-types';
import 'normalize.css';
import styles from './Layout.module.scss';
import SiteMetadata from '../SiteMetadata';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({ pageTitle, children }) => (
  <div className="wrapper">
    <SiteMetadata pageTitle={pageTitle} />
    <Header />
    <div className={styles.content}>
      { children }
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  pageTitle: ''
};

export default Layout;
