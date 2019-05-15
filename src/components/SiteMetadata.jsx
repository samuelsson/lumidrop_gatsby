import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import * as PropTypes from 'prop-types';

const SiteMetadata = ({ pageTitle }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <title>{ pageTitle }</title>
    </Helmet>
  );
};

SiteMetadata.propTypes = {
  pageTitle: PropTypes.string,
};

SiteMetadata.defaultProps = {
  pageTitle: '',
};

export default SiteMetadata;
