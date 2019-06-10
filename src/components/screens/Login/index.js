import React, { Component } from 'react';

import { ECContainer, ECButton, ECText, ECTextInput } from '@common';

export default class Login extends Component {
  render() {
    return (
      <ECContainer
        flex={1}
        px='6'
      >
        <ECContainer
          flex={1}
          flexGrow='3'
          justifyContent="flex-end"
        >
          <ECText
            mb="8"
            textStyle="largeTitle"
          >
            Faça seu login 🔑
          </ECText>
          <ECTextInput
            mb='5'
            label='E-mail ou usuário'
          />
          <ECTextInput
            label='Senha'
          />
        </ECContainer>
        <ECContainer
          pb='8'
          flex={1}
          flexGrow='2'
          justifyContent="flex-end"
        >
          <ECButton>
            <ECText
              fontWeight='4'
              color='white'
            >
              Entrar
            </ECText>
          </ECButton>
        </ECContainer>
      </ECContainer>
    );
  }
}
