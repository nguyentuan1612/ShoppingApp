import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, Component} from 'react';
import ItemProduct from '../itemProduct/item';

const AllProductScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const callApi = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/products');
      const json = await response.json();
      setData(json);
      setFilterData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    callApi();
  }, []);

  const handleSearch = text => {
    if (text) {
      const arrNew = filterData.filter(item => {
        return item.title.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });
      setData(arrNew);
    } else {
      setData(filterData);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search...."
        onChangeText={text => {
          handleSearch(text);
        }}
      />
      {loading ? (
        <ActivityIndicator style={{flex: 1}} size="large" />
      ) : data.length !== 0 ? (
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
      ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            No Result Found
          </Text>
        </View>
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
export default AllProductScreen;
