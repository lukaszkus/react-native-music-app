import { useContext } from "react";
import Context from "../context/context";
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
import { useNavigation } from "@react-navigation/native";

import { assets, COLORS, SHADOW } from "../constants";
import { BottomMenu, Button, Icon } from "../components";

const Details = ({ route }) => {
  const navigation = useNavigation();
  const item = route.params;

  const { isExistInFav, handleAddToFav, handleRemoveFromFav } =
    useContext(Context);

  const artistLink = item["im:artist"]?.attributes;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${item["im:image"][2].label}` }}
            style={styles.bluredImage}
            blurRadius={2}
            resizeMode="cover"
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
              iconUrl={isExistInFav(item) ? assets.heartFav : assets.heart}
              buttonWidth={45}
              buttonHeight={45}
              iconHeight={25}
              iconWidth={25}
              handlePress={() =>
                isExistInFav(item)
                  ? handleRemoveFromFav(item)
                  : handleAddToFav(item)
              }
            />
          </View>

          <View style={styles.albumCoverContainer}>
            <Image
              style={styles.albumCover}
              source={{ uri: `${item["im:image"][2].label}` }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.albumInfoContainer}>
            <View style={{ marginRight: 10 }}>
              <Text style={styles.categoryText}>Genre:</Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {item.category.attributes.label.toUpperCase()}
              </Text>
            </View>
            <View>
              <Text style={styles.categoryText}>Release date:</Text>
              <Text
                style={{
                  fontFamily: "Poppins_400Regular",
                }}
              >
                {item["im:releaseDate"].attributes.label.toUpperCase()}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.headingContainer}>
          <View>
            <Text style={styles.categoryText}>Album:</Text>
            <Text style={styles.headingTitle}>{item["im:name"].label}</Text>
            <Text style={styles.categoryText} numberOfLines={2}>
              {item.rights.label}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.categoryText}>Artist:</Text>
            <Text style={styles.headingArtist}>{item["im:artist"].label}</Text>
          </View>
        </View>
      </ScrollView>
      <BottomMenu>
        <Icon
          iconUrl={assets.home}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => navigation.navigate("Home")}
        />
        <Icon
          iconUrl={assets.heart}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => navigation.navigate("Favourites")}
        />
        {artistLink === undefined ? null : (
          <Icon
            iconUrl={assets.artist}
            iconWidth={35}
            iconHeight={35}
            marginH={10}
            handlePress={() =>
              WebBrowser.openBrowserAsync(item["im:artist"].attributes.href)
            }
          />
        )}
        <Icon
          iconUrl={assets.album}
          iconWidth={35}
          iconHeight={35}
          marginH={10}
          handlePress={() =>
            WebBrowser.openBrowserAsync(item.link.attributes.href)
          }
        />
      </BottomMenu>
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
    height: 320,
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
    borderRadius: 12,
    padding: 2,
    backgroundColor: COLORS.white,
    position: "absolute",
    bottom: -80,
    left: 20,
    ...SHADOW,
  },

  albumCover: {
    width: "100%",
    height: "100%",
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
    fontSize: 24,
    fontFamily: "Poppins_700Bold",
    color: COLORS.darkGray,
    lineHeight: 30,
    paddingVertical: 3,
  },

  headingArtist: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: COLORS.darkGray,
    lineHeight: 20,
    paddingVertical: 3,
  },

  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
});
