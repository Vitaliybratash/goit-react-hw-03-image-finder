import { PropTypes } from 'prop-types';
import { Component } from 'react';
export class Searchbar extends Component {
  state = {
    search: '',
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state.search);
  };
  onChangeHandler = e => this.setState({ search: e.target.value });
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            onChange={this.onChangeHandler}
            value={this.state.search}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};
