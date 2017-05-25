import React, {Component, PropTypes} from 'react';
import { GENRE_TYPE } from './Home';

const propTypes = {
  genre: PropTypes.string,
  changeGenre: PropTypes.func
};

class AudioGenre extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const genreItemActive = 'quality__box__item quality__box__item--active';
    const genreItem = 'quality__box__item quality__box__item';

    const { genre, changeGenre } = this.props;

    return (
      <div className="quality">
        <div className="quality__box">
          <p>Choose your genre:</p>
          <ul>
            <li
              className={genre === GENRE_TYPE['Slow Jams'] ? genreItemActive : genreItem}
              onClick={(e) => changeGenre(GENRE_TYPE['Slow Jams'])}
            >
              <strong>Slow Jams</strong>
            </li>
            <li
              className={genre === GENRE_TYPE['Hip Hop'] ? genreItemActive : genreItem}
              onClick={(e) => changeGenre(GENRE_TYPE['Hip Hop'])}
            >
              <strong>Hip Hop</strong>
            </li>
            <li
              className={genre === GENRE_TYPE['Pop Music'] ? genreItemActive : genreItem}
              onClick={(e) => changeGenre(GENRE_TYPE['Pop Music'])}
            >
              <strong>Pop Music</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

AudioGenre.propTypes = propTypes;

export default AudioGenre;