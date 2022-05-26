import {
  FlatList,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { BottomMenu, Icon } from "../components";

import { assets } from "../constants";

const Favourites = ({ route, navigation }) => {
  const favouritesList = route.params;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Favourites</Text>
      <FlatList
        data={favouritesList}
        keyExtractor={(item) => item.id.attributes["im:id"]}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item["im:artist"].label}</Text>
            <Text>Id: {item.id.attributes["im:id"]}</Text>
          </View>
        )}
      />
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
