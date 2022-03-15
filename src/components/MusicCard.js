import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Load from './Load';

class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      getCheck: false,
    };
  }

  componentDidMount() {
    const { favoriteSong } = this.props;
    this.setState({ getCheck: favoriteSong });
  }

  clickChange = async ({ target }) => {
    const { trackId } = this.props;
    const { getCheck } = this.state;

    this.setState({
      getCheck: target.checked,
      loading: true,
    });
    let put = '';
    const songs = await getMusics(trackId);
    if (!getCheck) {
      put = await addSong(songs[0]);
    } else {
      put = await removeSong(songs[0]);
    }
    if (put) {
      this.setState({ loading: false });
    }
  }

  render() {
    const {
      trackName,
      previewUrl,
      trackId,
    } = this.props;

    const {
      loading,
      getCheck,
    } = this.state;

    return (
      loading ? <Load /> : (
        <div>
          <p>
            { trackName }
          </p>
          <audio data-testid="audio-component" src={ previewUrl } controls>
            <track
              kind="captions"
            />
            O seu navegador não suporta o elemento
            <code>
              audio
            </code>
          </audio>
          <label htmlFor={ trackName }>
            Favorita
            <input
              id={ trackName }
              name={ trackName }
              value={ getCheck }
              type="checkbox"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ getCheck }
              onChange={ this.clickChange }
            />
          </label>
        </div>
      ));
  }
}

MusicCard.propTypes = {
  trackId: PropTypes.number,
  trackName: PropTypes.string,
  favoriteSong: PropTypes.bool,
  previewUrl: PropTypes.string,
}.isRequired;

export default MusicCard;
