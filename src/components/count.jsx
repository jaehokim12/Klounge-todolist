import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/count';
class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test case',
    };
  }
  render() {
    console.log(this.props);

    const { countstate, increase, decrease } = this.props;

    return (
      <>
        <div>
          <button
            onClick={() => {
              increase();
            }}
          >
            {'+'}
          </button>
          {countstate}
        </div>
        <div>
          <button
            onClick={() => {
              decrease();
            }}
          >
            {'-'}
          </button>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    countstate: state.count.count
  };
};
const mapDispatchToProps = dispatch => ({
  increase: () => {
    return dispatch(actions.increaseCount());
  },
  decrease: () => {
    return dispatch(actions.decreaseCount());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Count);
