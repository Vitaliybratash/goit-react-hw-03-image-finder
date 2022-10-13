import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={this.props.imgUrl} alt="Images" />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  imgUrl: PropTypes.string.isRequired,

 onClose: PropTypes.func.isRequired,
};
