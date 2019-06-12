import React, { Component } from 'react';
import * as SecureStore from 'expo-secure-store';

import { ECContainer, ECText } from '@common';
import * as Api from "@services/api";

export default class AuthLoading extends Component {
  componentDidMount() {
    this.trySessionLogin()
  }

  trySessionLogin = async () => {
    const { navigation } = this.props;
    const token = await SecureStore.getItemAsync('token');
    Api.setToken(token);
    navigation.navigate(token ? 'App' : 'Auth');
  }

  render() {
    return (
      <ECContainer
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <ECText>Trying session login</ECText>
      </ECContainer>
    );
  }
}
