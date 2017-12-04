import React, {Component} from 'react';
import {
  Link,
} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return [
      <h1 key="title">Hello World</h1>,
      <p key="instructions">Click "Clock" on nav menu, or click <Link to="/clock">here</Link></p>,
    ];
  }
}
