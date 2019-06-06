import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TEST_INCREMENT, TEST_SET_WORD } from '../store/types';
import Layout from '../components/Layout/Layout';

const Testing = () => {
  const testCount = useSelector(state => state.test.testCount);
  const testWord = useSelector(state => state.test.testWord);

  const dispatch = useDispatch();
  const testIncrease = () => ({ type: TEST_INCREMENT });
  const setWord = word => ({
    testWord: word,
    type: TEST_SET_WORD,
  });

  return (
    <Layout pageTitle="test">
      <h1>Testing state</h1>

      <h2>Test Counter</h2>
      <p>
        {`Test counter is: ${testCount}`}
      </p>
      <button type="button" onClick={() => dispatch(testIncrease())}>
        increment
      </button>

      <h2>Test Set Word</h2>
      <p>
        {`Test word is: ${testWord}`}
      </p>
      <button type="button" onClick={() => dispatch(setWord('okay :)'))}>
        set word
      </button>
    </Layout>
  );
};

export default Testing;
