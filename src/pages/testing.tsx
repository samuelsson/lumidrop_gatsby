import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  TEST_INCREMENT,
  TEST_SET_WORD,
  TestActionTypes,
} from '../store/test/types';
import { AppState } from '../store';
import Layout from '../components/Layout';

const Testing = (): JSX.Element => {
  const testCount = useSelector(
    (state: AppState): number => state.test.testCount
  );

  const testWord = useSelector(
    (state: AppState): string => state.test.testWord
  );

  const dispatch = useDispatch();
  const testIncrease = (): TestActionTypes => ({ type: TEST_INCREMENT });
  const testSetWord = (word: string): TestActionTypes => ({
    testWord: word,
    type: TEST_SET_WORD,
  });

  return (
    <Layout pageTitle="test">
      <h1>Testing state</h1>

      <h2>Test Counter</h2>
      <p>{`Test counter is: ${testCount}`}</p>
      <button
        type="button"
        onClick={(): TestActionTypes => dispatch(testIncrease())}
      >
        increment
      </button>

      <h2>Test Set Word</h2>
      <p>{`Test word is: ${testWord}`}</p>
      <button
        type="button"
        onClick={(): TestActionTypes => dispatch(testSetWord('okay :)'))}
      >
        set word
      </button>
    </Layout>
  );
};

export default Testing;
