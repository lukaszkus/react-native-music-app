import { useContext } from "react";
import Context from "../context/context";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../constants";

const Footer = ({ title }) => {
  const { lastUpdate } = useContext(Context);
  const date = lastUpdate.slice(0, 10);

  return (
    <View style={styles.footerContainer}>
      {title ? null : (
        <Text style={styles.footerText}>Latest update: {date}</Text>
      )}
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
