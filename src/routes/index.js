import React from 'react';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from "react-navigation";

import CustomDrawer from './CustomDrawer';

import Login from "../components/screens/Login";
import EventsList from "../components/screens/EventsList";
import AuthLoading from "../components/screens/AuthLoading";

const AppStack = createDrawerNavigator(
  {
    EventsList: EventsList
  },
  {
    contentComponent: CustomDrawer,
  }
);

const AuthStack = createStackNavigator({
  Login: Login
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
