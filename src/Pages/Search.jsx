import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     loading: false,
  //   };
  // }

  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <h1>Estou no Search</h1>
      </div>
    );
  }
}

export default Search;
