import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

import { assets, COLORS } from "../constants";
import Icon from "./Icon";

const Header = ({ filter, setFilter }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoContainer}>
        <Image style={styles.headerLogo} source={assets.logoWhite} />
        <Icon iconUrl={assets.filter} iconWidth={23} iconHeight={30} />
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={assets.searchDark} />
          <TextInput
            style={styles.input}
            placeholder="Type to search albums"
            value={filter}
            onChangeText={setFilter}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  headerLogo: {
    width: 62,
    height: 45,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 24,
  },
  inputTitle: {
    paddingVertical: 10,
  },
  input: {
    flex: 1,
  },
  inputIcon: {
    width: 15,
    height: 15,
    marginHorizontal: 8,
  },
});
