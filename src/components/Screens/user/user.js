import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React from 'react';

const UserScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
      <ImageBackground
        style={style.headerBackGround}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6FOCo35CJu6oDizL-rBOxFRoB_txplyFcOpAlSP2-qpUJar1J9n0FfZWBvEcCZ_Yz1w&usqp=CAU',
        }}
        blurRadius={3}></ImageBackground>

      <Image
        style={style.avata}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6FOCo35CJu6oDizL-rBOxFRoB_txplyFcOpAlSP2-qpUJar1J9n0FfZWBvEcCZ_Yz1w&usqp=CAU',
        }}
      />
      <View style={style.body}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
          Nguyen Tuan
        </Text>
        <View style={{flex: 1, width: '100%', padding: 10}}>
          <Text style={{color: '#9775FA', fontWeight: 'bold'}}>Name</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderBottomColor: 'silver',
              color: 'black',
              marginBottom: 20,
            }}>
            Nguyen Anh Tuan
          </Text>
          <Text style={{color: '#9775FA', fontWeight: 'bold'}}>Email</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderBottomColor: 'silver',
              color: 'black',
              marginBottom: 20,
            }}>
            tuannaph21878@fpt.edu.vn
          </Text>
          <Text style={{color: '#9775FA', fontWeight: 'bold'}}>Address</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderBottomColor: 'silver',
              color: 'black',
              marginBottom: 20,
            }}>
            Quan Hoan Kiem - Thanh Pho Ha Noi - Viet Nam
          </Text>
          <Text style={{color: '#9775FA', fontWeight: 'bold'}}>Password</Text>
          <Text
            style={{
              borderBottomWidth: 1,
              paddingVertical: 10,
              borderBottomColor: 'silver',
              color: 'black',
              marginBottom: 20,
            }}>
            **************
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  avata: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 200,
    position: 'absolute',
    zIndex: 9999999,
  },

  headerBackGround: {
    width: '100%',
    height: 250,
    // borderWidth: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
  },
  body: {
    marginTop: 55,
    // backgroundColor: 'blue',
    paddingHorizontal: 20,
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

export default UserScreen;
