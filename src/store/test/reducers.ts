import {
  TEST_INCREMENT,
  TEST_SET_WORD,
  TestActionTypes,
  TestState,
} from './types';

export const initialState: TestState = {
  testCount: 0,
  testWord: 'change me please!',
};

const testReducer = (
  state = initialState,
  action: TestActionTypes
): TestState => {
  switch (action.type) {
    case TEST_INCREMENT:
      return { ...state, testCount: state.testCount + 1 };
    case TEST_SET_WORD:
      return { ...state, testWord: action.testWord };
    default:
      return state;
  }
};

export default testReducer;
