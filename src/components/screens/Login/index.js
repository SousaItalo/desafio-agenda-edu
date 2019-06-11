import React, { Component } from 'react';

import { ECContainer, ECButton, ECText, ECTextInput } from '@common';

const input = {
  EMAIL: 1,
  PASSWORD: 2,
};

export default class Login extends Component {
  state = {
    focusedInput: null,
  }

  setFocusedInput = (inputId) => () => {
    this.setState({
      ...this.state,
      focusedInput: inputId,
    });
  }

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
            isFocused={this.state.focusedInput === input.EMAIL}
            onFocus={this.setFocusedInput(input.EMAIL)}
            onBlur={this.setFocusedInput(null)}
          />
          <ECTextInput
            label='Senha'
            isFocused={this.state.focusedInput === input.PASSWORD}
            onFocus={this.setFocusedInput(input.PASSWORD)}
            onBlur={this.setFocusedInput(null)}
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
