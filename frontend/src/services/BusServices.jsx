// services/BusServices.js
export const getBuses = async (page, size) => {
  const response = await fetch(`http://localhost:8080/bus?page=${page}&size=${size}`);
  const data = await response.json();
  return data;  // Devuelve el contenido de la respuesta para usarlo en la tabla
};

export const getBusById = async (id) => {
  const response = await fetch(`http://localhost:8080/bus/${id}`);
  const data = await response.json();
  return data;
};

  
  export const addBus = async (busData) => {
    const response = await fetch('http://localhost:8080/bus', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(busData),
    });
    return await response.json();
  };
  
  export const updateBus = async (id, busData) => {
    const response = await fetch(`http://localhost:8080/bus/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(busData),
    });
    return await response.json();
  };
  
  export const deleteBus = async (id) => {
    await fetch(`http://localhost:8080/bus/${id}`, { method: 'DELETE' });
  };
  