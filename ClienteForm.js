// ClienteForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ClienteForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/clientes', { nombre, apellido, email });
      alert('Cliente creado exitosamente');
      setNombre('');
      setApellido('');
      setEmail('');
    } catch (error) {
      console.error('Error creating cliente:', error);
      alert('Error al crear cliente');
    }
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={e => setApellido(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button type="submit">Crear Cliente</button>
      </form>
    </div>
  );
};

export default ClienteForm;
