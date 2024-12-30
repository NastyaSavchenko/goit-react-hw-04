import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

function ImageGallery({ images, setIsModalOpen, setModalImg }) {
  const handleImageClick = (fullImg) => {
    setModalImg(fullImg);
    setIsModalOpen(true);
  };
  return (
    <ul className={s.imgList}>
      {images.map((image) => {
        const {
          id,
          alt_description,
          urls: { small, full },
        } = image;
        return (
          <li key={id} onClick={() => handleImageClick(full)}>
            <ImageCard url={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
