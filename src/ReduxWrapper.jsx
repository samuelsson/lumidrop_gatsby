import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as PropTypes from 'prop-types';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer);

const ReduxWrapper = ({ element }) => (
  <Provider store={store}>
    {element}
  </Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxWrapper;
