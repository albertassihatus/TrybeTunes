import React from 'react';
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
      </header>
    );
  }
}

export default Header;
