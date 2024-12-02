function LoadMoreBtn({ setPage, page }) {
  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <button type="button" onClick={handleLoadMoreClick}>
      LoadMoreBtn
    </button>
  );
}

export default LoadMoreBtn;
