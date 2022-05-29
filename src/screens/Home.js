import React, { useEffect, useContext } from "react";
import Context from "../context/context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import {
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

import { AlbumList, BottomMenu, Header, Icon } from "../components";
import { assets, COLORS } from "../constants";

const endpointURL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

const windowHeight = Dimensions.get("window").height / 2;

const Home = () => {
  const navigation = useNavigation();

  const {
    setData,
    isLoading,
    setLoading,
    setLastUpdate,
    handleToggleListView,
    handleToggleColumnView,
  } = useContext(Context);

  //get data
  useEffect(() => {
    axios
      .get(endpointURL)
      .then((res) => {
        let data = res.data.feed.entry;
        let update = res.data.feed.updated.label;
        setData(data);
        setLastUpdate(update);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator
          size={60}
          color={COLORS.accent}
          style={{ top: windowHeight - 30 }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0 }}>
            <AlbumList />
          </View>

          <BottomMenu>
            <Icon
              iconUrl={assets.heart}
              iconWidth={30}
              iconHeight={30}
              marginH={10}
              handlePress={() => navigation.navigate("Favourites")}
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
              <Header />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

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
