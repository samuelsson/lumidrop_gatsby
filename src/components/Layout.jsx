import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteMetadata from './SiteMetadata';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Layout = ({ pageTitle, children }) => (
  <div>
    <SiteMetadata pageTitle={pageTitle} />
    <PageHeader />
    <Main>
      { children }
    </Main>
    <PageFooter />
  </div>
);

Layout.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageTitle: '',
};

export default Layout;
