import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import Layout from '../components/Layout/Layout';
import { testIncrement, testSetWord } from '../state/actions';

const mapStateToProps = state => ({
  testCount: state.test.testCount,
  testWord: state.test.testWord
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(testIncrement()),
  setWord: word => dispatch(testSetWord(word))
});

const Test = ({
  testCount,
  increment,
  testWord,
  setWord
}) => (
  <Layout>
    <h1>Testing state</h1>

    <h2>Test Counter</h2>
    <p>
      Test counter is: { testCount }
    </p>
    <button type="button" onClick={() => increment()}>
      increment
    </button>

    <h2>Test Set Word</h2>
    <p>
      Test word is: { testWord }
    </p>
    <button type="button" onClick={() => setWord('okay :)')}>
      set word
    </button>
  </Layout>
);

Test.propTypes = {
  testCount: PropTypes.node.isRequired,
  increment: PropTypes.func.isRequired,
  testWord: PropTypes.node.isRequired,
  setWord: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
