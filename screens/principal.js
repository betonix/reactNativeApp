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
  TouchableOpacity,
  ImageBackground 

} from 'react-native';

var width = Dimensions.get('screen').width;

export default class Login extends Component {

  static navigatorStyle = {
    drawUnderNavBar: true,
    navBarTranslucent: true
  };
  
    constructor(props){
      super(props);
      this.state = {width:60},
	  
	  Dimensions.addEventListener('change', (e) => {
	  const { width, height } = e.window;
	   this.setState({width, height});
	  })
    }
    
	
	
    createCount(){


    }


  render() {

    this.props.navigator.setStyle({
      navBarHidden: true, 
    });
    

    return (
	<ImageBackground  style={styles.container2} source={require('../images.jpg')}>

      <View style = {styles.form}>

          <View style={styles.container}>
		  
			 <View style={styles.formTitulo}>
				<Text style={styles.titulo} >picPlay</Text>
				<Text style={styles.subtitulo} >What movie is this?</Text>
			</View>	
			
            <View style={styles.formLogin}>
			
             <TouchableHighlight underlayColor = {'rgb(255, 51, 153)'} activeOpacity={1} style={styles.create} onPress={this.createCount}>
				 <Text style={styles.textButton}>Create Account</Text>
			 </TouchableHighlight>
			 
			 <View style={styles.guestview}>
				<Text style={styles.guest} >or continue as Guest</Text>
			 </View>
			 
			</View>
          </View>
      </View>
	  </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({

  container:{
    flex            : 1,
    alignItems      : 'center',
    justifyContent  : 'center'
  },
  container2: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
	
	
  },

  form:{
   flex            : 1,
   backgroundColor: 'rgba(0,0,0,0.4)',
   width:width
  },

  input : {
    width : width - 40,
    height :60,
   
  },
  textButton:{
	fontWeight : 'bold',
    fontSize : 20,
	color:'white'
  },
  formTitulo:{
	flex:2,
	justifyContent:'center'
  },
  
  formLogin:{
	flex:1
  },

  titulo:{
    fontWeight : 'bold',
    fontSize : 40,
	color:'white'
  },
  
  subtitulo:{
    //fontWeight : 'bold',
    fontSize : 15,
	color:'white'
  },

  loginMsg:{
    color : 'red'
  },
  
  guest:{
	alignItems:'center',
	color:'white',
	fontSize:18,
	marginTop:25,
	opacity:0.5
  },
  
  guestview:{
	alignItems:'center'

  },
  
  create:{
	borderRadius:10,
	justifyContent:'center',
	alignItems:'center',
	height:50,
    width : width-50,
	backgroundColor:'#FF69B4'
  }

});
