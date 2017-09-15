/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */ import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import HomeComponent from './components/home/home'
import RegisterComponent from './components/register/register'
import LoginComponent from './components/login/login'
import { StackNavigator } from 'react-navigation';
const AppNavigator = StackNavigator({

  login: { screen: LoginComponent },
  home: { screen: HomeComponent },
  register: { screen: RegisterComponent }
});

export default AppNavigator;