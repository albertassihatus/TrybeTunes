import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: false,
      next: false,
    };
  }

      onSaveButton = async () => {
        const { name } = this.state;
        this.setState({ loading: true });
        await createUser({ name }).then((e) => {
          if (e) {
            this.setState({ next: true });
          }
        });
      }

  onInputChange = ({ target }) => {
    const { value } = target;
    this.setState({
      name: value,
    });
  }

  validateForm = () => {
    const { name } = this.state;

    const minLength = 3;
    const anyInfo = name.length >= minLength;

    if (anyInfo) {
      return false;
    }
    return true;
  }

  render() {
    const { name, loading, next } = this.state;
    return (
      <div data-testid="page-login" className="formulario">

        <main>

          {loading && <Loading />}
          {next && <Redirect to="/search" />}

          <form>
            <label htmlFor="name">
              <input
                data-testid="login-name-input"
                type="text"
                name="name"
                id="name"
                value={ name }
                onChange={ this.onInputChange }
                placeholder="User"
              />
            </label>
            <br />
            <p />
            <button
              type="button"
              data-testid="login-submit-button"
              disabled={ this.validateForm() }
              onChange={ this.onInputChange }
              onClick={ this.onSaveButton }
            >
              Entrar

            </button>
          </form>
        </main>
      </div>
    );
  }
}

Login.propTypes = {
};
export default Login;
