import { Modal } from './Modal';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';
import { getData } from '../Services/api';
import { Button } from './Button';
import { PureComponent } from 'react';
export class App extends PureComponent{
  state = {
    page: 1,
    images: [],
    imgUrl: '',
    search: '',
    loading: false,
    showModal: false,
    showButton: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.toggleLoader();
      this.reset()
      getData(this.state.search)
        .then(data => {
          if (data.totalHits > 12) {
            this.toggleBtn();
          }
          this.setState({ images: data.hits });
        })
        .finally(this.toggleLoader);
    }
    if (prevState.page !== this.state.page && this.state.page !== 1) {
      getData(this.state.search, this.state.page).then(data => {
        if (data.hits.length < 12) {
          this.toggleBtn();
        }
        this.setState({ images: [...prevState.images, ...data.hits] });
      });
    }
  }
  loadMoreHandler = () => {
    this.setState({ page: this.state.page + 1 });
  };

  submitHandler = input => {
    this.setState({ search: input });
  };

  toggleLoader = () => this.setState({ loading: !this.state.loading });

  toggleBtn = () => this.setState({ showButton: !this.state.showButton });

  toggleModal = imgUrl => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      imgUrl: imgUrl,
    }));
  };

  reset= () => this.setState({ page: 1 ,showButton: false });

  render() {
    const { images, imgUrl, showModal, loading, showButton } = this.state;
    return (
      <>
        <Searchbar submitHandler={this.submitHandler} />
        {loading && <Loader />}
        {!loading &&<ImageGallery images={images} toggleModal={this.toggleModal} />}
        {showButton && <Button loadMoreHandler={this.loadMoreHandler} />}
        {showModal && <Modal onClose={this.toggleModal} imgUrl={imgUrl} />}
      </>
    );
  }
}
