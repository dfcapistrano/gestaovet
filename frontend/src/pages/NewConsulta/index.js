import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'; // import comunicação com backend

import './styles.css';

import logoImg from '../../assets/logo01.png';

export default function NewConsulta() {
  const [especialidade, setEspecialidade] = useState([]);
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [pet_id, setPet_id] = useState('');

  const history = useHistory();

  const clienteEmail = localStorage.getItem('clienteEmail');

  async function handleNewConsulta(e) {
    e.preventDefault();

    const dados = {
      especialidade, data, hora, pet_id,
    };

    try {
      await api.post('consulta', dados, {
        headers: {
          Authorization: clienteEmail,
        }
      })

      history.push('/consulta');
    } catch (err) {
      alert('Erro ao cadastrar a consulta, tente novamente')
    }
  }

  return (
    <div className="new-consulta-container">
      <div className="content">
        <section>
          <img className="img-logo" src={logoImg} alt="Gestão Vet" />

          <h1>Cadastrar nova consulta</h1>
          <p>Preencha os campos ao lado para marcar uma consulta conosco.</p>

          <Link className="back-link" to="/consulta">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para a página de consultas
          </Link>
        </section>

        <form onSubmit={handleNewConsulta}>

          <input
            placeholder="Especialidade"
            value={especialidade}
            onChange={e => setEspecialidade(e.target.value)}
            required="true"
          />

          <input
            placeholder="Data"
            value={data}
            onChange={e => setData(e.target.value)}
            required="true"
          />

          <input
            placeholder="Hora"
            value={hora}
            onChange={e => setHora(e.target.value)}
            required="true"
          />
          <input
            placeholder="Nome do Pet"
            value={pet_id}
            onChange={e => setPet_id(e.target.value)}
            required="true"
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}