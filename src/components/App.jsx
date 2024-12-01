import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";
import { getImages } from "../api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await getImages(searchQuery, page);
        setImages((prev) => [...prev, ...res.data.results]);
        console.log("results:", res.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getApi();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar setSearchQuery={setSearchQuery} />
      <ImageGallery images={images} />
      <LoadMoreBtn setPage={setPage} page={page} />
      <ErrorMessage />
      <ImageModal />
      <Loader />
    </>
  );
}

export default App;
