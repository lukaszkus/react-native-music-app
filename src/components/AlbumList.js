import { FlatList, StyleSheet } from "react-native";

import AlbumItem from "./AlbumItem";
import AlbumEmptyItem from "./AlbumEmptyItem";
import Header from "./Header";
import Footer from "./Footer";

const AlbumList = ({
  data,
  search,
  setSearch,
  lastUpdate,
  toggleView,
  handleAddToFav,
  handleRemoveFromFav,
  isExistInFav,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => (
        <AlbumItem
          item={item}
          toggleView={toggleView}
          handleAddToFav={handleAddToFav}
          handleRemoveFromFav={handleRemoveFromFav}
          isExistInFav={isExistInFav}
        />
      )}
      initialNumToRender={6}
      showsVerticalScrollIndicator={false}
      numColumns={toggleView}
      key={toggleView}
      ListHeaderComponent={<Header search={search} setSearch={setSearch} />}
      ListEmptyComponent={<AlbumEmptyItem />}
      ListFooterComponent={<Footer data={data} lastUpdate={lastUpdate} />}
      columnWrapperStyle={toggleView === 1 ? null : styles.listContainer}
      contentContainerStyle={{ paddingHorizontal: 20 }}
    />
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  listContainer: {
    justifyContent: "space-between",
  },
});
