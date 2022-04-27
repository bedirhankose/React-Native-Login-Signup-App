import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Logo from '../components/logo';

export default class Welcome extends React.Component {


  render() {


    return (
      <View style={styles.container}>
        <Logo/>
        <TouchableOpacity style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}
          onPress={() => this.props.navigation.navigate('Signin')}>
          <Text style={styles.text}>Signin</Text>
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
    width: 100,
    height: 30,
    backgroundColor: 'red',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});