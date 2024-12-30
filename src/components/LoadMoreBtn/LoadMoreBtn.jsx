import s from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ setPage }) {
  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div className={s.box}>
      <button
        type="button"
        onClick={handleLoadMoreClick}
        className={s.loadMoreBtn}
      >
        LoadMoreBtn
      </button>
    </div>
  );
}

export default LoadMoreBtn;
