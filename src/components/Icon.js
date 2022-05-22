import React from "react";
import { Image, TouchableOpacity } from "react-native";

const Icon = ({ iconUrl, iconWidth, iconHeight, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={iconUrl}
        style={{ width: iconWidth, height: iconHeight }}
      />
    </TouchableOpacity>
  );
};

export default Icon;
