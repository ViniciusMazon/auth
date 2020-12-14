import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import './styles.css';

export default function SignIn() {
  const { signed, signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email === '' || password === '') {
      return;
    }

    signIn(email, password);
  }

  return (
    <div id="SingIn">
      <form className="content" onSubmit={handleSubmit}>
        <h1>Sing In</h1>

        <div className="input-group">
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="input-group">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <Link to="/sing-up"> Don't have an account? Sing up</Link>

        <button type="submit">Sing In</button>
      </form>
    </div>
  );
}
