/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */ import React, { Component } from 'react'; import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import firebase from 'firebase';
export default class RegisterComponent extends Component {

  static navigationOptions = {
    title: 'Register',
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', confirmPassword: '' };
  }


  registerClicked(event) {

    const { navigate } = this.props.navigation;
    if (this.valid()) {

      var email = this.state.email;
      var password = this.state.password;
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigate("home");
          this.setState({ error: '', loading: false });
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  valid() {
    console.log(this.state);

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let message = '';
    if (this.state.email == '')
      message = 'Email cannot be Empty';
    else if (!re.test(this.state.email))
      message = "Please Provide a valid Email";
    else if (this.state.password == '')
      message = 'password cannot be Empty';
    else if (this.state.confirmPassword == '')
      message = 'Confirm Password cannot be empty';
    else if (this.state.password.length < 8)
      message = 'Password should be of minimmum 8 characters'
    else if (this.state.password != this.state.confirmPassword)
      message = "Password and Confirm Password Should match"
    if (message != '')
      alert(message);
    return message == '';
  }


  render() {
    return (

      <View style={styles.container}>
        <TextInput returnKeyType="go"
          keyboardType="email-address"
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={(email) => this.setState({ email })}
          placeholder="Email" style={styles.welcome}
        >
        </TextInput>
        <TextInput returnKeyType="go"

          onSubmitEditing={() => this.confirmPasswordInput.focus()}
          onChangeText={(password) => this.setState({ password })}
          secureTextEntry={true} placeholder="Password" style={styles.welcome}
          ref={(input) => this.passwordInput = input}>
        </TextInput>
        <TextInput returnKeyType="done"

          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          secureTextEntry={true} placeholder="Confirm Password" style={styles.welcome}

          ref={(input) => this.confirmPasswordInput = input}>
        </TextInput>
        <Text onPress={this.registerClicked.bind(this)} style={styles.submitButton}>Register</Text>



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
AppRegistry.registerComponent('RegisterComponent', () =>
  RegisterComponent);
