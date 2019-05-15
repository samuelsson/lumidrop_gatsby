import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import * as PropTypes from 'prop-types';
import rootReducer from './reducers/rootReducer';

const createStore = () => reduxCreateStore(rootReducer);

const ReduxWrapper = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

ReduxWrapper.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ReduxWrapper;
