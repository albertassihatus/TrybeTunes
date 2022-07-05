import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const { name } = this.state;
    const user = await getUser({ name });
    this.setState({
      loading: false,
      name: user,
    });
  }

  render() {
    const { name, loading } = this.state;
    return (
      <header data-testid="header-component">
        <div data-testid="header-user-name">
          {loading && <Loading />}
          {`${name.name}`}
        </div>
        <Link data-testid="link-to-search" to="/search"> Search </Link>
        <Link data-testid="link-to-favorites" to="/favorites"> Favorites </Link>
        <Link data-testid="link-to-profile" to="/profile"> Profile </Link>
      </header>
    );
  }
}

export default Header;
