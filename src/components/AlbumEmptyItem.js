import { View, StyleSheet, Text } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const AlbumEmptyItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Not found!</Text>
      <Text style={styles.textRegular}>Please try to type something else.</Text>
    </View>
  );
};

export default AlbumEmptyItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: COLORS.white,
    padding: 20,
    height: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 24,
  },

  textBold: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    color: COLORS.darkGray,
  },

  textRegular: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: COLORS.darkGray,
  },
});
