import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Load from '../components/Load';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      pageLoad: false,
      songsSaved: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const songs = await getMusics(id);

    this.setState({
      pageLoad: true,
    }, async () => {
      const songsSaved = await getFavoriteSongs();

      this.setState({
        songs,
        pageLoad: false,
        songsSaved });
    });
  }

  render() {
    const {
      songs,
      pageLoad,
      songsSaved,
    } = this.state;

    const initSong = songs[0];
    if (pageLoad) return <Load />;

    if (songs[0]) {
      return (
        <div data-testid="page-album">
          <p>Album Page</p>
          <p data-testid="artist-name">
            {initSong.artistName}
          </p>
          <p data-testid="album-name">
            {initSong.collectionName}
          </p>
          {songs
            .map(({ trackName, previewUrl, trackId }, index) => {
              if (index === 0) {
                return '';
              }
              if (songsSaved.some((song) => song.trackId === trackId)) {
                return (
                  <MusicCard
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    trackId={ trackId }
                    key={ trackId }
                    isFavorite
                  />);
              }
              return (
                <MusicCard
                  trackName={ trackName }
                  previewUrl={ previewUrl }
                  trackId={ trackId }
                  key={ trackId }
                  isFavorite={ false }
                />);
            })}
          <Header />
        </div>
      );
    }
    return (
      <div data-testid="page-album">
        <p>Album Page</p>
        <Header />
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
