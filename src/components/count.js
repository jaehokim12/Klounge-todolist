import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '1',
    };
  }
  render() {
    return (
      <>
        {this.state.value}
        <button onClick={this.setState()}>증가</button>
        <button>감소</button>
      </>
    );
  }
}
export default Count;
