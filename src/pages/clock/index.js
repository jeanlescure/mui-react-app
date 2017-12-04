import React, {Component} from 'react';

import DemoClock from '../../components/demo-clock';

export default class TestPage extends Component {
  render() {
    return [
      <h1 key="title">Clock</h1>,
      <DemoClock key="clock"/>,
    ];
  }
}
