import React from 'react';
import PropTypes from 'prop-types';
import style from '../ImageGallery/image-gallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, showImg }) => {
  const elements = items.map(({ id, webformatURL, tags, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      alt={tags}
      src={webformatURL}
      largeImageURL={largeImageURL}
      showImg={showImg}
    />
  ));
  return <ul className={style.ImageGallery}>{elements}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  items: [],
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
  showImg: PropTypes.func.isRequired,
};
