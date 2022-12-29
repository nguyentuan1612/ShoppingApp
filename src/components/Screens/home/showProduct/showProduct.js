import {
    View,
    Text,
    ActivityIndicator,
    StyleSheet,
    ScrollView,
    Image,
    ImageBackground,
    TouchableOpacity,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  const ShowProductScreen = ({ route, navigation }) => {
    //Get paramaters
    const { id, image } = route.params;
  
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
  
    const callData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products/" + id + ""
        );
        const Json = await response.json();
        setData(Json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    useEffect(() => {
      callData();
    }, []);
    const [dataImage, setdataImage] = useState(image);
    const [flag, setflag] = useState(null);
  
    const changeImage = (uri) => setdataImage(uri);
  
    return (
      <View style={styles.container}>
        <ScrollView>
          {isLoading ? (
            <ActivityIndicator size={"large"} style={{flex:1 , alignItems:"center", justifyContent:"center"}} />
          ) : (
            <View>
              <ImageBackground
                source={{ uri: dataImage }}
                style={{ width: "100%", height: 350 }}
                resizeMode={"stretch"}
              >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.back}>
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/2223/2223615.png",
                      }}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                </TouchableOpacity>
              </ImageBackground>
              <View style={styles.body}>
                <Text style={styles.title}>{data.title}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.price}>{"$ " + data.price}</Text>
                  <Image
                    source={{
                      uri: "https://cdn-icons-png.flaticon.com/512/8294/8294893.png",
                    }}
                    style={{ width: 25, height: 25 }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    style={{ width: "31%", height: 110 }}
                    onPress={() => {
                      changeImage(data.images[0]);
                    }}
                  >
                    <Image
                      source={{ uri: data.images[0] }}
                      style={{ width: "100%", height: 110, borderRadius: 8 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
  
                  <TouchableOpacity
                    style={{ width: "31%", height: 110 }}
                    onPress={() => {
                      changeImage(data.images[1]);
                    }}
                  >
                    <Image
                      source={{ uri: data.images[1] }}
                      style={{ width: "100%", height: 110, borderRadius: 8 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
  
                  <TouchableOpacity
                    style={{ width: "31%", height: 110 }}
                    onPress={() => {
                      changeImage(data.images[2]);
                    }}
                  >
                    <Image
                      source={{ uri: data.images[2] }}
                      style={{ width: "100%", height: 110, borderRadius: 8 }}
                      resizeMode="cover"
                    />
                  </TouchableOpacity>
                </View>
                {data.category.name !== "Clothes" ? (
                  <Text></Text>
                ) : (
                  <View>
                    <Text style={styles.title}>Size</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <TouchableOpacity
                        style={{ width: "18%" }}
                        onPress={() => {
                          setflag("s");
                        }}
                      >
                        {flag === "s" ? (
                          <Text style={styles.sizeColor}>s</Text>
                        ) : (
                          <Text style={styles.size}>s</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ width: "18%" }}
                        onPress={() => {
                          setflag("m");
                        }}
                      >
                        {flag === "m" ? (
                          <Text style={styles.sizeColor}>m</Text>
                        ) : (
                          <Text style={styles.size}>m</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ width: "18%" }}
                        onPress={() => {
                          setflag("l");
                        }}
                      >
                        {flag === "l" ? (
                          <Text style={styles.sizeColor}>l</Text>
                        ) : (
                          <Text style={styles.size}>l</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ width: "18%" }}
                        onPress={() => {
                          setflag("xl");
                        }}
                      >
                        {flag === "xl" ? (
                          <Text style={styles.sizeColor}>xl</Text>
                        ) : (
                          <Text style={styles.size}>xl</Text>
                        )}
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{ width: "18%" }}
                        onPress={() => {
                          setflag("2xl");
                        }}
                      >
                        {flag === "2xl" ? (
                          <Text style={styles.sizeColor}>2xl</Text>
                        ) : (
                          <Text style={styles.size}>2xl</Text>
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
  
                <Text style={styles.title}>Description</Text>
                <Text style={styles.description}>{data.description}</Text>
              </View>
            </View>
          )}
        </ScrollView>
        <TouchableOpacity>
          <Text style={styles.buy}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
    },
  
    back: {
      width: 35,
      height: 35,
      backgroundColor: "white",
      borderRadius: 100,
      marginTop: 25,
      marginLeft: 15,
      justifyContent: "center",
      alignItems: "center",
    },
  
    body: {
      paddingHorizontal: 20,
    },
  
    title: {
      fontWeight: "bold",
      fontSize: 18,
      marginTop: 20,
    },
  
    price: {
      fontWeight: "bold",
      color: "red",
      fontSize: 18,
      marginVertical: 15,
    },
  
    size: {
      marginTop: 15,
      width: "100%",
      height: 70,
      backgroundColor: "#F5F6FA",
      borderWidth: 1,
      borderColor: "silver",
      lineHeight: 70,
      textAlign: "center",
      borderRadius: 8,
      fontWeight: "bold",
      fontSize: 19,
    },
  
    sizeColor: {
      marginTop: 15,
      width: "100%",
      height: 70,
      backgroundColor: "#9775FA",
      color: "white",
      lineHeight: 70,
      textAlign: "center",
      borderRadius: 8,
      fontWeight: "bold",
      fontSize: 19,
    },
    description: {
      fontSize: 18,
      marginTop: 15,
    },
    buy: {
      width: "100%",
      height: 50,
      backgroundColor: "#9775FA",
      textAlign: "center",
      lineHeight: 48,
      fontSize: 18,
      fontWeight: "bold",
      color: "white",
    },
  });
  export default ShowProductScreen;