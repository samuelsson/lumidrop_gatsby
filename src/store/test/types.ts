import { Action } from 'redux';

export const TEST_INCREMENT = 'TEST_INCREMENT';
export const TEST_SET_WORD = 'TEST_SET_WORD';

export interface TestState {
  testCount: number;
  testWord: string;
}

interface IncrementAction extends Action {
  type: typeof TEST_INCREMENT;
}

interface SetWordAction extends Action {
  type: typeof TEST_SET_WORD;
  testWord: string;
}

export type TestActionTypes = IncrementAction | SetWordAction;
