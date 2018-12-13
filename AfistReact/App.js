/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, KeyboardAvoidingView, Image, TextInput,} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TeomanForm from './app/component/TeomanForm';


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
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <View style={styles.loginContainer}>
                <Image resizeMode="contain" style={styles.logo} source={require('./app/images/teoman.png')} />

            </View>
            <View style={styles.formContainer}>
               <TeomanForm />
            </View>


        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3389EE',
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        margin: 50

    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,

    },
    title:{
        color: "#FFF",
        marginTop: 120,
        width: 180,
        textAlign: 'center',
        opacity: 0.9
    }
});

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

