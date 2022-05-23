import { View, StyleSheet, Text } from "react-native";
import React from "react";

import { COLORS } from "../constants";

const Footer = ({ lastUpdate }) => {
  const date = lastUpdate.slice(0, 10);
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Latest update: {date}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    paddingHorizontal: 20,
    marginBottom: 90,
    alignItems: "center",
  },
  footerText: {
    fontFamily: "Poppins_300Light",
    fontSize: 10,
    color: COLORS.darkGray,
    opacity: 0.5,
  },
});
