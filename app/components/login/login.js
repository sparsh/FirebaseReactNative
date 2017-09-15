/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */ import React, { Component } from 'react'; import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  TextInput,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import firebase from 'firebase';
export default class LoginComponent extends Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
   
    
    this.state = { email: '', password: '' };

    if(firebase.auth().currentUser)
    {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'home'})
        ]
      })
      this.props.navigation.dispatch(resetAction)
    
    }

  }


  loginClicked(event) {

    const { navigate } = this.props.navigation;
    if (this.valid()) {

      var email = this.state.email;
      var password = this.state.password;
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate('home');
          this.setState({ error: '', loading: false });
        })
        .catch((error) => {
          alert(error);
        });

    }
  }

  valid() {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let message = '';
    if (this.state.email == '')
      message = 'Email cannot be Empty';
    else if (!re.test(this.state.email))
      message = "Please Provide a valid Email";
    else if (this.state.password == '')
      message = 'password cannot be Empty';
    else if(this.state.password.length <8)
      message = 'Password should be of minimmum 8 characters'

    if (message != '')
      alert(message);
    return message == '';
  }


  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <TextInput returnKeyType="go"
          keyboardType="email-address"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email" style={styles.welcome}>
        </TextInput>
        <TextInput returnKeyType="done"
          ref={(input) => this.passwordInput = input}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true} placeholder="Password" style={styles.welcome}>
        </TextInput>
        <Text onPress={this.loginClicked.bind(this)} style={styles.submitButton}>Login</Text>

        <View style={{ flexDirection: 'row' }}>

          <View style={{ flex: 1 }}></View>
          <Text onPress={() => navigate('register')} style={{ padding: 5, marginRight: 10 }}>Register</Text>
        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },

  submitButton: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'steelblue',
    paddingVertical: 10,
    margin: 10,
    textAlign: 'center'
  }

});
AppRegistry.registerComponent('LoginComponent', () =>
  LoginComponent);
