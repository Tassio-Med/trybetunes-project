import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Load from './Load';

const getAPI = require('../services/userAPI');

class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({ user: await getAPI.getUser() });
  }

  render() {
    const { user } = this.state;
    return (
      !user ? <Load /> : (
        <header data-testid="header-component">
          <nav>
            <ul>
              <li>
                <Link to="/search" data-testid="link-to-search">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/favorites" data-testid="link-to-favorites">
                  Favorites
                </Link>
              </li>
              <li>
                <Link to="/profile" data-testid="link-to-profile">
                  Profile
                </Link>
              </li>
            </ul>
            <p data-testid="header-user-name">
              { user.name }
            </p>
          </nav>
        </header>
      )
    );
  }
}

export default Header;
