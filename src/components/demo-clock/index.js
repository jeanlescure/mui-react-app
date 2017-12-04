import React, {Component} from 'react';
import moment from 'moment';

export default class DemoClock extends Component {
  updateTime = () => {
    if (this._mounted) {
      this.setState({
        tick: Date.now(),
      }, () => {
        setTimeout(this.updateTime, 1000);
      });
    }
  };

  componentWillMount() {
    this._mounted = true;
    this.updateTime();
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <h2>
        {moment(this.state.tick).format('h:mm:ss a')}
      </h2>
    );
  }
}
