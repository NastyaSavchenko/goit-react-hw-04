import s from "./ImageCard.module.css";

function ImageCard({ url, alt, handleImageClick, full }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleImageClick(full);
    }
  };

  return (
    <div className={s.imgBox}>
      <img
        src={url}
        alt={alt}
        onClick={() => handleImageClick(full)}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default ImageCard;
