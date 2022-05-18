import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  SafeAreaView,
  View,
} from "react-native";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getAlbums = async () => {
    try {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/topalbums/limit=3/json"
      );
      const json = await response.json();
      setData(json.feed["entry"]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.attributes["im:id"]}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title["label"]}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
