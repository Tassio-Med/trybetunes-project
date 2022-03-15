import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Load from '../components/Load';
import Inputs from '../components/Inputs';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      length: 0,
      login: '',
      disabled: true,
      loading: false,
      redirect: false,
    };
  }

  inputChange = ({ target }) => {
    const minLogLength = 3;
    const { value } = target;
    this.setState({ login: value,
      length: value.length },
    () => this.setState((param) => ({
      disabled: param.length < minLogLength,
    })));
  }

  handleClick = async () => {
    const { login } = this.state;
    this.setState({
      loading: true,
    });
    await createUser({ name: login });
    this.setState({
      loading: false,
      redirect: true,
    });
  }

  render() {
    const { login, disabled, loading, redirect } = this.state;
    return (
      loading ? <Load /> : (
        <div data-testid="page-login">
          <form>
            <Inputs
              type="text"
              name="login"
              id="login"
              data-testid="login-name-input"
              onChange={ this.inputChange }
              value={ login }
            />
            <button
              data-testid="login-submit-button"
              type="button"
              disabled={ disabled }
              onClick={ this.handleClick }
            >
              Entrar
            </button>
            {redirect ? <Redirect to="search" /> : ''}
          </form>
        </div>
      )
    );
  }
}

export default Login;
