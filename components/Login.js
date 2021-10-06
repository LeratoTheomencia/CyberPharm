import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import BackGroundImage from '../components/BackGroundImage'
const Login = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/bgOne.png')} style={styles.image}/>
      <TextInput>
        
          
        
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    position:'absolute',
    width:'240%',
    height:'100%',
  }
});

export default Login;
// C:\Users\lerat\Desktop\Projects\CyberPharm\components\BackGroundImage.js