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
  FlatList,
  TouchableOpacity

} from 'react-native';

import SocketIOClient from 'socket.io-client/dist/socket.io.js';

import {SharedElementTransition} from 'react-native-navigation';


var time = '';
const width = Dimensions.get('screen').width;
var socket = null;

export default class Game1 extends Component<Props> {

    constructor(props){
      super(props);
      this.state = {
        countdown : time,
        data : [{game:'Resta 1'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'},{game:'outro'}]
      };      
      socket = SocketIOClient('http://192.168.0.15:3000',{jsonp:false})
      socket.emit('joinRoom', 'resta1');

      socket.on('message', function(data){
        console.warn(data)
      })

    };
    
    _onPressButton(){  
      const loginInfo = {
		headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
        method : 'POST',
        body   : JSON.stringify({
          "email": "peter@klaven",
          "password": "cityslicka"
      })

      }
        socket.emit('message', 'Hello world!');
        fetch( 'http://192.168.0.15:3000/create',loginInfo)
        .then((response) => response.json())
        .then((responseJson) => {
           console.warn(responseJson);
        })
    }


  render() {

    this.props.navigator.setStyle({
      navBarHidden: true, 
    });

    return (
          <View style={styles.container}>
            <FlatList
              data={this.state.data}
              renderItem={({item}) => 
              <TouchableOpacity onPress={this._onPressButton}>
                <View key={item.game} style = {styles.boxGame}>
                    <Text style = {styles.games} >{item.game}</Text>
                </View>
              </TouchableOpacity>
            
            } keyExtractor={(item, index) => index}
            />
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

  boxGame:{
   flex            : 1,
   alignItems : 'center',
   backgroundColor: '#7ec0ee',
   width : width,
   height : 70,
   borderBottomColor : 'pink',
   borderWidth : 1
  },

  input : {
    width : width,
    height :40,
   
  },

  formLogin:{
    marginBottom : 15,
  },

  games:{
    fontWeight : 'bold',
    fontSize : 20
  },

  loginMsg:{
    color : 'red',
    marginTop : 20
  }

});
