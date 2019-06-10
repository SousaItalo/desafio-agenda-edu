import React, { Component } from 'react';

import { ECContainer, ECButton, ECText } from '@common';


export default class Login extends Component {
  render() {
    return (
      <ECContainer>
        <ECButton>
          <ECText
            fontWeight="4"
          >
            Entrar
          </ECText>
        </ECButton>
      </ECContainer>
    );
  }
}
