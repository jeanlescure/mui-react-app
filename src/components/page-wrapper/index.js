import React, {Component} from 'react';

import Nav from '../nav';

export default class PageWrapper extends Component {
  render() {
    return [
      <Nav key="nav"/>,
      <div key="page-content" className="page-content">
        {this.props.children}
      </div>,
    ];
  }
}
