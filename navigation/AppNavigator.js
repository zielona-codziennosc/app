import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Color from 'color';

import Header from '../components/Header/Header';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import RulesScreen from '../screens/RulesScreen';
import InitializeScreen from '../screens/InitializeScreen';
import ActionsListScreen from '../screens/ActionsListScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Codziennik from "../screens/CodziennikScreen";
import DrawerMenu from './DrawerMenu';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header openDrawer={navigation.openDrawer} />
    }),
  },
  Initialize: {
    screen: ({navigation}) => InitializeScreen({navigation}),
    navigationOptions: () => ({
      header: null
    }),
  },
  ActionsList: {
    screen: ActionsListScreen,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Zróbmy coś!" openDrawer={navigation.openDrawer} />
    }),
  },
  Codziennik: {
    screen: Codziennik,
    navigationOptions: ({ navigation }) => ({
      header: <Header title="Zróbmy coś!" openDrawer={navigation.openDrawer} />
    }),
  }
});

const AuthStack = createStackNavigator({
  Login: {
    screen: ({ navigation }) => LoginScreen({ navigation }),
    navigationOptions: () => ({
      header: <Header title="Logowanie" />
    }),
  },
  SignUp: {
    screen: ({ navigation }) => SignUpScreen({ navigation }),
    navigationOptions: () => ({
      header: <Header title="Rejestracja" />
    }),
  },
  Rules: {
    screen: ({ navigation }) => RulesScreen({ navigation }),
    navigationOptions: () => ({
      header: <Header title="Regulamin Serwisu" />
    }),
  }
});

export default createAppContainer(
  createDrawerNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: {
        screen: AuthStack,
        navigationOptions: {
          drawerLockMode: 'locked-closed'
        }
      },
    },
    {
      initialRouteName: 'AuthLoading',
      drawerPosition: 'right',
      drawerType: 'slide',
      drawerWidth: Layout.window.width - 60,
      overlayColor: Color(Colors.black).alpha(0.5).toString(),
      contentComponent: DrawerMenu
    }
  )
);
