import React, { Component } from "react";
import { StackActions, NavigationActions } from "react-navigation";
import * as SecureStore from "expo-secure-store";

import { ECContainer, ECText, ECButton } from "@common";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class CustomContainer extends Component {
  logout = async () => {
    const navigateToLogin = StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: "Login" })]
    });
    await SecureStore.deleteItemAsync("token");
    this.props.navigation.dispatch(navigateToLogin);
  };

  render() {
    const { navigation } = this.props;
    const { activeItemKey } = this.props;

    return (
      <ECContainer
        flex={1}
        pt="8"
        justifyContent="space-between"
      >
        <ECContainer
          alignItems="center"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("EventsList")}
          >
            <ECText
              fontSize="3"
              fontWeight="5"
              mb="5"
              color={activeItemKey === 'EventsList' ? 'purple' : 'gray'}
            >
              Lista de Eventos
            </ECText>
          </TouchableOpacity>
        </ECContainer>
        <ECContainer
          alignItems="center"
          px="9"
          pb="3"
        >
          <ECButton
            onPress={() => this.logout()}
          >
            <ECText
              fontSize="2"
              fontWeight="5"
              color="white"
            >
              Sair
            </ECText>
          </ECButton>
        </ECContainer>
      </ECContainer>
    );
  }
}
