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

import { AlbumList, BottomMenu, Icon } from "../components";

import { assets, COLORS } from "../constants";

const endpointURL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [lastUpdate, setLastUpdate] = useState("");
  const [search, setSearch] = useState("");
  const [toggleView, setToggleView] = useState(1);
  const [favourites, setFavourites] = useState([]);
  const navigation = useNavigation();

  // console.log(filter);
  // console.log(lastUpdate);

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

  //add to favourites
  const handleAddToFav = (album) => {
    setFavourites([...favourites, album]);
    console.log(
      `added + ${album["im:name"].label} + id: ${album.id.attributes["im:id"]}`
    );
  };

  //remove from favourites
  const handleRemoveFromFav = (album) => {
    const favList = favourites.filter(
      (item) => item.id.attributes["im:id"] !== album.id.attributes["im:id"]
    );
    setFavourites(favList);
    console.log("removed");
  };

  //is album exist in favourites
  const isExistInFav = (album) => {
    if (
      favourites.filter(
        (item) => item.id.attributes["im:id"] === album.id.attributes["im:id"]
      ).lenght > 0
    ) {
      return true;
    } else {
      return false;
    }
  };

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
          <View
            style={{
              zIndex: 0,
            }}
          >
            <AlbumList
              data={searchedData}
              search={search}
              setSearch={setSearch}
              lastUpdate={lastUpdate}
              toggleView={toggleView}
              handleAddToFav={handleAddToFav}
              handleRemoveFromFav={handleRemoveFromFav}
              isExistInFav={isExistInFav}
            />
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
});
