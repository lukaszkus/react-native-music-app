import { FlatList } from "react-native";

import AlbumItem from "./AlbumItem";
import AlbumEmptyItem from "./AlbumEmptyItem";
import Header from "./Header";
import Footer from "./Footer";

const AlbumList = ({ data, filter, setFilter, lastUpdate }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => <AlbumItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header filter={filter} setFilter={setFilter} />}
      ListEmptyComponent={<AlbumEmptyItem />}
      ListFooterComponent={<Footer data={data} lastUpdate={lastUpdate} />}
    />
  );
};

export default AlbumList;
