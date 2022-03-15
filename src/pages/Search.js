import React from 'react';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Load from '../components/Load';
import ListMusic from '../components/ListMusic';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      artistName: '',
      disabled: true,
      album: [],
      loading: false,
    };
  }

  inputChange = ({ target: { name, value } }) => {
    const minLength = 2;
    this.setState({
      [name]: value,
    }, () => {
      const { input } = this.state;
      if (input.length >= minLength) {
        this.setState({
          disabled: false,
        });
      } else {
        this.setState({
          disabled: true,
        });
      }
    });
  }

  btnClick = async () => { // Não es;
    this.setState({ loading: true });
    const { input } = this.state;
    const result = await searchAlbumsAPI(input);
    this.setState({
      artistName: input,
      input: '',
      album: result,
      loading: false,
      disabled: true,
    });
  }

  render() {
    const {
      input,
      disabled,
      loading,
      artistName,
      album,
    } = this.state;
    return (
      loading ? <Load /> : (
        <div data-testid="page-search">
          <Header />
          <form>
            <Inputs
              type="text"
              name="input"
              id="input"
              testid="search-artist-input"
              onChange={ this.inputChange }
              value={ input }
            />
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ disabled }
              onClick={ this.btnClick }
            >
              Entrar
            </button>
          </form>

          {artistName && album.length <= 0 ? <p>Nenhum álbum foi encontrado</p>
            : (
              <div>
                <p>
                  Resultado de álbuns de:
                  {` ${artistName}`}
                </p>
                <div>
                  {album
                    .map(({ collectionId, collectionName }) => (<ListMusic
                      testid={ collectionId }
                      key={ collectionId }
                      name={ collectionName }
                    />))}
                </div>
              </div>)}
        </div>
      )
    );
  }
}

export default Search;
