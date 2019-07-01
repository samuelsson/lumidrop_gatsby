import React from 'react';
import * as PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { WrapPageElementBrowserArgs } from 'gatsby';

const PageWrapper = ({ element }: WrapPageElementBrowserArgs): JSX.Element => (
  <div>
    <Normalize />
    {element}
  </div>
);

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PageWrapper;
