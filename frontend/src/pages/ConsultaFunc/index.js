import React, { useState, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import api from "../../services/api"; // import comunicação com backend

import "./styles.css";

import logoImg from "../../assets/profile.svg";

export default function ConsultaFuncs() {
  const history = useHistory();

  const [funcionarios, setFuncionarios] = useState([]);

  const admNome = localStorage.getItem("admNome");
  const admEmail = localStorage.getItem("admEmail");

  useEffect(() => {
    api
      .get("funcionario", {
        headers: {
          Authorization: admEmail,
        },
      })
      .then((response) => {
        setFuncionarios(response.data);
      });
  }, [admEmail]);

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="consulta-container">
      <header>
        <img className="" src={logoImg} alt="Gestão Vet" />
        <span>Bem vindo, {admNome}</span>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#5C9E6B" />
        </button>
      </header>
      <div className="py-5">
        <ul>
          {funcionarios.map((funcionarios) => (
            <li key={funcionarios.email}>
              <div className="row">
                <div className="col-lg-12">
                  <strong>Nome do pet:</strong>
                  <p>{funcionarios.nome}</p>
                </div>
              </div>
              <div className="row">
                
              <div className="col">
                  <strong>Nome:</strong>
                  <p>{funcionarios.nome}</p>
                </div>
                <div className="col-8">
                  <strong>Sobrenome:</strong>
                  <p>{funcionarios.sobrenome}</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <strong>Telefone:</strong>
                  <p>{funcionarios.telefone}</p>
                </div>
  
                <div className="col-4">
                  <strong>Cidade:</strong>
                  <p>{funcionarios.cidade}</p>
                </div>
                <div className="col-4">
                  <strong>Estado:</strong>
                  <p>{funcionarios.estado}</p>
                </div>
                <div className="col-4">
                  <strong>Cargo:</strong>
                  <p>{funcionarios.cargo}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
