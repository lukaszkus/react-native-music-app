import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import axios from "axios";

const endpointURL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(endpointURL)
      .then((res) => {
        let data = res.data.feed.entry;
        // console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 28, width: "100%" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.attributes["im:id"]}
          renderItem={({ item }) => (
            <View
              style={{
                marginHorizontal: 20,
                flexDirection: "row",
                borderRadius: 5,
                marginBottom: 24,
                backgroundColor: "white",
              }}>
              <Image
                source={{
                  uri: `${item["im:image"][2]["label"]}`,
                }}
                style={{ width: 100, height: 100, borderRadius: 5 }}
              />
              <View style={{ flex: 3 }}>
                <Text style={{ fontSize: 16 }} numberOfLines={1}>
                  {item["im:name"]["label"]}
                </Text>
                <Text numberOfLines={1} style={{ fontSize: 12 }}>
                  {item["im:artist"]["label"]}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
