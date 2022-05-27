import React from "react";
import { Image, TouchableOpacity } from "react-native";

const Icon = ({ iconUrl, iconWidth, iconHeight, handlePress, marginH }) => {
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.4}>
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
