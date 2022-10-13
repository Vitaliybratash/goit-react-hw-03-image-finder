import { PropTypes } from 'prop-types';
export const ImageGalleryItem = ({ img, toggleModal }) => {
  return (
    <li
      className="ImageGalleryItem"
      onClick={() => toggleModal(img.largeImageURL)}
    >
      <img src={img.webformatURL} alt="Images" />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
