import { TEST_INCREMENT, TEST_SET_WORD } from './types';

export const testIncrement = () => ({
  type: TEST_INCREMENT,
});

export const testSetWord = testWord => ({
  type: TEST_SET_WORD,
  testWord,
});
