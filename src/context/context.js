import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState("");
  const [search, setSearch] = useState("");
  const [toggleView, setToggleView] = useState(1);
  const [favouritesList, setFavouritesList] = useState([]);

  //real time input search
  const searchedData = data.filter((item) => {
    return item.title.label.includes(search);
  });

  //change list view to grid view
  const handleToggleListView = () => {
    setToggleView(1);
  };

  const handleToggleColumnView = () => {
    setToggleView(2);
  };

  //add to favourites
  const handleAddToFav = (album) => {
    setFavouritesList([...favouritesList, album]);
  };

  //remove from favourites
  const handleRemoveFromFav = (album) => {
    const favList = favouritesList.filter(
      (item) => item.id.attributes["im:id"] !== album.id.attributes["im:id"]
    );
    setFavouritesList(favList);
  };

  //check if exist in favourites
  const isExistInFav = (album) => {
    if (
      favouritesList.filter(
        (item) => item.id.attributes["im:id"] === album.id.attributes["im:id"]
      ).length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <Context.Provider
      value={{
        data,
        setData,
        isLoading,
        setLoading,
        lastUpdate,
        setLastUpdate,
        search,
        setSearch,
        toggleView,
        setToggleView,
        favouritesList,
        setFavouritesList,

        searchedData,

        handleToggleListView,
        handleToggleColumnView,

        handleAddToFav,
        handleRemoveFromFav,
        isExistInFav,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
