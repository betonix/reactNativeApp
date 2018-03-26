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

} from 'react-native';


const width = Dimensions.get('screen').width;

export default class Login extends Component<Props> {

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
        }),

        headers : new Headers({
          'Content-yype' : 'application/json'
        })

      }

      fetch( 'https://reqres.in/api/login',loginInfo)
        .then(response => {       
           
           AsyncStorage.setItem('usuario','betonix');
           return AsyncStorage.getItem('usuario');

        }).then(usuario=>{
          this.setState({mensagem:'Erro no login'});
          console.warn(usuario);
        })
    }


  render() {


    return (
      <View style = {styles.form}>

          <View style={styles.container}>

            <Text style={styles.titulo} >picplay</Text>

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
    width : width,
    height :40,
   
  },

  formLogin:{
    marginBottom : 15,
  },

  titulo:{
    fontWeight : 'bold',
    fontSize : 40,
    marginBottom : 20
  },

  loginMsg:{
    color : 'red',
    marginTop : 20
  }

});
