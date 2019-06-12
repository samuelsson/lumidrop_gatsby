import React from 'react';
import * as PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

const PageWrapper = ({ element }) => (
  <div>
    <Normalize />
    {element}
  </div>
);

PageWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PageWrapper;
