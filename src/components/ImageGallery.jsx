import {PropTypes}  from "prop-types"
import { ImageGalleryItem } from './ImageGalleryItem';
export const ImageGallery = ({ images, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {images.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            img={el}
            toggleModal={toggleModal}
          />
        );
      })}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};