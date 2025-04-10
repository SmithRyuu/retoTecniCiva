import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, bus }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {bus && (
          <>
            <h2>Detalles del Bus</h2>
            <p><strong>ID:</strong> {bus.id}</p>
            <p><strong>Número de Bus:</strong> {bus.numeroBus}</p>
            <p><strong>Placa:</strong> {bus.placa}</p>
            <p><strong>Características:</strong> {bus.caracteristicas}</p>
            <p><strong>Marca:</strong> {bus.marca?.nombreMarca}</p>
            <p><strong>Estado:</strong> {bus.estado ? 'Activo' : 'Inactivo'}</p>
            <p><strong>Fecha de creación:</strong> {bus.fechaCreacion}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
