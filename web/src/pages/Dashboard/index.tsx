import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import './styles.css';

export default function Dashboard() {
  const history = useHistory();
  const { signOut, user } = useAuth();

  function handleSingOut() {
    signOut();
    history.push('/');
  }

  return (
    <div id="Dashboard">
      <div className="content">
        <h1>Welcome,</h1>
        <h2>{user?.name}</h2>

        <button type="button" onClick={handleSingOut}>
          Sing Out
        </button>
      </div>
    </div>
  );
}
