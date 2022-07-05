import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      // loading: false,
      // next: false,
    };
  }

  onSaveButton = async () => {
    // const { name } = this.state;
    // this.setState({ loading: true });
    // await createUser({ name }).then((e) => {
    //   if (e) {
    //     this.setState({ next: true });
    //   }
    // });
  }

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    });
  }

  validateForm = () => {
    const { name } = this.state;

    const minLength = 2;
    const anyInfo = name.length >= minLength;

    if (anyInfo) {
      return false;
    }
    return true;
  }

  render() {
    const { name } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <main>

          {/* {loading && <Loading />}
          {next && <Redirect to="/search" />} */}

          <form>
            <label htmlFor="name">
              <input
                data-testid="search-artist-input"
                type="text"
                name="name"
                id="name"
                value={ name }
                onChange={ this.onInputChange }
                placeholder="Artist"
              />
            </label>
            <br />
            <p />
            <button
              type="button"
              data-testid="search-artist-button"
              disabled={ this.validateForm() }
              onChange={ this.onInputChange }
              onClick={ this.onSaveButton }
            >
              Pesquisar

            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default Search;
