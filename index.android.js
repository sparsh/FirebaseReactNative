/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import firebase from 'firebase';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import AwesomeProject from './app/components/splash/SplashNavigator'

  // Initialize Firebase

  var config = {
    apiKey: "AIzaSyAmdpMTqq6UvHwWXsoOIo81AZzsUcaP8wI",
    authDomain: "react-39e07.firebaseapp.com",
    databaseURL: "https://react-39e07.firebaseio.com",
    projectId: "react-39e07",
    storageBucket: "react-39e07.appspot.com",
    messagingSenderId: "61299525223"
  };
  firebase.initializeApp(config);

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
