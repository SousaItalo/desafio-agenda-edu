import React, { Component, Fragment } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as SecureStore from 'expo-secure-store';

import { ECContainer, ECButton, ECText, ECTextInput } from '@common';
import * as Api from "@services/api";

const input = {
  EMAIL: 1,
  PASSWORD: 2,
};

const error = {
  AUTH: 'Seu email e/ou senha estão errados, por favor digite novamente',
  DEFAULT: 'Ops... Algo deu errado, tente novamente em alguns instantes ou contate o suporte',
}

export default class Login extends Component {
  state = {
    focusedInput: null,
    error: null,
  }

  loginForm = React.createRef();

  static navigationOptions = () => {
    return {
        header: null,
    };
  };

  setFocusedInput = (inputId) => () => {
    this.setState({
      ...this.state,
      focusedInput: inputId,
    });
  }

  submitForm = () => {
    this.loginForm.current.submitForm()
  }

  handleSubmit = async ({email, password}) => {
    const response = await Api.login(email, password);
    console.log(response);
    if(response.data.token) {
      await SecureStore.setItemAsync('token', response.data.token);
      this.props.navigation.navigate('App');
    } else if(response.status === 401) {
      this.setState({
        ...this.state,
        error: error.AUTH,
      });
    } else {
      this.setState({
        ...this.state,
        error: error.DEFAULT,
      });
    }
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
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => this.handleSubmit(values)}
            ref={this.loginForm}
          >
            {({values, handleChange}) => (
              <Fragment>
                <ECTextInput
                  mb='5'
                  label='E-mail ou usuário'
                  isFocused={this.state.focusedInput === input.EMAIL}
                  onFocus={this.setFocusedInput(input.EMAIL)}
                  onBlur={this.setFocusedInput(null)}
                  Icon={() => <Icon name="email-outline" size={19} color="#AAAAAA"/> }
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <ECTextInput
                  label='Senha'
                  isFocused={this.state.focusedInput === input.PASSWORD}
                  onFocus={this.setFocusedInput(input.PASSWORD)}
                  onBlur={this.setFocusedInput(null)}
                  Icon={() => <Icon name="eye-off-outline" size={19} color="#AAAAAA"/> }
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                />
              </Fragment>
            )}
          </Formik>
          {this.state.error &&
            <ECText
              color="red"
              fontSize="0"
            >
              *{this.state.error}
            </ECText>
          }
        </ECContainer>
        <ECContainer
          pb='8'
          flex={1}
          flexGrow='2'
          justifyContent="flex-end"
        >
          <ECButton
            onPress={this.submitForm}
          >
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
