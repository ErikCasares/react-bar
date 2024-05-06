import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Step4 = ({prevStep, nextStep, saveReservationData }) => {
  const [nombre, setNombre] = useState('');

  // Manejar cambio en el input del nombre
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ nombre });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" value={nombre} onChange={handleNombreChange} required />
      </Form.Group>
      <Button variant="dark" onClick={prevStep}>Volver</Button>{' '}
      <Button variant="dark" type="submit">Siguiente</Button>
    </Form>
  );
};

export default Step4;