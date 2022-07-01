import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Pages/Login';
import Search from './Pages/Search';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Profile from './Pages/Profile';
import Notfnd from './Pages/Notfnd';
import ProfileEdit from './Pages/ProfileEdit';

class App extends React.Component {
  render() {
    return (
      <main>
        <Route path="/" component={ Login } exact />
        <Route path="/search" component={ Search } />
        <Route path="/album" component={ Album } />
        <Route path="/favorites" component={ Favorites } />
        <Route path="/profile" component={ Profile } />
        <Route path="/profile/edit" component={ ProfileEdit } exact />
        <Route path="*" component={ Notfnd } />
      </main>
    );
  }
}

export default App;
