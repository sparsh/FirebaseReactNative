/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from '../../App';

import firebase from 'firebase';
export default class SplashComponent extends Component {


  static navigationOptions = { title: 'Welcome', header: null };

  constructor(props) {

    super(props);
    this.state = {
      isReady: false,
    }
    console.log(this.props);
    setInterval(() => {
      this.setState(previousState => {
        this.setState({
          isReady: true,
        });

      });
    }, 1000);

  }








  render() {

    const { isReady } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {
          isReady ?
            <AppNavigator />
            : <View style={styles.container}>
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Text style={styles.welcome}>
                  Welcome to Firebase Login Demo Using React Native
                 </Text>
              </View>
              <View>
                <Text style={styles.termsAndCondition}>
                  @C Developed By Sparsh Jain For Learning Purpose
                 </Text>
              </View>
            </View>
        }
      </View>



    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',

  },
  welcome: {

    color: 'white',
    fontSize: 25,
    padding: 10,
    textAlign: 'center'
  },
  termsAndCondition:
  {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  }

});


AppRegistry.registerComponent('SplashComponent', () =>
  SplashComponent);
