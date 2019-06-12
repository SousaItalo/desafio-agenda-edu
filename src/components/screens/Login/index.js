import React, { Component, Fragment } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Formik } from 'formik';
import { ECContainer, ECButton, ECText, ECTextInput } from '@common';

const input = {
  EMAIL: 1,
  PASSWORD: 2,
};

export default class Login extends Component {
  state = {
    focusedInput: null,
  }

  loginForm = React.createRef();

  setFocusedInput = (inputId) => () => {
    this.setState({
      ...this.state,
      focusedInput: inputId,
    });
  }

  submitForm = () => {
    this.loginForm.current.submitForm()
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
            onSubmit={values => console.log(values)}
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
                />
              </Fragment>
            )}
          </Formik>
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
