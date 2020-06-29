import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api'; // import comunicação com backend

import './styles.css';

import logoImg from '../../assets/logo01.png';

export default function Consulta() {

  const history = useHistory();

  const [consultas, setConsultas] = useState([]);

  const clienteNome = localStorage.getItem('clienteNome');
  const clienteEmail = localStorage.getItem('clienteEmail');

  useEffect(() => {
    api.get('consulta', {
      headers: {
        Authorization: clienteEmail,
      }
    }).then(response => {
      setConsultas(response.data);
    })
  }, [clienteEmail]);

  async function handleDeleteConsulta(id) {
    try {
      await api.delete(`consulta/${id}`, {
        headers: {
          Authorization: clienteEmail,
        }
      });

      setConsultas(consultas.filter(consulta => consulta.id !== id));
    }catch (err) {
      alert('Erro ao deletar a consulta, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="consulta-container">
      <header>
        <img className="img-logo" src={logoImg} alt="Gestão Vet" />
        <span>Bem vindo, {clienteNome}</span>

        <Link className="button" to="/consulta/new">Cadastrar nova consulta</Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#5C9E6B" />
        </button>
      </header>

      <h1>Consultas cadastradas</h1>

      <ul>
        {consultas.map(consulta => (
          <li key={consulta.email}>
            <strong>Especialidade:</strong>
            <p>{consulta.especialidade}</p>
            
            <strong>Data:</strong>
            <p>{consulta.data}</p>

            <strong>Hora:</strong>
            <p>{consulta.hora}</p>
            
            <strong>Pet:</strong>
            <p>{consulta.pet_id}</p>
            <button onClick={() => handleDeleteConsulta(consulta.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}