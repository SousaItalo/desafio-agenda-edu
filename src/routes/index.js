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
import About from "../components/screens/About";

const EventsStack = createStackNavigator(
  {
    EventsList: {
      screen: EventsList
    }
  },
);

const AboutStack = createStackNavigator(
  {
    About: {
      screen: About,
    }
  }
);

const AppDrawer = createDrawerNavigator(
  {
    EventsStack: EventsStack,
    AboutStack: AboutStack,
  },
  {
    contentComponent: CustomDrawer,
  }
)

const AuthStack = createStackNavigator({
  Login: Login
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: {
        screen: AuthLoading,
      },
      App: {
        screen: AppDrawer,
      },
      Auth: {
        screen: AuthStack,
      },
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
