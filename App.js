import React, {Component} from 'react';
import { StyleSheet, Text, View }  from 'react-native';
import Navigation from './navigation/Navigation.js';
import * as Font from 'expo-font';
import myReducer from './redux/reducers/index';
import { createStore } from 'redux'; 
import {Provider} from 'react-redux';
const store = createStore(myReducer);

import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCvFtWbpB8dofoADvmS_QCCFd7hA9rXjCA",
    authDomain: "airbnb-de457.firebaseapp.com",
    databaseURL: "https://airbnb-de457.firebaseio.com",
    projectId: "airbnb-de457",
    storageBucket: "airbnb-de457.appspot.com",
    messagingSenderId: "664703296818",
    appId: "1:664703296818:web:dff4980ea622753d86a32b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'OpenSans-Bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Light': require('./assets/Fonts/OpenSans-Light.ttf')
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
        <View style={{flex: 1}}>
          {
            this.state.fontLoaded ? 
              <Provider store={store}>
                <Navigation />
              </Provider>
            : null
          }
        </View>
    )
  }
}