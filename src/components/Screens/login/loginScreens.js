import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const LoginScreens = ({navigation}) => {
  return (
    <View style={styels.contaoner}>
      <Image style={styels.image} source={require('../../../images/logo.jpg')} />
      <View style={styels.body}>
        <TextInput style={styels.textInput} placeholder="Email" />
        <TextInput style={styels.textInput} placeholder="Password" />
        <TouchableOpacity onPress={() => {
            navigation.navigate('RootMain');
        }}>
          <Text style={styels.login}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styels = StyleSheet.create({
  contaoner: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginTop: 120,
  },

  body: {
    width: '100%',
    marginTop: 50,
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'silver',
    marginVertical: 8,
    paddingLeft: 10,
    borderRadius: 8,
  },

  login: {
    width: '100%',
    backgroundColor: '#9775FA',
    height: 53,
    borderRadius: 8,
    textAlign: 'center',
    lineHeight: 53,
    color: 'white',
    fontSize: 17,
  },
});
export default LoginScreens;
