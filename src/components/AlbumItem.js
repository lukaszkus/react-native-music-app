import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

import { assets, COLORS } from "../constants";

import Button from "./Button";

const AlbumItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.albumContainer}>
      <Image
        style={styles.albumCover}
        source={{ uri: `${item["im:image"][2].label}` }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.albumTitle} numberOfLines={2}>
          {item["im:name"].label}
        </Text>
        <Text numberOfLines={1} style={styles.albumArtist}>
          {item["im:artist"].label}
        </Text>
      </View>
      <Button
        iconUrl={assets.arrowRight}
        buttonWidth={35}
        buttonHeight={35}
        iconWidth={15}
        iconHeight={15}
        handlePress={() => navigation.navigate("Details", item)}
      />
    </View>
  );
};

export default AlbumItem;

const styles = StyleSheet.create({
  albumContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: COLORS.white,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 24,
  },

  albumCover: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  textContainer: { flex: 1, paddingHorizontal: 12 },

  albumTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 16,
    lineHeight: 18,
    color: COLORS.darkGray,
  },

  albumArtist: {
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
    color: COLORS.darkGray,
  },
});
