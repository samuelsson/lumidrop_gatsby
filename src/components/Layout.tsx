import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import SiteMetadata from './SiteMetadata';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import { variables } from '../styles';

export const LayoutPropTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export type LayoutProps = PropTypes.InferProps<typeof LayoutPropTypes>;

const Main = styled.main`
  max-width: ${variables.breakpoints.large};
  margin: 0 auto;
  padding: calc(${variables.defaultPadding} * 2);
`;

const Layout: React.FunctionComponent<LayoutProps> = ({
  pageTitle,
  children,
}): JSX.Element => (
  <div>
    <SiteMetadata pageTitle={pageTitle} />
    <PageHeader />
    <Main role="main">{children}</Main>
    <PageFooter />
  </div>
);

Layout.propTypes = LayoutPropTypes;
Layout.defaultProps = {
  pageTitle: '',
};

export default Layout;
