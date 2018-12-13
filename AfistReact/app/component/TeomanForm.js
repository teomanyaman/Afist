import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';

class TeomanForm extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
          <TextInput style = {styles.input}
                     autoCapitalize="none"
                     onSubmitEditing={() => this.passwordInput.focus()}
                     autoCorrect={false}
                     keyboardType='email-address'
                     returnKeyType="next"
                     placeholder='Email veya Numara giriniz'
                     placeholderTextColor='rgba(225,225,225,0.7)'/>

          <TextInput style = {styles.input}
                     returnKeyType="go" ref={(input)=> this.passwordInput = input}
                     placeholder='Parola'
                     placeholderTextColor='rgba(225,225,225,0.7)'
                     secureTextEntry/>
          <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
            <Text  style={styles.buttonText}>Giriş</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const onButtonPress = () => {
  Alert.alert('Giriş butonuna basıldı.');
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonContainer:{
    backgroundColor: '#FFBE51',
    paddingVertical: 15
  },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  loginButton:{
    backgroundColor:  '#FFBE51',
    color: '#fff'
  }

});

export default TeomanForm;