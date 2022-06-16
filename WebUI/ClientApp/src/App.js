import React, { Component } from 'react';
import { Route } from 'react-router';
import Planta from './views/planta'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
          <>
              <Planta />
          </>
    );
  }
}
