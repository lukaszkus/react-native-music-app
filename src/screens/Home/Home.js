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
    <SafeAreaView style={{ flex: 1, marginTop: 28 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.attributes["im:id"]}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 20 }}>
              <Image
                source={{
                  uri: `${item["im:image"][1]["label"]}`,
                }}
                style={{ width: 60, height: 60 }}
              />
              <Text>{item.title["label"]}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
