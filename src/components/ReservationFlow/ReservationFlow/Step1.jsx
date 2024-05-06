import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Step1 = ({ nextStep, saveReservationData }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  // Manejar cambio en el input del nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };
    // Manejar cambio en el input del apellido
    const handleApellidoChange = (e) => {
      setApellido(e.target.value);
    };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ nombre, apellido });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={nombre} onChange={handleNombreChange} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="apellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" value={apellido} onChange={handleApellidoChange} required />
      </Form.Group>
      <Button variant="dark" type="submit">Siguiente</Button>
    </Form>
  );
};

export default Step1;