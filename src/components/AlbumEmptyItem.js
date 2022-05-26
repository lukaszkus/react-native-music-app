import { View, StyleSheet, Text } from "react-native";

import { COLORS, SHADOW } from "../constants";

const AlbumEmptyItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Not found!</Text>
    </View>
  );
};

export default AlbumEmptyItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: COLORS.white,
    padding: 20,
    height: 100,
    ...SHADOW,
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
