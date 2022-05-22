import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { COLORS } from "../constants";

const Button = ({ iconUrl, iconWidth, iconHeight, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image
        source={iconUrl}
        style={{ width: iconWidth, height: iconHeight }}
      />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
