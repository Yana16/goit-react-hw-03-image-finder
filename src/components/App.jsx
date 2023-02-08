import React, { Component } from 'react';
import Button from '../components/Button/Button';
import Loader from '../components/Loader/Loader';
import Modal from '../components/Modal/Modal';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import SearchForm from '../components/Searchbar/Searchbar';
import style from '../components/app.module.css';
import { searchImages } from '../services/api';

class App extends Component {
  state = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    search: '',
    showModal: false,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImages(search, page);
      this.setState(({ items }) => ({ items: [...items, ...data.hits] }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImages = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
  showImg = ({ largeImageURL, tags }) => {
    this.setState({
      largeImageURL: largeImageURL,
      tags: tags,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: '',
      tags: '',
    });
  };

  render() {
    const { items, loading, error, largeImageURL, showModal, tags } =
      this.state;
    const { searchImages, loadMore, showImg, closeModal } = this;

    return (
      <div className={style.App}>
        <h1 className={style.Title}>React homework</h1>
        <SearchForm onSubmit={searchImages} />
        <ImageGallery items={items} showImg={showImg} />
        {error && <p>ERROR</p>}
        {loading && <Loader />}
        {Boolean(items.length) && <Button onClick={loadMore} />}
        {showModal && (
          <Modal onClose={closeModal}>
            <img src={largeImageURL} alt={tags}></img>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
