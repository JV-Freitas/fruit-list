import React, { useState, useMemo } from 'react';
import './style.css';
import frutas from './data';

export default function App() {
  const [busca, setBusca] = useState('');

  const frutasFiltradas = useMemo(() => {
    const lowerBusca = busca.toLowerCase();
    return frutas.filter((fruta) => fruta.toLowerCase().includes(lowerBusca));
  }, [busca]);

  return (
    <div className="App">
      <h1>Lista de Frutas:</h1>
      <input
        type="text"
        value={busca}
        onChange={(e) => {
          setBusca(e.target.value);
        }}
      />
      <ul>
        {frutasFiltradas.map((fruta) => (
          <li key={fruta}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}
