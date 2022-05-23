import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import { COLORS } from "../constants";

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
      onPress={handlePress}
    >
      {title ? (
        <Text
          style={{
            color: COLORS.white,
            paddingVertical: 12,
            paddingHorizontal: 35,
          }}
        >
          {title}
        </Text>
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
