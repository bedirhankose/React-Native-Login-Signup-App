import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";

const { width: WIDTH } = Dimensions.get('window');

import Logo from '../components/logo';

export default class Login extends React.Component {

  state = {
    username: '',
    password: '',
  };



  _onChangeTextUsername = text => {
    this.setState({
      username: text
    })
  }

  _onChangeTextPassword = text => {
    this.setState({
      password: text
    })
  }

  render() {

    const {
      username,
      password
    } = this.state;

    return (
      <View style={styles.container}>
        <Logo/>
        <TextInput style={styles.textinp}
          value={username}
          onChangeText={this.onChangeTextUsername}
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
    borderRadius: 10,

  }
});