import React from 'react'

import {
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Signin from './pages/Signin';

const AppSwitchNavigator = createSwitchNavigator(
    {
        Welcome: {
            screen: Welcome
        },
        Signin: {
            screen: Signin
        },
        Login: {
            screen: Login
        }

    },
    {
        initialRouteName: 'Welcome'
    }
);

export default createAppContainer(AppSwitchNavigator);