import React, { useState, useEffect } from 'react';

export default function FormularioBus({ isOpen, onClose, onSubmit, initialData }) {
  const [busData, setBusData] = useState({
    numeroBus: '',
    placa: '',
    caracteristicas: '',
    marca: '',
    estado: true,
  });

  useEffect(() => {
    if (initialData) {
      setBusData({
        numeroBus: initialData.numeroBus || '',
        placa: initialData.placa || '',
        caracteristicas: initialData.caracteristicas || '',
        marca: initialData.marca?.nombreMarca || '',
        estado: initialData.estado ?? true,
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBusData({
      ...busData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(busData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{initialData ? 'Editar Bus' : 'Añadir Bus'}</h2>
        <form onSubmit={handleSubmit}>
          <input name="numeroBus" value={busData.numeroBus} onChange={handleChange} placeholder="Número de Bus" required />
          <input name="placa" value={busData.placa} onChange={handleChange} placeholder="Placa" required />
          <input name="caracteristicas" value={busData.caracteristicas} onChange={handleChange} placeholder="Características" />
          <input name="marca" value={busData.marca} onChange={handleChange} placeholder="Marca" required />
          <label>
            Activo
            <input type="checkbox" name="estado" checked={busData.estado} onChange={handleChange} />
          </label>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
        </form>
      </div>
    </div>
  );
}
