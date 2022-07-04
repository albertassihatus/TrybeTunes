import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from './Pages/Album';
import Favorites from './Pages/Favorites';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Profile from './Pages/Profile';
import ProfileEdit from './Pages/ProfileEdit';
import Search from './Pages/Search';

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default App;
