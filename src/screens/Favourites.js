import { useContext } from "react";
import Context from "../context/context";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
} from "react-native";

import { FavList, BottomMenu, Icon } from "../components";

import { assets, COLORS } from "../constants";

const Favourites = ({ navigation }) => {
  const { handleToggleListView, handleToggleColumnView } = useContext(Context);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FavList />
      <BottomMenu>
        <Icon
          iconUrl={assets.home}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => navigation.navigate("Home")}
        />
        <Icon
          iconUrl={assets.list}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => handleToggleListView()}
        />
        <Icon
          iconUrl={assets.tiles}
          iconWidth={30}
          iconHeight={30}
          marginH={10}
          handlePress={() => handleToggleColumnView()}
        />
      </BottomMenu>

      <View style={styles.bgContainer}>
        <View style={styles.bgColor}>
          <Image
            style={styles.bgImg}
            source={assets.splashbg}
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  bgContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  bgColor: {
    height: 240,
    backgroundColor: COLORS.accent,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  bgImg: {
    width: "100%",
    height: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
