import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";

import { Button } from "../components";

import { assets, COLORS } from "../constants";

const Details = ({ route, navigation }) => {
  const data = route.params;

  console.log(data);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: `${data["im:image"][2].label}` }}
          style={styles.bluredImage}
          resizeMode="cover"
          blurRadius={2}
        />
        <View style={styles.buttonsContainer}>
          <Button
            iconUrl={assets.arrowLeft}
            iconHeight={15}
            iconWidth={15}
            handlePress={() => navigation.goBack()}
          />
          <Button iconUrl={assets.heart} iconHeight={20} iconWidth={20} />
        </View>

        <View style={styles.albumCoverContainer}>
          <Image
            style={styles.albumCover}
            source={{ uri: `${data["im:image"][2].label}` }}
          />
        </View>
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTitle}>{data["im:name"].label}</Text>
        <Text style={styles.headingArtist}>{data["im:artist"].label}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 240,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bluredImage: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  albumCoverContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    position: "absolute",
    bottom: -60,
    left: 20,
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
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  headingContainer: {
    padding: 20,
    marginTop: 60,
  },
  headingTitle: { fontFamily: "Poppins_700Bold", fontSize: 24 },
  headingArtist: { fontFamily: "Poppins_400Regular", fontSize: 14 },

  buttonsContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
