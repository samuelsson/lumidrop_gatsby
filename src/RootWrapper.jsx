import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as PropTypes from 'prop-types';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

const RootWrapper = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
);

RootWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default RootWrapper;
