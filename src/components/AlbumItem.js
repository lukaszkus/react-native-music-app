import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import Context from "../context/context";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { assets, COLORS, SHADOW } from "../constants";

import Icon from "./Icon";

const AlbumItem = ({ item }) => {
  const navigation = useNavigation();

  const { toggleView, isExistInFav, handleAddToFav, handleRemoveFromFav } =
    useContext(Context);

  return (
    <TouchableOpacity
      style={
        toggleView === 1 ? styles.albumContainerLi : styles.albumContainerCol
      }
      activeOpacity={0.4}
      onPress={() => navigation.navigate("Details", item)}
    >
      <Image
        style={toggleView === 1 ? styles.albumCoverLi : styles.albumCoverCol}
        source={{ uri: `${item["im:image"][2].label}` }}
      />
      <View
        style={
          toggleView === 1 ? styles.textContainerLi : styles.textContainerCol
        }
      >
        <Text
          style={styles.albumTitle}
          numberOfLines={toggleView === 1 ? 2 : 1}
        >
          {item["im:name"].label}
        </Text>
        <Text numberOfLines={1} style={styles.albumArtist}>
          {item["im:artist"].label}
        </Text>
      </View>
      <View
        style={
          toggleView === 2
            ? { flexDirection: "row", alignItems: "center" }
            : null
        }
      >
        <View style={{ flex: 1 }}>
          <Icon
            iconUrl={
              isExistInFav(item) ? assets.heartFavAccent : assets.heartAccent
            }
            iconWidth={toggleView === 1 ? 20 : 22.3}
            iconHeight={toggleView === 1 ? 16.2 : 18}
            handlePress={() =>
              isExistInFav(item)
                ? handleRemoveFromFav(item)
                : handleAddToFav(item)
            }
          />
        </View>
        <View>
          <Icon
            iconUrl={assets.circleArrowRightAccent}
            iconWidth={20}
            iconHeight={20}
          />
        </View>
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
