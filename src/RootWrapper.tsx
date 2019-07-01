import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as PropTypes from 'prop-types';
import { WrapRootElementBrowserArgs } from 'gatsby';
import reducer from './store';

const store = createStore(reducer);

const RootWrapper = ({ element }: WrapRootElementBrowserArgs): JSX.Element => (
  <Provider store={store}>{element}</Provider>
);

RootWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default RootWrapper;
