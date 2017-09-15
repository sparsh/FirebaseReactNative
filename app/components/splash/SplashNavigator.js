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

import SplashComponent from './splash'
import LoginComponent from '../login/login'
import { StackNavigator } from 'react-navigation';
const AwesomeProject = StackNavigator({
  splash: {
    screen: SplashComponent
    }}, { headerMode: 'screen' } 
);

export default AwesomeProject;