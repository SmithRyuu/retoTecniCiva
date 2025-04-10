import React, { useState, useEffect } from "react";
import { getBuses, getBusById } from "../../services/BusServices";
import Modal from "../Modal/Modal";
import logo from "../../assets/logotipo-light.webp";

import "./tablaBuses.css"; // Asegúrate de importar el archivo de estilos

const TablaBuses = () => {
  const [buses, setBuses] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBus, setSelectedBus] = useState(null); // Para el bus seleccionado
  const [showDetailModal, setShowDetailModal] = useState(false); // Para abrir/cerrar el modal

  const pageSize = 5;

  const fetchBuses = async () => {
    const data = await getBuses(page, pageSize);
    setBuses(data.content);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchBuses();
  }, [page]);

  const openDetailModal = async (busId) => {
    const busDetails = await getBusById(busId);
    setSelectedBus(busDetails); // Establecer los detalles del bus
    setShowDetailModal(true); // Abrir el modal
  };

  return (
    <div className="container">
      <div className="contenedorTitulo">
        <div className="contenedorImagen">
          <img src={logo}></img>
        </div>
        <h2 className="titulo">Lista de Buses</h2>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Número</th>
              <th>Placa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.id}</td>
                <td>{bus.numeroBus}</td>
                <td>{bus.placa}</td>
                <td>
                  <button onClick={() => openDetailModal(bus.id)}>
                    Ver Más
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          disabled={page === 0}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Anterior
        </button>
        <span className="page-info">
          Página {page + 1} de {totalPages}
        </span>
        <button
          disabled={page >= totalPages - 1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Siguiente
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={showDetailModal}
        onClose={() => setShowDetailModal(false)}
        bus={selectedBus}
      />
    </div>
  );
};

export default TablaBuses;
