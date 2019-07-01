import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import * as PropTypes from 'prop-types';

export const SiteMetadataPropTypes = {
  pageTitle: PropTypes.string,
};

export type SiteMetadataProps = PropTypes.InferProps<
  typeof SiteMetadataPropTypes
>;

const SiteMetadata = ({ pageTitle }: SiteMetadataProps): JSX.Element => {
  const {
    site: {
      siteMetadata: { title, lang },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          lang
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <title>{pageTitle}</title>
      <html lang={lang} />
    </Helmet>
  );
};

SiteMetadata.propTypes = SiteMetadataPropTypes;
SiteMetadata.defaultProps = {
  pageTitle: '',
};

export default SiteMetadata;
