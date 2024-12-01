import ImageCard from "../ImageCard/ImageCard";

function ImageGallery({ images }) {
  return (
    <main>
      <ul>
        {images.map((image) => {
          const {
            id,
            alt_description,
            urls: { small },
          } = image;
          return (
            <li key={id}>
              <ImageCard url={small} alt={alt_description} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ImageGallery;
