import Modal from "react-modal";
import s from "./ImageModal.module.css";

function ImageModal({ image, closeModal, isModalOpen }) {
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={s.content}
      overlayClassName={s.overlay}
    >
      <img src={image} alt="Selected" className={s.image} />
    </Modal>
  );
}

export default ImageModal;
