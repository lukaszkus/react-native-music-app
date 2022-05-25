import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { assets, COLORS, SHADOW } from "../constants";

import Button from "./Button";

const AlbumItem = ({ item, toggleView, handleAddToFav }) => {
  const navigation = useNavigation();

  // onPress={() =>
  //   navigation.navigate('SecondPage', {
  //     paramKey: userName,
  //   })
  // }

  return (
    <TouchableOpacity
      style={
        toggleView === 1 ? styles.albumContainerLi : styles.albumContainerCol
      }
      activeOpacity={0.6}
      onPress={() =>
        navigation.navigate("Details", {
          data: item,
          handleAddToFav: handleAddToFav,
        })
      }>
      <Image
        style={toggleView === 1 ? styles.albumCoverLi : styles.albumCoverCol}
        source={{ uri: `${item["im:image"][2].label}` }}
      />
      <View
        style={
          toggleView === 1 ? styles.textContainerLi : styles.textContainerCol
        }>
        <Text
          style={styles.albumTitle}
          numberOfLines={toggleView === 1 ? 2 : 1}>
          {item["im:name"].label}
        </Text>
        <Text numberOfLines={1} style={styles.albumArtist}>
          {item["im:artist"].label}
        </Text>
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Button
          iconUrl={assets.arrowRight}
          buttonWidth={25}
          buttonHeight={25}
          iconWidth={10}
          iconHeight={10}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AlbumItem;

const styles = StyleSheet.create({
  albumContainerLi: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: COLORS.white,
    padding: 12,
    ...SHADOW,
  },

  albumContainerCol: {
    width: "47%",
    flexDirection: "column",
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: COLORS.white,
    padding: 12,
    ...SHADOW,
  },

  albumCoverLi: {
    width: 85,
    height: 85,
    borderRadius: 10,
  },

  albumCoverCol: {
    width: 125,
    height: 125,
    borderRadius: 10,
  },

  textContainerLi: {
    flex: 1,
    paddingHorizontal: 12,
  },

  textContainerCol: {
    flex: 1,
    paddingTop: 12,
    paddingBottom: 6,
  },

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
