import React, { Component } from 'react';
import * as SecureStore from 'expo-secure-store';

import { ECContainer, ECText, ECButton } from '@common';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CustomContainer extends Component {
  logout = async () => {
    await SecureStore.deleteItemAsync('token');
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { navigation } = this.props;
    const { activeItemKey } = this.props;

    return (
      <ECContainer
        flex={1}
        pt='8'
        justifyContent='space-between'
      >
        <ECContainer
          alignItems='center'
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('EventsStack')}
          >
            <ECText
              fontSize='3'
              fontWeight='5'
              mb='5'
              color={activeItemKey === 'EventsStack' ? 'purple' : 'gray'}
            >
              Lista de Eventos
            </ECText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutStack')}
          >
            <ECText
              fontSize='3'
              fontWeight='5'
              mb='5'
              color={activeItemKey === 'AboutStack' ? 'purple' : 'gray'}
            >
              Sobre o App
            </ECText>
          </TouchableOpacity>
        </ECContainer>
        <ECContainer
          alignItems='center'
          px='9'
          pb='3'
        >
          <ECButton
            onPress={() => this.logout()}
          >
            <ECText
              fontSize='2'
              fontWeight='5'
              color='white'
            >
              Sair
            </ECText>
          </ECButton>
        </ECContainer>
      </ECContainer>
    );
  }
}
