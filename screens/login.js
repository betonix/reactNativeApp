/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Button,
  AsyncStorage,
  TouchableHighlight,
  TouchableOpacity

} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };
  
    constructor(props){
      super(props);
      this.state = {
        usuario : '',
        senha : ''
      }
    }
    
    login(){

      const loginInfo = {

        method : 'POST',
        body   : JSON.stringify({
          "email": "peter@klaven",
          "password": "cityslicka"
      })

      }

      fetch( 'http://192.168.15.13:3000/login',loginInfo)
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson);// your JSON response is here   
           console.warn(responseJson);
           AsyncStorage.setItem('usuario','betonix');
           return AsyncStorage.getItem('usuario');

        }).then(usuario=>{

           this.setState({mensagem:'Erro no login'});
          /* this.props.navigator.push({screen:'Game1',animated: true, // does the pop have transition animation or does it happen immediately (optional)
           animationType: 'slide-horizontal',})
          /*this.props.navigator.showInAppNotification({
            screen: "Loginn", // unique ID registered with Navigation.registerScreen
            passProps: {}, // simple serializable object that will pass as props to the in-app notification (optional)
            autoDismissTimerSec: 2 // auto dismiss notification in seconds
           });*/
        })

    }


  render() {

    this.props.navigator.setStyle({
      navBarHidden: true, 
    });
    

    return (
      <View style = {styles.form}>

          <View style={styles.container}>

            <Text style={styles.titulo} >picPlay</Text>

            <View style={styles.formLogin}>

              <TextInput style={styles.input} placeholder = "Usuario..." onChangeText={ texto=> this.setState({usuario:texto})}/>

              <TextInput style={styles.input} placeholder = "Senha..." secureTextEntry = {true} onChangeText={ senha=> this.setState({senha:senha})}/>

             </View>
            <Button style={styles.buttonLogin}  onPress={this.login.bind(this)} title="Login"/>

             <Text style={styles.loginMsg} >{this.state.mensagem}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex            : 1,
    alignItems      : 'center',
    justifyContent  : 'center'
  },

  form:{
   flex            : 1
  },

  input : {
    width : width - 40,
    height :60,
   
  },

  formLogin:{
    marginBottom : 50,
  },

  titulo:{
    fontWeight : 'bold',
    fontSize : 40,
    marginBottom : 20
  },

  loginMsg:{
    color : 'red',
    marginTop : 20
  },
  buttonLogin:{
    width : width
  }

});
