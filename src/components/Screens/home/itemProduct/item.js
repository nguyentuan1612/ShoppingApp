import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const ItemProduct = (Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: Props.images[1] }}
        style={{ width: "100%", height: 160, borderRadius: 8 }}
      />
      <Text style={styles.title} numberOfLines={1}>
        {Props.title}
      </Text>
      <Text style={{ fontWeight: "bold", color: "red" }}>
        {"$ " + Props.price}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 171,
    height: 230,
    marginRight: 25,
  },
  title: {
    marginTop: 7,
    marginBottom: 2,
    fontWeight: "bold",
  },
});
export default ItemProduct;