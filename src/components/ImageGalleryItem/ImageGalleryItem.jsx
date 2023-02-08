import PropTypes from 'prop-types';
import style from '../ImageGalleryItem/image-gallery-item.module.css';

const ImageGalleryItem = ({ tags, src, largeImageURL, showImg }) => {
  return (
    <li
      className={style.ImageGalleryItem}
      onClick={() => showImg({ largeImageURL })}
    >
      <img
        className={style.ImageGalleryItem__image}
        src={src}
        alt={tags}
        largeImageURL={largeImageURL}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  tags: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
