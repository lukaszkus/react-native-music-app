import { useContext } from "react";
import Context from "../context/context";
import { FlatList } from "react-native";

import AlbumItem from "./AlbumItem";
import AlbumEmptyItem from "./AlbumEmptyItem";
import Footer from "./Footer";

const AlbumList = () => {
  const { searchedData, toggleView } = useContext(Context);
  return (
    <FlatList
      data={searchedData}
      keyExtractor={(item) => item.id.attributes["im:id"]}
      renderItem={({ item }) => <AlbumItem item={item} />}
      initialNumToRender={6}
      showsVerticalScrollIndicator={false}
      numColumns={toggleView}
      key={toggleView}
      ListEmptyComponent={<AlbumEmptyItem />}
      ListFooterComponent={<Footer />}
      columnWrapperStyle={
        toggleView === 1 ? null : { justifyContent: "space-between" }
      }
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 110,
      }}
    />
  );
};

export default AlbumList;
