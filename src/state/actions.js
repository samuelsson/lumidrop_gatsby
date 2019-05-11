/* ignore default export rule until we have more than one export */
/* eslint-disable import/prefer-default-export */

import { TEST_INCREMENT, TEST_SET_WORD } from './contstants';

export const testIncrement = () => ({
  type: TEST_INCREMENT
});

export const testSetWord = testWord => ({
  type: TEST_SET_WORD,
  testWord
});
