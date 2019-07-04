import React from 'react';
import * as PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { WrapPageElementBrowserArgs } from 'gatsby';
import GlobalStyles from './GlobalStyles';

const PageWrapper = ({ element }: WrapPageElementBrowserArgs): JSX.Element => (
  <div>
    <Normalize />
    <GlobalStyles />
    {element}
  </div>
);

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PageWrapper;
