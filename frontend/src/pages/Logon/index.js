import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'
import heroesImg from '../../assets/pet02.jpg';
import logoImg from '../../assets/logo01.png';


export default function Logon() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('session_cliente', { email, senha });

      console.log(response.data.nome);

      localStorage.setItem('clienteEmail', email);
      localStorage.setItem('clienteNome', response.data.nome);

      history.push('/consulta');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img className="img-logo" src={logoImg} alt="Gestão Vet" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input 
            placeholder="Seu email" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Sua senha" 
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#5C9E6B" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img className="img-main" src={heroesImg} alt="Heroes" />
    </div>
  );
};