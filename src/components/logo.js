import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Image,
} from "react-native";

import logo from '../../images/logo.png';

export default class Logo extends React.Component {
    render() {
        return (
            <View style={StyleSheet.logoContainer}>
                <Image source={logo}
                    resizeMode={'contain'}
                    style={{ width: 250, height: 150 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logoContainer: {

    },
});