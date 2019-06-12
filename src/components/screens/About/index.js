import React, { Component } from 'react';

import { ECContainer, ECText } from '@common';

export default class About extends Component {
  static navigationOptions = {
    title: "Sobre o App",
  };

  render() {
    return(
      <ECContainer
        px="4"
      >
        <ECText>
          Este é um app feito como desafio tecnico para vaga de front end na Agenda Edu.
        </ECText>
      </ECContainer>
    );
  }
}
