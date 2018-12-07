/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class AkifeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Akife</Text>
      </View>
    );
  }
}

class FurkanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Furkan</Text>
      </View>
    );
  }
}

class IkbalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>İkbal</Text>
      </View>
    );
  }
}

class SalihScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Salih</Text>
      </View>
    );
  }
}

class TeomanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Teoman</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Akife: AkifeScreen,
  Furkan: FurkanScreen,
  Ikbal: IkbalScreen,
  Salih: SalihScreen,
  Teoman: TeomanScreen

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Akife') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Furkan') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Ikbal') {
        if(focused) {
          iconName = `ios-information-circle`;

        }
        else {
          iconName = `md-notifications-outline`;
        }
        
      }
      else if (routeName === 'Salih') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Teoman') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'gray',
  },
}
);

export default createAppContainer(TabNavigator);

