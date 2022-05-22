import { FlatList } from "react-native";

import AlbumItem from "./AlbumItem";
import Header from "./Header";

const AlbumList = ({ data, filter, setFilter }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => <AlbumItem item={item} />}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={<Header filter={filter} setFilter={setFilter} />}
    />
  );
};

export default AlbumList;
