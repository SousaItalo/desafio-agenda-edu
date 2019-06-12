import React, { Component } from 'react';
import moment from 'moment';

import Routes from "./src/routes";
import ThemeWrapper from './src/theme/ThemeWrapper';
import ptBR from './config/locales/ptBR';

export default class App extends Component {
  render() {
    moment.locale('pt-br', ptBR.moment);

    return (
      <ThemeWrapper>
        <Routes />
      </ThemeWrapper>
    );
  }
};
