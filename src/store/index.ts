import { combineReducers } from 'redux';
import testReducer from './test/reducers';

const rootReducer = combineReducers({
  test: testReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
