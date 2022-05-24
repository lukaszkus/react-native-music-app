import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  Image,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import axios from "axios";

import { AlbumList, Icon } from "../components";

import { assets, COLORS } from "../constants";

const endpointURL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  const [search, setSearch] = useState("");
  const [toggleView, setToggleView] = useState(1);
  const navigation = useNavigation();

  // console.log(filter);
  // console.log(lastUpdate);

  const windowWidth = Dimensions.get("window").width / 2;
  const windowHeight = Dimensions.get("window").height / 2;

  //get data
  useEffect(() => {
    axios
      .get(endpointURL)
      .then((res) => {
        let data = res.data.feed.entry;
        let update = res.data.feed.updated.label;
        // console.log(data);
        setData(data);
        setLastUpdate(update);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //real time input search
  const searchedData = data.filter((item) => {
    return item.title.label.includes(search);
  });

  //fiter data
  const filterCategory = [
    ...new Set(data.map((item) => item.category.attributes.label)),
  ];
  // console.log(filterCategory);

  //change list view to grid view
  const handleToggleListView = () => {
    setToggleView(1);
  };

  const handleToggleColumnView = () => {
    setToggleView(2);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            zIndex: 0,
          }}
        >
          {isLoading ? (
            <ActivityIndicator
              size={60}
              color={COLORS.accent}
              style={{ top: windowHeight }}
            />
          ) : (
            <AlbumList
              data={searchedData}
              search={search}
              setSearch={setSearch}
              lastUpdate={lastUpdate}
              toggleView={toggleView}
            />
          )}
        </View>

        <View
          style={{
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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.5,
            shadowRadius: 10,
            elevation: 24,
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Icon
              iconUrl={assets.home}
              iconWidth={30}
              iconHeight={30}
              handlePress={() => setSearch("")}
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

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{
              height: 240,
              backgroundColor: COLORS.accent,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              source={assets.splashbg}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
