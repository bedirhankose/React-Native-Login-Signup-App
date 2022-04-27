import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";

const { width: WIDTH } = Dimensions.get('window');

import Logo from '../components/logo';


export default class Signin extends React.Component {

  state = {
    username: '',
    password: '',
    Name: '',
    surname: '',
    email: '',

  };



  _onChangeTextUsername = text => {
    this.setState({
      username: text,
    })
  }

  _onChangeTextPassword = text => {
    this.setState({
      password: text
    })
  }

  _onChangeTextPassword2 = text => {
    this.setState({
      password2: text
    })
  }

  _onChangeTextName = text => {
    this.setState({
      Name: text
    })
  }

  _onChangeTextSurname = text => {
    this.setState({
      surname: text
    })
  }

  _onChangeTextEmail = text => {
    this.setState({
      email: text
    })
  }


  render() {

    const {
      username,
      password,
      password2,
      Name,
      surname,
      email
    } = this.state;

    return (
      <View style={styles.container}>
        <Logo />
        <TextInput style={styles.textinp}
          value={username}
          onChangeText={this._onChangeTextUsername}
          placeholder='Username'
          placeholderTextColor='black'
        />
        <TextInput style={styles.textinp}
          value={password}
          onChangeText={this._onChangeTextPassword}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='black'
        />
        <TextInput style={styles.textinp}
          value={password2}
          onChangeText={this._onChangeTextPassword2}
          placeholder='Check Password'
          secureTextEntry={true}
          placeholderTextColor='black'
        />
        <TextInput style={styles.textinp}
          value={Name}
          onChangeText={this._onChangeTextName}
          placeholder='Name'
          placeholderTextColor='black'
        />
        <TextInput style={styles.textinp}
          value={surname}
          onChangeText={this._onChangeTextSurname}
          placeholder='Surname'
          placeholderTextColor='black'
        />
        <TextInput style={styles.textinp}
          value={email}
          onChangeText={this._onChangeTextEmail}
          placeholder='Email'
          placeholderTextColor='black'
        />
        <TouchableOpacity style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Welcome')}>
          <Text style={styles.text}>Return to Welcome Page</Text>
        </TouchableOpacity>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
  touchable: {
    width: 200,
    height: 50,
    backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  },
  textinp: {
    width: WIDTH - 140,
    height: 40,
    borderWidth: 2,
    color: 'red',
    borderColor: 'red',
    marginTop: 20,
    borderRadius: 10

  }
});