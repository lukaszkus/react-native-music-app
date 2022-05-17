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
      const response = await fetch("https://reactnative.dev/movies.json");
      const json = await response.json();
      setData(json.movies);
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
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      )}
    </View>
  );
};

export default Home;
