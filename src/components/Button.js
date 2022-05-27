import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS, SHADOW } from "../constants";

const Button = ({
  iconUrl,
  buttonWidth,
  buttonHeight,
  iconWidth,
  iconHeight,
  handlePress,
  title,
}) => {
  return (
    <TouchableOpacity
      style={{ ...styles.container, width: buttonWidth, height: buttonHeight }}
      activeOpacity={0.4}
      onPress={handlePress}>
      {title ? (
        <Text style={styles.buttonTitle}>{title}</Text>
      ) : (
        <Image
          source={iconUrl}
          style={{ width: iconWidth, height: iconHeight }}
        />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    backgroundColor: COLORS.accent,
    justifyContent: "center",
    alignItems: "center",
    ...SHADOW,
  },
  buttonTitle: {
    color: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 35,
  },
});
