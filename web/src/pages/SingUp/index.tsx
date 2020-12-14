import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function SingUp() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNavigateBack() {
    history.goBack();
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      return;
    }

    const data = {
      name,
      email,
      password,
    };

    await api.post('/sing-up', data);
    history.push('/');
  }

  return (
    <div id="SingUp">
      <form className="content" onSubmit={handleSubmit}>
        <FiArrowLeft
          className="icon"
          size={24}
          color="#15b6d6"
          onClick={handleNavigateBack}
        />

        <h1>Sing Up</h1>

        <div className="input-group">
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

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

        <button type="submit">Sing Up</button>
      </form>
    </div>
  );
}
