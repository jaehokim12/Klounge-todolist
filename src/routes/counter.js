import React, { Component } from 'react';
import Count from '../components/count';
class counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Count />
      </>
    );
  }
}
export default counter;
