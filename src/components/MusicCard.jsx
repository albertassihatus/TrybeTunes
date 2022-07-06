import PropTypes from 'prop-types';
import React from 'react';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.propsId,
      list: [],
      loading: true,
      artist: [],
      favorite: [],
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    const item = await getFavoriteSongs();
    await getMusics(id).then((e) => {
      this.setState({
        loading: false,
        list: e,
        artist: e[0],
        favorite: item,
      });
    });
  }

  async addFavorites(event, music) {
    const { checked } = event.target;

    this.setState({
      loading: true,
    },
    async () => {
      if (checked) {
        await addSong(music);
      } else {
        await removeSong(music);
      }
      const favorites = await getFavoriteSongs();
      this.setState({
        loading: false,
        favorite: favorites,
      });
    });
  }

  favoriteMusic(id) {
    const { favorite } = this.state;
    return favorite.find((element) => element.trackId === id);
  }

  render() {
    const { list, loading, artist } = this.state;

    if (loading) {
      return <Loading />;
    }

    return (

      <main>

        <p data-testid="artist-name">{ artist.artistName }</p>
        <p data-testid="album-name">{ artist.collectionName }</p>

        {
          list.length > 0 && list.map((item, index) => (
            index !== 0 && (

              <div key={ item.collectionId }>

                <p>{item.trackName}</p>

                <audio
                  data-testid="audio-component"
                  src={ item.previewUrl }
                  controls
                >
                  <track kind="captions" />
                  O seu navegador não suporta o elemento
                  {' '}
                  {' '}
                  <code>audio</code>
                </audio>

                <label htmlFor="favorite">
                  Favorita
                  <input
                    type="checkbox"
                    name={ item.trackId }
                    checked={ this.favoriteMusic(item.trackId) }
                    id={ item.trackId }
                    data-testid={ `checkbox-music-${item.trackId}` }
                    onChange={ (event) => this.addFavorites(event, item) }
                  />
                </label>
              </div>)
          ))
        }
      </main>
    );
  }
}

MusicCard.propTypes = {
  propsId: PropTypes.string.isRequired,
};

export default MusicCard;
