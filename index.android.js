/**
 * EveInsta
 * https://github.com/BVPMOSC/Eveinsta
 * created by BVPMOSC
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import App from './App/App'
import { StackNavigator } from 'react-navigation';
import AddScreen from './App/Add'

class Eveinsta extends Component {


  render() {
     const { navigate } = this.props.navigation;
    return (<App nav={navigate}/>);

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const SimpleApp = StackNavigator({ Home: { screen: Eveinsta,navigationOptions: { header: null } }, AddScreen: { screen: AddScreen }},
 {
  initialRouteName: 'Home',

});

AppRegistry.registerComponent('Eveinsta', () => SimpleApp);
