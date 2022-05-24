import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";

import { assets, COLORS } from "../constants";
import { Button } from "../components";

const Details = ({ route, navigation }) => {
  const data = route.params;

  const artistLink = data["im:artist"]?.attributes;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
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
              buttonWidth={45}
              buttonHeight={45}
              iconHeight={18}
              iconWidth={18}
              handlePress={() => navigation.goBack()}
            />
            <Button
              iconUrl={assets.heart}
              buttonWidth={45}
              buttonHeight={45}
              iconHeight={25}
              iconWidth={25}
            />
          </View>

          <View style={styles.albumCoverContainer}>
            <Image
              style={styles.albumCover}
              source={{ uri: `${data["im:image"][2].label}` }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.albumInfoContainer}>
            <View style={{ marginRight: 10 }}>
              <Text style={styles.categoryText}>Genre:</Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}>
                {data.category.attributes.label.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.categoryText}>Release date:</Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}>
                {data["im:releaseDate"].attributes.label.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.categoryText}>Album:</Text>
            <Text style={styles.headingTitle}>{data["im:name"].label}</Text>
            <Text style={styles.categoryText} numberOfLines={2}>
              {data.rights.label}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.categoryText}>Artist:</Text>
            <Text style={styles.headingArtist}>{data["im:artist"].label}</Text>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            marginBottom: 30,
            width: "100%",
          }}>
          <Text style={{ ...styles.categoryText, marginBottom: 10 }}>
            View on Apple Music:
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Button
              title="Go to ALBUM"
              buttonWidth="auto"
              buttonHeight="auto"
              handlePress={() =>
                WebBrowser.openBrowserAsync(data.link.attributes.href)
              }
            />
            {artistLink === undefined ? null : (
              <Button
                title="Go to ARTIST"
                buttonWidth="auto"
                buttonHeight="auto"
                handlePress={() =>
                  WebBrowser.openBrowserAsync(data["im:artist"].attributes.href)
                }
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // flex: 1,
  },

  imageContainer: {
    height: 340,
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
    flex: 1,
    width: 150,
    height: 150,
    borderRadius: 10,
    position: "absolute",
    bottom: -80,
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

  albumInfoContainer: {
    position: "absolute",
    left: 190,
    bottom: -85,
  },

  headingContainer: {
    padding: 20,
    marginTop: 75,
  },

  categoryText: {
    fontSize: 10,
    color: COLORS.darkGray,
    fontFamily: "Poppins_300Light_Italic",
    lineHeight: 15,
    marginBottom: -3,
  },

  headingTitle: {
    fontFamily: "Poppins_700Bold",
    fontSize: 24,
    lineHeight: 30,
    paddingVertical: 3,
  },

  headingArtist: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    lineHeight: 20,
    paddingVertical: 3,
  },

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
