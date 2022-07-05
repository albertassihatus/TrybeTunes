import PropTypes from 'prop-types';
import React from 'react';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    const { loading } = this.state;
    const { music } = this.props;
    return (
      <div>
        {loading && <Loading />}
        {
          music.map((item) => (
            <div key={ item.collectionId }>
              <p>{ item.trackName }</p>
              <audio
                data-testid="audio-component"
                src={ item.previewUrl }
                controls
              >
                <track
                  kind="captions"
                />
                O seu navegador não suporta o elemento
                {' '}
                {' '}
                <code>audio</code>
                .
              </audio>
              <label htmlFor="favorite">
                Favorita
                <input
                  type="checkbox"
                  name="favorite"
                />
              </label>
            </div>
          ))
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.arrayOf(
    PropTypes.shape({
      trackName: PropTypes.string,
      previewUrl: PropTypes.string,
    }),
  ).isRequired,
};

export default MusicCard;
