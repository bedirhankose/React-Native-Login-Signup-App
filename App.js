import React from "react";
import {
  StyleSheet,
  View,
  Text,
} from "react-native";

import Router from "./src/Router";

export default class App extends React.Component {
  render() {

    return (
      <Router/>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa'
    
  },
});