/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */ import React, { Component } from 'react'; import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import firebase from 'firebase';
export default class HomeComponent extends Component {


  constructor(props) {
    super(props);

    const { navigate } = this.props.navigation;
    if(firebase.auth().currentUser)
      {
       
      }
      else
      {
        navigate("login");
      }
  }
  static navigationOptions = {
    title: 'Home',
    headerLeft: null
  };
  logoutClicked(event) {
    
    firebase.auth().signOut();
        const { navigate } = this.props.navigation;
      
          navigate('login');
   
      }
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Welcome {firebase.auth().currentUser.email}
          </Text>
          <Text onPress={this.logoutClicked.bind(this)} style={styles.submitButton}>Logout</Text>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  submitButton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'steelblue',
    paddingHorizontal: 30,
    paddingVertical:10,
    margin: 10,
    textAlign: 'center'
  }
});
AppRegistry.registerComponent('HomeComponent', () => 
HomeComponent);
