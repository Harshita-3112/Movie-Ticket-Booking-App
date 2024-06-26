import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const googleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#28282B'}}>
      <Image
        source={require('../../assets/images/login2.jpg')}
        style={{
          height: '50%',
          width: 'auto',
          resizeMode: 'cover',
        }}
      />

      <TouchableOpacity
        onPress={googleSignIn}
        style={{
          height: '7%',
          width: 'auto',
          marginHorizontal: 18,
          borderRadius: 12,
          marginTop: '60%',
          borderWidth: 1,
          borderColor: 'gray',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>Continue with google</Text>
        <Image
          source={require('../../assets/images/google.png')}
          style={{
            height: '100%',
            width: '20%',
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
