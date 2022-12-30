import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import ItemProduct from '../itemProduct/item';

const FurnitureScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const callApi = async () => {
    try {
      const response = await fetch(
        'https://api.escuelajs.co/api/v1/categories/3/products',
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Search...." />
      {loading ? (
        <ActivityIndicator style={{flex: 1}} size="large" />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('showProduct', {
                    id: item.id,
                    image: item.images[1],
                  });
                }}>
                <ItemProduct
                  title={item.title}
                  price={item.price}
                  images={item.images}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    paddingLeft: 15,
    borderRadius: 8,
    borderColor: '#787878',
    marginBottom: 25,
  },
});

export default FurnitureScreen;
