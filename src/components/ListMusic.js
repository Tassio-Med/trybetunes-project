import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListMusic extends Component {
  render() {
    const {
      testid,
      name,
    } = this.props;
    return (
      <section>
        <Link
          to={ `album/${testid}` }
          data-testid={ `link-to-album-${testid}` }
        >
          { name }
        </Link>
        <p>{ testid }</p>
      </section>
    );
  }
}

ListMusic.propTypes = {
  testid: PropTypes.number,
  name: PropTypes.string,
}.isRequired;

export default ListMusic;
