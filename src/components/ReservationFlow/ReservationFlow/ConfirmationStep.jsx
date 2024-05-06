import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ConfirmationStep = ({ reservationData, prevStep }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Confirmar Reserva</Card.Title>
        <Card.Text>
          <strong>Nombre:</strong> {reservationData.nombre} <br />
          <strong>Apellido:</strong> {reservationData.apellido} <br />
          <strong>Correo electrónico:</strong> {reservationData.email} <br />
          <strong>Teléfono:</strong> {reservationData.telefono} <br />
          <strong>Cantidad de personas:</strong> {reservationData.cantidadPersonas} <br />
          <strong>Preferencias:</strong> {reservationData.preferencias} <br />
        </Card.Text>
        <Button variant="dark" onClick={prevStep}>Volver</Button>{' '}
        <Button variant="success">Confirmar Reserva</Button>
      </Card.Body>
    </Card>
  );
};

export default ConfirmationStep;