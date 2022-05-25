import React from "react";
import { Image, TouchableOpacity } from "react-native";

const Icon = ({ iconUrl, iconWidth, iconHeight, handlePress, marginH }) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <Image
        source={iconUrl}
        style={{
          width: iconWidth,
          height: iconHeight,
          marginHorizontal: marginH,
        }}
      />
    </TouchableOpacity>
  );
};

export default Icon;
