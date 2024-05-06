import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Step2 = ({ prevStep, nextStep, saveReservationData }) => {
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  // Manejar cambio en el input del nombre
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
    // Manejar cambio en el input del apellido
    const handleTelefonoChange = (e) => {
      setTelefono(e.target.value);
    };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Guardar el nombre en el estado de la reserva y avanzar al siguiente paso
    saveReservationData({ email, telefono });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="email"
        label="E-mail"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={handleEmailChange} required  />
      </FloatingLabel>

      <FloatingLabel
        controlId="telefono"
        label="Telefono"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com"  value={telefono} onChange={handleTelefonoChange} required />
      </FloatingLabel>
      <Button variant="danger" onClick={prevStep}>Volver</Button>{' '}
      <Button variant="dark" type="submit">Siguiente</Button>

    </Form>
  );
};

export default Step2;