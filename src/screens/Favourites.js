import { StatusBar, SafeAreaView, StyleSheet, Text } from "react-native";

import { BottomMenu, Icon } from "../components";

import { assets } from "../constants";

const Favourites = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Favourites</Text>
      <BottomMenu>
        <Icon
          iconUrl={assets.home}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => navigation.navigate("Home")}
        />
      </BottomMenu>
    </SafeAreaView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
