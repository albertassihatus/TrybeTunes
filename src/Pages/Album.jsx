import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      album: {},
      musicList: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    const musics = await getMusics(id);
    const [album, ...musicList] = musics;
    this.setState({
      musicList,
      album,
    });
  }

  render() {
    const { musicList, album } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <p data-testid="artist-name">
            { album.artistName }
          </p>
          <p data-testid="album-name">
            { album.collectionName }
          </p>
        </div>
        <MusicCard
          music={ musicList }

        />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Album;
