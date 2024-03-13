// ClienteList.js 222

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get('/api/clientes');
      setClientes(response.data);
    } catch (error) {
      console.error('Error fetching clientes:', error);
    }
  };

  return (
    <div>
      <h2>Listado de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            {cliente.nombre} {cliente.apellido} - {cliente.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteList;
