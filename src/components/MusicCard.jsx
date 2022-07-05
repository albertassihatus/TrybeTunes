import PropTypes from 'prop-types';
import React from 'react';

class MusicCard extends React.Component {
  render() {
    const { music } = this.props;
    return (
      <div>
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
