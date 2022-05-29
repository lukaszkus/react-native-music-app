import { useContext } from "react";
import Context from "../context/context";
import { StatusBar, SafeAreaView, StyleSheet, View } from "react-native";

import { BottomMenu, FavList, Header, Icon } from "../components";

import { assets } from "../constants";

const Favourites = ({ navigation }) => {
  const { handleToggleListView, handleToggleColumnView } = useContext(Context);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FavList />
        </View>

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
          <View>
            <Header title="Favourites" />
          </View>
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
    width: "100%",
    zIndex: 1,
  },
});
