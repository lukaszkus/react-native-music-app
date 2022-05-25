import { StyleSheet, View } from "react-native";

import { COLORS, SHADOW } from "../constants";

const BottomMenu = ({ children }) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.iconsContainer}>{children}</View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    alignItems: "center",
  },
  iconsContainer: {
    position: "absolute",
    zIndex: 1,
    bottom: 25,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: COLORS.accent,
    ...SHADOW,
  },
});
