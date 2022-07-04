import React from 'react';
import Header from '../components/Header';
import ProfileEdit from './ProfileEdit';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <ProfileEdit />
        <Header />
      </div>
    );
  }
}

export default Profile;
