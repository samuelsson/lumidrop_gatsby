import { TEST_INCREMENT, TEST_SET_WORD } from '../types';

const initialState = {
  testCount: 0,
  testWord: 'change me please!'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEST_INCREMENT:
      return { ...state, testCount: state.testCount + 1 };
    case TEST_SET_WORD:
      return { ...state, testWord: action.testWord };
    default:
      return state;
  }
};
