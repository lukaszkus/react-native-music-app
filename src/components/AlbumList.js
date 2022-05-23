import { FlatList, StyleSheet } from "react-native";

import AlbumItem from "./AlbumItem";
import AlbumEmptyItem from "./AlbumEmptyItem";
import Header from "./Header";

const AlbumList = ({ data, filter, setFilter }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => <AlbumItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header filter={filter} setFilter={setFilter} />}
      ListEmptyComponent={<AlbumEmptyItem />}
      // style={styles.listContainer}
    />
  );
};

export default AlbumList;

// const styles = StyleSheet.create({
//   listContainer: { flex: 1 },
// });
