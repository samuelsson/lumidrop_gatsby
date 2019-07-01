import { TEST_INCREMENT, TEST_SET_WORD, TestActionTypes } from './types';

export const testIncrement = (): TestActionTypes => ({
  type: TEST_INCREMENT,
});

export const testSetWord = (testWord: string): TestActionTypes => ({
  type: TEST_SET_WORD,
  testWord,
});
