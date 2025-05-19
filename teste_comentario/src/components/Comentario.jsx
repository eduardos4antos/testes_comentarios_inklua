'use client';

import React, { useState } from 'react';

function Comentario() {
  const [Comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState('');

  const handleInputChange = (e) => {
    setNovoComentario(e.target.value);
  };

  const handleSubmit = () => {
    if (novoComentario.trim() === '') return;

    const novo = {
      id: Date.now(),
      usuario: 'darlan',
      perfil:'darlan.jpg',
      data: new Date().toLocaleString(),
      texto: novoComentario,
    };

    setComentarios([novo, ...Comentarios]);
    setNovoComentario('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Comentários</h2>

      <textarea
        value={novoComentario}
        onChange={handleInputChange}
        placeholder="Escreva seu comentário aqui..."
        style={{
          width: '100%',
          height: '100px',
          padding: '10px',
          fontSize: '14px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          resize: 'none',
          marginBottom: '10px',
          boxSizing: 'border-box',
        }}
      />
      <br />

      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
        }}
      >
        Enviar
      </button>

      <div style={{ marginTop: '30px' }}>
        {Comentarios.map((Comentario) => (
          <div
            key={Comentario.id}
            style={{
              border: '1px solid #e1e1e1',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '8px',
              backgroundColor: '#fafafa',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <img
                src={Comentario.perfil}
                alt="Perfil"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '12px',
                }}
              />
              <div>
                <strong style={{ display: 'block', fontSize: '16px', color: '#222' }}>
                  {Comentario.usuario}
                </strong>
                <small style={{ color: '#777' }}>{Comentario.data}</small>
              </div>
            </div>
            <p style={{ fontSize: '15px', lineHeight: '1.4', color: '#444' }}>{Comentario.texto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comentario;
