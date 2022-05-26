import { useContext } from "react";
import Context from "../context/context";
import { FlatList, StyleSheet } from "react-native";

import AlbumItem from "./AlbumItem";
import AlbumEmptyItem from "./AlbumEmptyItem";
import Header from "./Header";
import Footer from "./Footer";

const FavList = () => {
  const { favouritesList, toggleView } = useContext(Context);
  return (
    <FlatList
      data={favouritesList}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => <AlbumItem item={item} />}
      initialNumToRender={6}
      showsVerticalScrollIndicator={false}
      numColumns={toggleView}
      key={toggleView}
      // ListHeaderComponent={<Header />}
      ListEmptyComponent={<AlbumEmptyItem />}
      columnWrapperStyle={toggleView === 1 ? null : styles.listContainer}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
};

export default FavList;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "space-between",
  },
});
