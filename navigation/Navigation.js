import React from 'react';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Welcome from '../screens/Welcome.js';
import LogIn from '../screens/LogIn.js';
import Saved from '../screens/Saved.js';
import Trips from '../screens/Trips.js';
import Explore from '../screens/Explore.js';
import Inbox from '../screens/Inbox.js';
import Forget from '../screens/Forget.js';
import Profile from '../screens/Profile.js';
import SignUp from '../screens/SignUp.js';
import { FontAwesome } from '@expo/vector-icons';

const AuthStack = createStackNavigator({
    Welcome: Welcome,
    LogIn: LogIn,
    SignUp: SignUp,
    Forget: Forget
})
const SavedStack = createStackNavigator({
    Saved: {
        screen: Saved,
        navigationOptions : {
            title: 'Saved',
            headerStyle: {
                backgroundColor: '#eb8242'
            },
            headerTintColor: '#fff'
            }
    }
})
const HomeStack = createBottomTabNavigator({
    EXPLORE: {
        screen: Explore,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="search" size={20} color={tintColor}/>
                )
        }
    },
    SAVED: {
        screen: SavedStack,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="heart-o" size={20} color={tintColor}/>
                )
        }
    },
    TRIPS: {
        screen: Trips,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="home" size={20} color={tintColor}/>
                )
        }
    },
    INBOX: {
        screen: Inbox,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="inbox" size={20} color={tintColor}/>
                )
        }
    },
    PROFILE: {
        screen: Profile,
        navigationOptions : {
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome name="user" size={20} color={tintColor}/>
                )
        }
    },
},{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: '#d1cece'
  }
})
const Navigation = createSwitchNavigator({
    AuthStack: AuthStack,
    HomeStack: HomeStack
})
export default createAppContainer(Navigation);