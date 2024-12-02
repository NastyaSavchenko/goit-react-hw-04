import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import { useEffect, useState } from "react";
import { getImages } from "../api";
import toast from "react-hot-toast";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (totalPage === page) {
      toast("You've reached the end!", {
        icon: "🥳",
      });
    }
  }, [totalPage, page]);

  useEffect(() => {
    if (!searchQuery) return;

    const getApi = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const res = await getImages(searchQuery, page);

        setImages((prev) => [...prev, ...res.data.results]);
        setTotalPage(res.data.total_pages);

        if (res.data.total_pages === 0)
          toast.error(
            `🥺 Oops! We couldn't find any results for "${searchQuery}`
          );
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getApi();
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setImages([]);
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
      <ImageGallery images={images} />
      {totalPage > page && <LoadMoreBtn setPage={setPage} page={page} />}
      {isError && <ErrorMessage />}
      <ImageModal />
      {isLoading && <Loader />}
    </>
  );
}

export default App;
