import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      loading: false,
      search: '',
      results: [],
    };
  }

  onSaveButton = () => {
    const { input } = this.state;
    this.setState(
      {
        loading: true,
        search: input,
        input: '',
      },
      async () => {
        const { search } = this.state;
        this.setState({
          results: await searchAlbumsAPI(search),
        });
        this.setState({
          loading: false,
        });
      },
    );
  };

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      input: value,
    });
  }

  validateForm = () => {
    const { input } = this.state;

    const minLength = 2;
    const anyInfo = input.length >= minLength;

    if (anyInfo) {
      return false;
    }
    return true;
  }

  render() {
    const { input, loading, results, search } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <main>
          <form>
            <input
              data-testid="search-artist-input"
              type="text"
              name="name"
              id="name"
              value={ input }
              onChange={ this.onInputChange }
              placeholder="Artist"
            />
            <br />
            <br />
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

          <br />

          {(results.length === 0 && search) && 'Nenhum álbum foi encontrado'}
          {loading && <Loading />}
          {(search && results.length !== 0) && (
            <p>{`Resultado de álbuns de: ${search}`}</p>
          )}
          <div>
            {
              results.map((e, index) => (
                <div key={ index }>
                  <h4>{e.collectionName}</h4>
                  <p>{e.artistName}</p>
                  <img src={ e.artworkUrl100 } alt={ e.collectionName } />
                  <Link
                    data-testid={ `link-to-album-${e.collectionId}` }
                    to={ `/album/${e.collectionId}` }
                  >
                    <p>Album</p>
                  </Link>
                </div>
              ))
            }
          </div>
        </main>
      </div>

    );
  }
}

export default Search;
