import { Dimensions, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { assets, COLORS, SHADOW } from "../constants";

import Icon from "./Icon";

const windowWidth = Dimensions.get("window").width / 2;

const BottomMenu = ({ handleToggleListView, handleToggleColumnView }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <View style={styles.iconsContainer}>
        <Icon
          iconUrl={assets.home}
          iconWidth={30}
          iconHeight={30}
          handlePress={() => navigation.navigate("Home")}
        />
        <Icon
          iconUrl={assets.heart}
          iconWidth={30}
          iconHeight={30}
          handlePress={() => navigation.navigate("Favourites")}
        />
        <Icon
          iconUrl={assets.list}
          iconWidth={30}
          iconHeight={30}
          handlePress={() => handleToggleListView()}
        />
        <Icon
          iconUrl={assets.tiles}
          iconWidth={30}
          iconHeight={30}
          handlePress={() => handleToggleColumnView()}
        />
      </View>
    </View>
  );
};

export default BottomMenu;

const styles = StyleSheet.create({
  menuContainer: {
    zIndex: 1,
    backgroundColor: COLORS.accent,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 15,
    left: windowWidth - 110,
    width: 220,
    height: 54,
    borderRadius: 30,
    ...SHADOW,
  },
  iconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
