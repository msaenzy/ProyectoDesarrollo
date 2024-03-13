// App.js

import React from 'react';
import ClienteList from './components/ClienteList';
import ClienteForm from './components/ClienteForm';

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Aplicación de Gestión de Clientes</h1>
      </header>
      <div style={styles.buttonsContainer}>
        <button style={styles.button}>Nuevo</button>
        <button style={styles.smallButton}>Limpiar</button>
        <button style={styles.smallButton}>Buscar</button>
      </div>
      <div style={styles.content}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>No.</th>
              <th>Descripción</th>
              <th>Fecha Creación</th>
              <th>Usuario</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {/* Tabla vacía */}
            <tr>
              <td style={styles.emptyRow} colSpan="5">No hay datos disponibles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    backgroundColor: '#007bff',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '5px',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    margin: '0',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  smallButton: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    margin: '0 10px',
    cursor: 'pointer',
  },
  content: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '1px solid #ddd',
  },
  th: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #ddd',
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  emptyRow: {
    textAlign: 'center',
    paddingTop: '10px',
    paddingBottom: '10px',
    color: '#999',
  },
};

export default App;
