import s from "./ImageCard.module.css";

function ImageCard({ url, alt }) {
  return (
    <div className={s.imgBox}>
      <img src={url} alt={alt} />
    </div>
  );
}

export default ImageCard;
